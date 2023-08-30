import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {LocalBgImages} from '../../assets/BackgroundImage';
import {LocalSpotifyBWImages} from '../../assets/SpotifyBWImage';

const InitialScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.imageContainer}
        source={LocalBgImages.backgroundImage}
      />
      <View style={styles.midViewContainer}>
        <Image
          style={styles.midViewImageContainer}
          source={LocalSpotifyBWImages.backgroundImage}
        />
        <Text style={styles.textContainer}>
          Millions of Songs.
        </Text>
        <Text style={styles.textContainer}>
          Free on Spotify.
        </Text>
      </View>
    </View>
  );
};

export default InitialScreen;
