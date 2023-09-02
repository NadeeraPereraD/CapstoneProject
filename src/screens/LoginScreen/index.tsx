import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SPTextField from '../../components/molecules/SPTextField';
import SPLoginButtons from '../../components/atoms/SPLoginButtons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
      <SPTextField
        label="What`s your username?"
        value={username}
        onChange={(username) => {
          setUsername(username)
        }}
        keyboardType="default"
      />
      <SPTextField
        label="Password"
        value={password}
        onChange={setPassword}
        keyboardType="default"
        isSecure={true}
      />
      <View style={styles.buttonContainer}>
        <SPLoginButtons title="Log in" onPress={() => {
          console.log(setUsername);         
        }} />
      </View>
    </View>
  );
};

export default LoginScreen;
