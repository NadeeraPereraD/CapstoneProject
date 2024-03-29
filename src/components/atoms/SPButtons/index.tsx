import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

type FilledButtonProps = {
    title: string;
    onPress : () => void;
}

const SPButtons = ({
    title,
    onPress    
}: FilledButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <Text style={styles.labelContainer}>{title}</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default SPButtons

