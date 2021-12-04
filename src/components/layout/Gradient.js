import colors from "../../constants/colors";
import {LinearGradient} from "expo-linear-gradient";
import * as React from "react";
import {Dimensions, StyleSheet} from "react-native";

export const Gradient = () => <LinearGradient
    colors={[colors.darkPrimary, colors.primary, colors.secondary]}
    style={styles.gradient}
    start={[0.2, 0.5]}
    end={[0.8, 0.5]}
/>

const multiplier = 2;

const styles = StyleSheet.create({
        gradient: {
            position: 'absolute',
            width: Dimensions.get('window').width * multiplier,
            height: Dimensions.get('window').width * multiplier,
            borderRadius: Dimensions.get('window').width * multiplier * 0.5,
            left: -Dimensions.get('window').width * multiplier * 0.25,
            top: -Dimensions.get('window').width * multiplier * 0.75,
        }
    }
);