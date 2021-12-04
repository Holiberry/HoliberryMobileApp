// packages
import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AddButton = ({children, onClick}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Ionicons name="add-outline" size={32} color="black" />
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
     button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    }
});

export default AddButton;