import React from 'react'
import {StyleSheet, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';

import Button from './Button';
import myStyles from '../../constants/myStyles';

const NavigationButtons = ({prevAction, nextAction}) => {
    return (
        <View style={styles.buttons}>
            {!!prevAction && (
                <Button
                    style={styles.button}
                    onPress={prevAction}
                >
                    <MaterialIcons name="navigate-before" style={styles.buttonIcon}/>
                </Button>
            )}
            {!!nextAction && (
                <Button
                    style={[styles.button, {marginLeft: 'auto'}]}
                    onPress={nextAction}
                >
                    <MaterialIcons name="navigate-next" style={styles.buttonIcon}/>
                </Button>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        paddingHorizontal: myStyles.marginHorizontal,
        paddingVertical: 5,
    },
    button: {
        ...myStyles.shadow,
    },
    buttonIcon: {
        fontSize: 30,
    }
});

export default NavigationButtons;
