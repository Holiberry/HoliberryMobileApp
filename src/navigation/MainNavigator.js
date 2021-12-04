import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import myStyles from '../constants/myStyles'
import MapScreen from "../screens/app/MapScreen";

const NonAuthStackNavigator = createStackNavigator()
const MainNavigator = () => {

    const forFade = ({current, closing}) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <NonAuthStackNavigator.Navigator
            screenOptions={{...myStyles.defaultNavOptions, cardStyleInterpolator: forFade}}>
            <NonAuthStackNavigator.Screen name='Map' component={MapScreen}/>
        </NonAuthStackNavigator.Navigator>
    )
}

export default MainNavigator