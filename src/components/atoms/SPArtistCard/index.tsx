import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gridData} from '../../../DATA/gridData';
import { styles } from '../SPArtistCard/styles';

export type SPArtistProps = {
  id: string;
  artistName: string;
  artWorkUrl: any;
};

const SPArtistCard = ({id, artistName, artWorkUrl}:SPArtistProps) => {
  return (
    <View key={id} style={styles.tagsContainer}>
      <Image style={styles.imageContainer} source={{uri: artWorkUrl}}/>
      <Text style={styles.txtContainer}>{artistName}</Text>
    </View>
  );
};

export default SPArtistCard;
