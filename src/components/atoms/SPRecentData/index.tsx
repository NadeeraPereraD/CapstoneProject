import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gridData} from '../../../DATA/gridData';
import { styles } from '../SPRecentData/styles';

export type SPRecentProps = {
  id: string;
  artistName: string;
  artWorkUrl: any;
};

const SPRecentData = ({id, artistName, artWorkUrl}:SPRecentProps) => {
  return (
    <View key={id} style={styles.tagsContainer}>
      <Image style={styles.imageContainer} source={{uri: artWorkUrl}}/>
      <Text style={styles.txtContainer}>{artistName}</Text>
    </View>
  );
};

export default SPRecentData;
