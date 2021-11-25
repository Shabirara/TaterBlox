import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';

const MainStack = createStackNavigator();

export function Router() {
    return (
        <MainStack.Navigator initialRouteName="BottomTab" screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="BottomTab" component={BottomTab} />
        </MainStack.Navigator>
    );
}
