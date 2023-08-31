import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../../screens/InitialScreen';
import LoginScreen from '../../screens/LoginScreen';
import AuthNavigator from '../AuthNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}/>
        <Stack.Navigator
            initialRouteName='Initial'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Initial' component={InitialScreen}/>
            <Stack.Screen name='Login' component={AuthNavigator}/>

        </Stack.Navigator>
    </SafeAreaView>
    // <InitialScreen/>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})