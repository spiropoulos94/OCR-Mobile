import {View, Text} from "react-native"
import {CLOUD_VISION_API_KEY, API_KEY, API_URL, PROJECT_ID} from "@env"
import { Button } from "@rneui/base"
import ImagePicker from 'react-native-image-crop-picker';

const isTest = false

const getImageInBase64 = async () => {
   let base64 = await ImagePicker.openPicker({
        width: 150,
        height: 100,
        cropping: true,
        includeBase64: true,
      }).then(image => image.data);
      
      return base64
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

    if (isTest){
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
    console.log(result);
  }

  const getMetrics = async () => {
    const accessToken = ''
    const projectId = PROJECT_ID;
const metricFilter = 'metric.type="serviceruntime.googleapis.com/api/request_count"';
const timeRange = 'interval.start_time=2023-02-10T00:00:00.000Z&interval.end_time=2023-03-12T00:00:00.000Z';

const apiUrl = `https://monitoring.googleapis.com/v3/projects/${projectId}/timeSeries?filter=${metricFilter}&${timeRange}`;

const response = await fetch(apiUrl,{
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})

console.log("response apo monitoring:")
console.log(response)

let data = await response.json()

console.log({data})
  }

const CloudVisionTab = () => {

    const handlePress = async () => {
        let image = await getImageInBase64()
        let test = await callGoogleVisionAsync(image)
        console.log({test})
    }
      
    return (<View>
        <Text>This is the cloud vision tab</Text>
        <Button onPress={()=>handlePress()} title={'Library select'}></Button>
        <Button onPress={()=>getMetrics()} title={'test monitoring'}></Button>
    </View>)
}

export default CloudVisionTab;
