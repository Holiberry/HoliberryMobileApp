// packages
import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';
import colors from "../../constants/colors";

const AddButton = ({children, onClick, outline}) => {
    return (
        <TouchableOpacity style={[styles.button, outline && styles.outline]} onPress={onClick}>
            {/*<FontAwesome5 name="plus" size={20} color={colors.primary}/>*/}
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    outline: {
      borderRadius: 8,
        borderColor: colors.primary,
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 5
    },
    text: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: "bold"
    },
});

export default AddButton;