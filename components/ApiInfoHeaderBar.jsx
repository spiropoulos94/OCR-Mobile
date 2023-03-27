import { useContext } from "react"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { MonitoringContext } from '../contexts/monitor.context';

const ApiInfoHeaderBar = () => {
    const { state } = useContext(MonitoringContext);
    console.log({ state })

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Monitoring: {state.monitoring}</Text>
                <Text style={styles.text}>Vision: {state.vision}</Text>
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
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 80
    },
    text: {
        fontWeight: "bold"
    }
})

export default ApiInfoHeaderBar