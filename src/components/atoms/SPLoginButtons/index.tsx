import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

type LoginButtonProps = {
    title: string;
    onPress : () => void;
}

const SPLoginButtons = ({
    title,
    onPress    
}: LoginButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <Text style={styles.labelContainer}>{title}</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default SPLoginButtons

