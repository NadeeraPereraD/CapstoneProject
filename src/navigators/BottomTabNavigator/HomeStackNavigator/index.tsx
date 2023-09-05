import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackView, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../../screens/HomeScreen';
import BottomTabNavigator from '..';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Tabs' component={BottomTabNavigator}/>
        
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})