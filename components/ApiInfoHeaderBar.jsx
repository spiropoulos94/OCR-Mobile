import {View, Text, StyleSheet, SafeAreaView} from "react-native"

const ApiInfoHeaderBar = () => {
    return <SafeAreaView>
        <View style={styles.wrapper}>

                <Text>Test</Text>
        </View>
            </SafeAreaView>
}

const styles = StyleSheet.create({
    wrapper:{
        borderColor: "red",
        padding:10,
        borderWidth:1
    }
})

export default ApiInfoHeaderBar