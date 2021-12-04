import React from 'react'
import {StyleSheet, useWindowDimensions, View} from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';

import colors from '../../constants/colors';
import myStyles from '../../constants/myStyles';

const ProgressInfo = ({children, value = 0, isLoading}) => {
    const width = useWindowDimensions().width;

    return isLoading ? null : (
        <View style={styles.progressBox}>
            <View style={[styles.progressCircleBG, {left: width * 0.02}]}></View>
            <View style={styles.progressContent}>
                <View style={[styles.progressBarWrapper, {marginLeft: width * 0.02 + 10}]}>
                    <CircularProgress
                        value={value}
                        activeStrokeWidth={10}
                        radius={40}
                        textColor={colors.gray}
                        inActiveStrokeColor={colors.lightGray}
                        valueSuffix={'%'}
                        fontSize={18}
                    />
                </View>
                <View style={styles.progressText}>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBox: {
        backgroundColor: colors.white,
        marginHorizontal: 2 * myStyles.marginHorizontal,
        borderRadius: 8,
        height: 80,
        transform: [{translateY: -40}],
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // elevation: 5,
        position: 'relative',
    },
    progressCircleBG: {
        backgroundColor: colors.white,
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        left: 20,
        top: -10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    progressContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        flex: 1,
        elevation: 5,
        flexDirection: 'row',
    },
    progressText: {
        paddingLeft: 10,
        paddingVertical: 5,
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'center',
    }
});

export default ProgressInfo;
