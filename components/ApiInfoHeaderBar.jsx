import { useContext } from "react"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { MonitoringContext } from '../contexts/monitor.context';

const ApiInfoHeaderBar = () => {
    const { state } = useContext(MonitoringContext);
    console.log({ state })

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Text>Monitoring: {state.monitoring}</Text>
                <Text>Vision: {state.vision}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderColor: "red",
        padding: 10,
        borderWidth: 1,
        display: 'flex',
        flexDirection: "row"
    }
})

export default ApiInfoHeaderBar