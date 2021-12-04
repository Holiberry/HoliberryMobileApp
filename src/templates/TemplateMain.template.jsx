import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const TemplateMain = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    }
})

export default TemplateMain;