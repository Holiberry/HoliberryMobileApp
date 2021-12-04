// packages
import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

// components
import {ContextMenu} from "./ContextMenu.component";

const Card = ({children, onClick, otherStyles, contextMenuOptions, disabled}) => {

    const [contextMenu, showContextMenu] = React.useState(false)

    return (
        <TouchableOpacity
            onLongPress={() => showContextMenu(true)}
            onPress={onClick}
            style={[styles.card, styles.shadowProp, otherStyles]}
            disabled={disabled}
        >
            <ContextMenu
                contextMenuOptions={contextMenuOptions}
                opened={contextMenu}
                openHandler={showContextMenu}
            />
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        // marginBottom: 20,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});

export default Card;