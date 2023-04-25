import { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { CLOUD_VISION_API_KEY, API_KEY, API_URL, PROJECT_ID } from "@env"
import { Button } from "@rneui/base"
import { useCameraDevices, Camera } from "react-native-vision-camera";

const LoadingView = () => <View><Text>Loading...</Text></View>

const CameraTab = () => {

    const devices = useCameraDevices()
    const device = devices.back

    if (device == null) return <LoadingView />

    return (
        <View>
            <Camera
                style={styles.cameraContainer}
                device={device}
                isActive={true}
            />
            <Button style={styles.cameraBtn} title={"Click"}></Button>
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