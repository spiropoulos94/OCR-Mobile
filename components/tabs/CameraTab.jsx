import { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { CLOUD_VISION_API_KEY, API_KEY, API_URL, PROJECT_ID } from "@env"
import { Button } from "@rneui/base"
import { useCameraDevices, Camera, useFrameProcessor } from "react-native-vision-camera";
import { useIsForeground } from "../../hooks/useIsForeground.js"
import 'react-native-reanimated';

const LoadingView = () => <View><Text>Loading...</Text></View>

const CameraTab = () => {

    const devices = useCameraDevices()
    const device = devices.back
    const isForeground = useIsForeground()

    const frameProcessor = useFrameProcessor((frame) => {
        'worklet'
        // console.log(isHotdog ? "Hotdog!" : "Not Hotdog.")
        // console.log("")
        // console.log("Frame")
        // console.log(frame)
        // console.log("")
    }, [])

    if (device == null) return <LoadingView />

    return (
        <View>
            <Camera
                style={styles.cameraContainer}
                device={device}
                isActive={isForeground}
            // frameProcessor={frameProcessor}
            />
            <Button onPress={() => console.log("Click!")} style={styles.cameraBtn} title={"Click"}></Button>
        </View>
    )
}

export default CameraTab;

const styles = StyleSheet.create({
    cameraContainer: {
        borderWidth: 1,
        borderColor: 'red',
        height: 350,
    },
    cameraBtn: {
        backgroundColor: 'red',
        borderWidth: 6,
        borderColor: 'green'
    }
})