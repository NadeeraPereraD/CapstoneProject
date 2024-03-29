import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from '../../screens/InitialScreen';
import LoginScreen from '../../screens/LoginScreen';
import BottomTabNavigator from '../BottomTabNavigator';
import HomeStackNavigator from '../BottomTabNavigator/HomeStackNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#FFFFFF',

          headerShown: true,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{headerShown: false}}/>

      </Stack.Navigator>

      
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
