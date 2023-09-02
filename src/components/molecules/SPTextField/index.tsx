import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useStyles} from './styles';

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  // placeholderText: string;
  isSecure?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

const SPTextField = ({
  label,
  value,
  onChange,
  // placeholderText,
  isSecure = false,
  keyboardType = 'default',
}: TextFieldProps) => {
  const styles = useStyles();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.labelContainer}>{label}</Text>
      {/* <View style={styles.subContainer}> */}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholderTextColor= '#FFFFFF'
        style={styles.textInputContainer}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
      /> 
      {/* </View> */}
    </View>
  );
};

export default SPTextField;
