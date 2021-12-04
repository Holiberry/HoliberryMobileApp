// packages
import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {Text, View, StyleSheet} from 'react-native';

// const
import { color } from "react-native-reanimated";

const MyProgressCircle = ({totalSteps, currentStep, title, next}) => {
    return (
        <View style={styles.container}>
            <ProgressCircle
                percent={currentStep /  totalSteps * 100}
                radius={50}
                borderWidth={8}
                color={color.primary}
                shadowColor="#DDD"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{`${currentStep} of ${totalSteps}`}</Text>
            </ProgressCircle>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.next}>{`Następnie: ${next}`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    text: {
        flexGrow: 1,
        display: "flex",
        paddingLeft: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    next: {
        textAlign: "center",
    }
});

export default MyProgressCircle