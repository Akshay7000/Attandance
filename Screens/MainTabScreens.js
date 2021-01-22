import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0b82e2',
      },
      headerTintColor: '#ffff',
      HeaderTitleStile: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#0b82e2"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </Stack.Navigator>
);
const DetailsStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0b82e2',
      },
      headerTintColor: '#ffff',
      HeaderTitleStile: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#007ce1"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </Stack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#ffff"
    barStyle={{backgroundColor: '#0b82e2'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',

        tabBarIcon: ({color}) => <Icon name="home" color={color} size={20} />,
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarIcon: ({color}) => (
          <Icon name="user-circle" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
