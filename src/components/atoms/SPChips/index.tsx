import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../SPChips/styles';

type OutlinedButtonProps = {
    title: string;
    onPress: () => void;
    logo: {} 
}

const SPChips = ({
    title, onPress, logo
}: OutlinedButtonProps) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
       <Image source={logo}/>
       <Text style={styles.labelContainer}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SPChips

