import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import google from "../../../assets/icons/google.png"
import fb from "../../../assets/icons/fb.png"

const OAuthButton = ({site, onPress=()=>{}}) => {
    return (
        <TouchableOpacity
            style={[styles.container, site === 'fb' ? styles.bgFB : styles.bgG]}
            onPress={onPress}
        >
            <Image source={site === 'fb' ? fb : google} style={styles.icon}/>
            <Text style={styles.text}>{site === 'fb' ? 'Facebook' : 'Google'}</Text>
        </TouchableOpacity>
    )
}

export default OAuthButton;

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
        },
        icon: {
            height: 20,
            width: 20,
            marginRight: 4
        },
        bgFB: {
            backgroundColor: '#3b5998'
        },
        bgG: {
            backgroundColor: '#4285F4'
        },
        text: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16
        }
    }
)
