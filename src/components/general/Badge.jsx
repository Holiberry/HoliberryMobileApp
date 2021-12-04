import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import colors from "../../constants/colors";
import {FontAwesome5} from "@expo/vector-icons";

const SIZE = 50

const Badge = (
    {
        size,
        IconFamily = FontAwesome5,
        icon = "",
        onPress = () => {
        },
        color = 'white',
        bgColor = colors.primary,
    }) => {
    return (
        <View
        >
            <View style={[styles.container, size === 'lg' ? styles.big : {}, {backgroundColor: bgColor}]}>
                {!!IconFamily && <IconFamily
                    name={icon}
                    size={size === 'lg' ? SIZE * 0.45 : SIZE * 0.375}
                    color={color}
                    style={[
                        styles.icon,
                        size === 'lg' ? styles.bigIcon : {}
                    ]}/>}
            </View>
        </View>
    )
}

export default Badge;

const styles = StyleSheet.create(
    {
        container: {
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE * 0.5,
        },
        big: {
            width: SIZE * 1.2,
            height: SIZE * 1.2,
            borderRadius: SIZE * 0.6,
        },
    }
)
