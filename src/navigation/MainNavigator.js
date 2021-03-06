import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import myStyles from '../constants/myStyles'
import MapScreen from "../screens/app/MapScreen";
import UserProfileScreen from "../screens/app/UserProfileScreen";
import UserChallengesScreen from "../screens/app/UserChallengesScreen";
import RankingScreen from "../screens/app/RankingScreen";
import PrizeScreen from "../screens/app/PrizeScreen";
import AchievementScreen from "../screens/app/AchievementScreen";
import UserStatsScreen from "../screens/app/UserStatsScreen";

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
            <NonAuthStackNavigator.Screen name='Profile' component={UserProfileScreen}/>
            <NonAuthStackNavigator.Screen name='Challenges' component={UserChallengesScreen}/>
            <NonAuthStackNavigator.Screen name='Ranking' component={RankingScreen}/>
            <NonAuthStackNavigator.Screen name='Prize' component={PrizeScreen}/>
            <NonAuthStackNavigator.Screen name='Achievement' component={AchievementScreen}/>
            <NonAuthStackNavigator.Screen name='Stats' component={UserStatsScreen}/>

        </NonAuthStackNavigator.Navigator>
    )
}

export default MainNavigator