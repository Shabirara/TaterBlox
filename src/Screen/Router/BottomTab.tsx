import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {ms} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';

import Home from '../Home';
import Wishlist from '../Wishlist';

const BottomNav = createMaterialBottomTabNavigator();

export default function BottomTab() {
  const theme = useTheme();

  return (
    <BottomNav.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({color}) => {
          let iconName = 'gamepad-circle';
          if (route.name === 'Home') {
            iconName = 'gamepad-round';
          } else if (route.name === 'Wishlist') {
            iconName = 'gamepad-circle';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={ms(20)}
              color={color}
            />
          );
        },
      })}
      activeColor={theme.colors.lightGreen}
      inactiveColor={theme.colors.purple}
      barStyle={{
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
      }}
      shifting
      sceneAnimationEnabled={true}>
      <BottomNav.Screen name="Home" component={Home} />
      <BottomNav.Screen name="Wishlist" component={Wishlist} />
    </BottomNav.Navigator>
  );
}
