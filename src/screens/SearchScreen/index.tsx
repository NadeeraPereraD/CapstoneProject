import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SPSearchTextField from '../../components/molecules/SPSearchTextField';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Fontisto';

const SearchScreen = () => {
  const [searchName, setSearchName] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
      <Fontisto
          //style={styles.iconContainer}
          style={styles.iconContainer}
           name="search"
           size={20}
           color="#FFFFFF"
         />
         <SPSearchTextField
           value={searchName}
           onChange={searchName => {
             setSearchName(searchName);
           }}
           placeholderText="Search"
           keyboardType="default"
         />
        <View>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.loginButtonContainer}>Cancel</Text>
       </TouchableOpacity>
        </View>
      
      </View>

      

    </View>
  );
};

export default SearchScreen;
