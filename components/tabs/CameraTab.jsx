import { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { CLOUD_VISION_API_KEY, API_KEY, API_URL, PROJECT_ID } from "@env"
import { Button } from "@rneui/base"
import ImagePicker from 'react-native-image-crop-picker';
import mockMonitorData from "../../mock.json"
import { ACCESS_TOKEN } from "../../env.json"
import { MonitoringContext } from "../../contexts/monitor.context"
import { useCameraDevices, Camera } from "react-native-vision-camera";



const LoadingView = () => <View><Text>Loading...</Text></View>

const CameraTab = () => {

    const { state, dispatch } = useContext(MonitoringContext);

    const handlePress = async () => {
        try {
            let image = await getImageInBase64()
            if (image) {
                let test = await callGoogleVisionAsync(image)
                console.log({
                    test
                })
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

    const devices = useCameraDevices()
    const device = devices.back

    if (device == null) return <LoadingView />

    return (
        <View>
            {/* //   <Text>This is the cloud vision tab</Text>
    //   <Button onPress={() => handlePress()} title={'Library select'}></Button>
    //   <Button onPress={() => handlePressSecondary()} title={'test monitoring'}></Button> */}
            <Camera
                style={styles.cameraContainer}
                device={device}
                isActive={true}
            />
            <Button style={styles.cameraBtn} title={"Click"}></Button>
        </View>
        // }
    )
}

export default CameraTab;

// PREPEI NA VGALW TO 37

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