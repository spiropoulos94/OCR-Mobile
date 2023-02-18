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


const CloudVisionTab = () => {

    console.log({CLOUD_VISION_API_KEY, API_KEY, API_URL})

    const handlePress = async () => {
      let res = await getImageInBase64()
      console.log({res})

    }
      
    return (<View>
        <Text>This is the cloud vision tab</Text>
        <Button onPress={()=>handlePress()} title={'Library select'}></Button>
    </View>)
}

export default CloudVisionTab;
