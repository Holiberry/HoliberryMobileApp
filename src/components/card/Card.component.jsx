// packages
import React from 'react'
import {View, StyleSheet} from 'react-native'

// components
import {ContextMenu} from "./ContextMenu.component";

const Card = ({children, otherStyles}) => {

    return (
        <View
            style={[styles.card, styles.shadowProp, otherStyles]}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        marginBottom: 20,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    }
});

export default Card;