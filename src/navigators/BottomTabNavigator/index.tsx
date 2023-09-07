import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import YourLibraryScreen from '../../screens/YourLibraryScreen';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#E5E5E5',
            headerShown: false,
            tabBarHideOnKeyboard: false,
            tabBarStyle:{
                backgroundColor: '#000000'
            },
            
            // headerTintColor: '#000000'
        }}>
        <Tab.Screen
            name='HomeTab'
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name='home-variant' color={'#FFFFFF'} size={20}/>
                ),
            }}       
        />
        <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: () => (
                        <Fontisto
                            name="search"
                            color= {'#FFFFFF'}
                            size={20}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="YourLibrary"
                component={YourLibraryScreen}
                options={{
                    headerShown: false,
                    // headerStyle: {
                    //     backgroundColor: '#7240FF',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: '600',
                    // },
                    // headerRight: () => <DAHeaderRight />,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="bookshelf" color={'#FFFFFF'} size={20} />
                    ),
                    // tabBarBadge: 3,
                }}
            />
    </Tab.Navigator>

  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})