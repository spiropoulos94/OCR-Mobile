import {View, Text} from "react-native"
import {CLOUD_VISION_API_KEY} from "@env"


const CloudVisionTab = () => {

    console.log({CLOUD_VISION_API_KEY})

    return (<View>
        <Text>This is the cloud vision tab</Text>
    </View>)
}

export default CloudVisionTab;