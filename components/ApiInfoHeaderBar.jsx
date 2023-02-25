import {View, Text, StyleSheet, SafeAreaView} from "react-native"

const ApiInfoHeaderBar = () => {
    return <SafeAreaView style={styles.wrapper}>
                <Text>Test</Text>
            </SafeAreaView>
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "red",
    }
})

export default ApiInfoHeaderBar