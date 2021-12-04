import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import colors from "../../constants/colors";

const TextBadge = (
    {
        size = 20,
        color = 'white',
        bgColor = colors.primary,
        val = "",
        passedStyle={}
    }) => {
    return (
        <View
            style={passedStyle}
        >
            <View style={[styles.container, {
                backgroundColor: bgColor,
                height: size,
                width: size,
                borderRadius: size / 2
            }]}>
                <Text
                    style={{
                        color: color,
                        fontSize: size / 2,
                        fontWeight: 'bold'
                    }}
                >
                    {val}
                </Text>
            </View>
        </View>
    )
}

export default TextBadge;

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)
