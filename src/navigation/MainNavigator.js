import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import myStyles from '../constants/myStyles'
import MapScreen from "../screens/app/MapScreen";
import UserProfileScreen from "../screens/app/UserProfileScreen";
import UserChallengesScreen from "../screens/app/UserChallengesScreen";

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
            <NonAuthStackNavigator.Screen name='Profile' component={UserProfileScreen}/>
            <NonAuthStackNavigator.Screen name='Challenges' component={UserChallengesScreen}/>
            <NonAuthStackNavigator.Screen name='Map' component={MapScreen}/>

        </NonAuthStackNavigator.Navigator>
    )
}

export default MainNavigator