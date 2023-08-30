import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './RootNavigator'
import InitialScreen from '../screens/InitialScreen'

const Navigators = () => {
  return (
    <NavigationContainer>
        <RootNavigator/>
    </NavigationContainer>
  )
}

export default Navigators

const styles = StyleSheet.create({})