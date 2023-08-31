import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {LocalBgImages} from '../../assets/BackgroundImage';
import {LocalSpotifyBWImages} from '../../assets/SpotifyBWImage';
import LoginScreen from '../LoginScreen';
import SPButtons from '../../components/atoms/SPButtons';
import SPChips from '../../components/atoms/SPChips';
import { LocalGoogleImage } from '../../assets/GoogleImage';
import { LocalFBImages } from '../../assets/FacebookImage';
import AuthNavigator from '../../navigators/AuthNavigator';
import {useNavigation} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const InitialScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={true}>
      <Image
        style={styles.imageContainer}
        source={LocalBgImages.backgroundImage}
      />
      <View style={styles.midViewContainer}>
        <Image
          style={styles.midViewImageContainer}
          source={LocalSpotifyBWImages.backgroundImage}
        />
        <Text style={styles.textContainer}>Millions of Songs.</Text>
        <Text style={styles.textContainer}>Free on Spotify.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <SPButtons
          title='Sign up for free'
          onPress = {() => {           
          }}
        />
        <SPChips
          title='Continue with Google'
          onPress={() => {
          } } 
          logo={LocalGoogleImage.backgroundImage}        
        />
        <SPChips
          title='Continue with Facebook'
          onPress={() => {
          } } 
          logo={LocalFBImages.backgroundImage}        
        />
        <TouchableOpacity onPress={() => {
          navigation.navigate('Login');
        }}>
          <Text style={styles.loginButtonContainer}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default InitialScreen;
