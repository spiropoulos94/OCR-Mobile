import {View, Text} from "react-native"
import {CLOUD_VISION_API_KEY, API_KEY, API_URL} from "@env"
import { Button } from "@rneui/base"
import ImagePicker from 'react-native-image-crop-picker';

const getImageInBase64 = async () => {
   let base64 = await ImagePicker.openPicker({
        width: 150,
        height: 100,
        cropping: true,
        includeBase64: true,
      }).then(image => image.data);
      
      return base64
}

function generateBody(image) {
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

async function callGoogleVisionAsync(image) {
    const body = generateBody(image); //pass in our image for the payload
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


const CloudVisionTab = () => {

    const handlePress = async () => {
        let image = await getImageInBase64()
        await callGoogleVisionAsync(image)
    }
      
    return (<View>
        <Text>This is the cloud vision tab</Text>
        <Button onPress={()=>handlePress()} title={'Library select'}></Button>
    </View>)
}

export default CloudVisionTab;
