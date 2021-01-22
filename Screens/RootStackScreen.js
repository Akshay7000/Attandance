import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FirstButtonScreen from './FirstButtonScreen';

import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="FirstButtonScreen" component={FirstButtonScreen} />

    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
