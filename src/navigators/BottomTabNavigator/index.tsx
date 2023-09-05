import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectedHomeScreen from '../../screens/SelectedHomeScreen';
import YourLibraryScreen from '../../screens/YourLibraryScreen';
import HomeScreen from '../../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#E5E5E5',
            headerShown: false,
            tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
            name='HomeTab'
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name='home-variant'/>
                ),
            }}       
        />
        <Tab.Screen
                name="Search"
                component={SelectedHomeScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="tag-multiple"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="YourLibrary"
                component={YourLibraryScreen}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#7240FF',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                    // headerRight: () => <DAHeaderRight />,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="info" color={color} size={size} />
                    ),
                    // tabBarBadge: 3,
                }}
            />
    </Tab.Navigator>

  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})