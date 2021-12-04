import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import myStyles from '../constants/myStyles'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'

const NonAuthStackNavigator = createStackNavigator()
const MainNavigator = () => {

    const forFade = ({ current, closing }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <NonAuthStackNavigator.Navigator screenOptions={{...myStyles.defaultNavOptions, cardStyleInterpolator: forFade}}>
            <NonAuthStackNavigator.Screen name='Login' component={LoginScreen} />
            <NonAuthStackNavigator.Screen name='Register' component={RegisterScreen} />
            <NonAuthStackNavigator.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
        </NonAuthStackNavigator.Navigator>
    )
}

export default MainNavigator