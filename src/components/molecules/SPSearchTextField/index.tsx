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
    value: string;
    onChange: (value: string) => void;
    placeholderText: string;
    keyboardType?: KeyboardTypeOptions;
  };
  
  const SPSearchTextField = ({
    value,
    onChange,
    placeholderText,
    keyboardType = 'default',
  }: TextFieldProps) => {
    const styles = useStyles();
  
    return (
      <View style={styles.mainContainer}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholderText}
          placeholderTextColor= '#FFFFFF'
          style={styles.textInputContainer}
          keyboardType={keyboardType}
        /> 
      </View>
    );
  };
  
  export default SPSearchTextField;
  