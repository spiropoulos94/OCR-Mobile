import { useContext } from "react"
import { View, Text } from "react-native"
import { CLOUD_VISION_API_KEY, API_KEY, API_URL, PROJECT_ID } from "@env"
import { Button } from "@rneui/base"
import ImagePicker from 'react-native-image-crop-picker';
import mockMonitorData from "../../mock.json"
import { ACCESS_TOKEN } from "../../env.json"
import { MonitoringContext } from "../../contexts/monitor.context"

const isTest = false

const getImageInBase64 = async () => {
  try {
    let base64 = await ImagePicker.openPicker({
      width: 150,
      height: 100,
      cropping: true,
      includeBase64: true,
    }).then(image => image.data);

    return base64
  } catch (e) {
    if (e.code != "E_PICKER_CANCELLED") {
      throw new Error(`error in getImageInBase64: ${e.message}`)
    }
  }

}

function generateReqBody(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION', //we will use this API for text detection purposes.
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}

export async function callGoogleVisionAsync(image) {

  console.log("callGoogleCloud runs")

  if (isTest) {
    return mockResponseJSON
  }

  const body = generateReqBody(image); //pass in our image for the payload
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
}

const getMetrics = async () => {
  try {
    if (isTest) {
      return mockMonitorData
    }

    // ftiakse to access token
    const accessToken = ACCESS_TOKEN;
    const projectId = PROJECT_ID;
    const metricFilter = 'metric.type="serviceruntime.googleapis.com/api/request_count"';
    //ftiakse to timerange na einai dynamiko
    // Get the current date
    const currentDate = new Date();
    // Calculate the start date as 30 days ago
    const startDate = new Date(currentDate.getTime() - (30 * 24 * 60 * 60 * 1000));
    // Format the dates as ISO strings
    const startTime = startDate.toISOString();
    const endTime = currentDate.toISOString();

    // Construct the time range string
    const timeRange = `interval.start_time=${startTime}&interval.end_time=${endTime}`;

    // const timeRange = 'interval.start_time=2023-02-10T00:00:00.000Z&interval.end_time=2023-03-12T00:00:00.000Z';

    const apiUrl = `https://monitoring.googleapis.com/v3/projects/${projectId}/timeSeries?filter=${metricFilter}&${timeRange}`;

    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })


    let data = await response.json()

    if (data.error && data.error.message) {
      throw new Error(data.error.message)
    }

    let cloudVisionRequests = 0

    data.timeSeries.map(ts => {
      if (ts.resource.labels.service.includes("vision")) {
        ts.points.forEach(p => {
          cloudVisionRequests += parseInt(p.value.int64Value)
        })
      }
    })

    return data
  } catch (e) {
    throw new Error(`error in get metrics: ${e.message}`)
  }
}

const extractMetricsFromData = (monitorData) => {
  let totalRequests = {
    vision: 0,
    monitoring: 0
  }
  monitorData.timeSeries.map(ts => {
    let key = ""
    switch (true) {
      case ts.resource.labels.service.includes("vision"):
        key = "vision"
        break;
      case ts.resource.labels.service.includes("monitoring"):
        key = "monitoring"
        break;
      default:
      // do something if myProperty does not contain either "string one" or "string two"
    }
    ts.points.forEach(p => {
      totalRequests[key] += parseInt(p.value.int64Value)
    })
  })

  return totalRequests
}

const CloudVisionTab = () => {

  const { state, dispatch } = useContext(MonitoringContext);

  const handlePress = async () => {
    try {
      let image = await getImageInBase64()
      if (image) {
        let test = await callGoogleVisionAsync(image)
      }
    } catch (e) {
      alert(e.message)
      console.log(e)
    }
  }

  const handlePressSecondary = async () => {
    try {
      let monitorData = await getMetrics()
      let totalRequests = extractMetricsFromData(monitorData)
      dispatch({ type: "UPDATE_MONITORING", payload: totalRequests })
    } catch (e) {
      alert(e.message)
      console.log(e)
    }
  }

  return (<View>
    <Text>This is the cloud vision tab</Text>
    <Button onPress={() => handlePress()} title={'Library select'}></Button>
    <Button onPress={() => handlePressSecondary()} title={'test monitoring'}></Button>
  </View>)
}

export default CloudVisionTab;

// PREPEI NA VGALW TO 37