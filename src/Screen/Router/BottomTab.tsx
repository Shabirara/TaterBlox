import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableRipple } from 'react-native-paper'

import Home from '../Home'
import Wishlist from '../Wishlist'

const BottomNav = createMaterialBottomTabNavigator()


export default function BottomTab() {
    return (
        <BottomNav.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarIcon: () => {
                    size: ms(50)
                }
            }}
            activeColor="#f0edf6"
            inactiveColor="#8E9B73"
            barStyle={{
                backgroundColor: 'black',
                justifyContent: 'center'
            }}
            shifting
            sceneAnimationEnabled={true}
        >
            <BottomNav.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="gamepad-round" size={size} color={color} />;
                },
            }} />
            <BottomNav.Screen name='Wishlist' component={Wishlist} options={{
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="gamepad-circle" size={size} color={color} />;
                },
            }} />
        </BottomNav.Navigator >
    )
}
