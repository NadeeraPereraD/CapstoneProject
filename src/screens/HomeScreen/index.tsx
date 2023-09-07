import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {gridData} from '../../DATA/gridData';
import data from '../../DATA/gridData.json';
import SPArtistCard, {SPArtistProps} from '../../components/atoms/SPArtistCard';
import { recentData } from '../../DATA/recentData';
import { ScrollView } from 'react-native';
import SPRecentData, { SPRecentProps } from '../../components/atoms/SPRecentData';
import { editorsData } from '../../DATA/editorsData';



const HomeScreen = () => {

  const tags: SPArtistProps[] = gridData;
  const recent: SPRecentProps[] = recentData;
  const editors: SPRecentProps[] = editorsData;

  const numColumns = 2;

  const [greetings, setGreetings] = useState('Good morning');

  const getGreetings = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour < 12 && currentHour >= 4) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  useEffect(() => {
    const greetings = getGreetings();
    setGreetings(greetings);
  }, [greetings]);






  return (
    <View style={styles.mainContainer}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingTextContainer}>{greetings}</Text>
        <View style={{flexDirection: 'row', margin: 20}}>
          <MaterialCommunityIcons
            name="bell-outline"
            color={'#FFFFFF'}
            size={30}
            style={{marginRight: 20}}
          />
          <MaterialCommunityIcons
            name="history"
            color={'#FFFFFF'}
            size={30}
            style={{marginRight: 20}}
          />
          <Feather name="settings" color={'#FFFFFF'} size={30} />
        </View>
      </View>
      <View style={styles.artistGridContainer}>
        {/* {
          data.gridData.map(item => {
            return(
              <View>
                <Image style={{width: 90, height: 80}} source={{uri: item.artWorkUrl}}></Image>
                <Text>{item.artistName}</Text>
              </View>
            )
          })
        }   */}

        {/* {
          gridData.map(item => {
            return(
              <View style={{flexDirection: 'row'}}>
              <Image style={{width: 90, height: 80}} source={{uri: item.artWorkUrl}}/>
              <Text>{item.artistName}</Text>
              </View>
            )
          })
        } */}

        <FlatList
          data={tags}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          // showsHorizontalScrollIndicator={true}
          // style={{ maxHeight: 100, minHeight: 200 }}
          // ItemSeparatorComponent={() => (
          //   <View>
          //   <View
          //     style={{
          //       height: '100%',
          //       width: 10,
          //     }}
          //   />

          //   </View>

          // )}
          renderItem={({item}) => <SPArtistCard {...item} />}
          numColumns={numColumns}
        />
      </View>
      <View style={styles.recentlyPlayedContainer}>
        <Text style={styles.recentlyPlayedTxtContainer}>Recently played</Text>
        {/* {
          recentData.map(item => {
            return(
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Image style={{width: 90, height: 80}} source={{uri: item.artWorkUrl}}/>
                <Text style={{color: '#FFFFFF'}}>{item.artistName}</Text>
                </View>
              </View>
            )
          })
        } */}
        <FlatList
          data={recent}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          // style={{ maxHeight: 100, minHeight: 200 }}
          // ItemSeparatorComponent={() => (
          //   <View>
          //   <View
          //     style={{
          //       height: '100%',
          //       width: 10,
          //     }}
          //   />

          //   </View>

          // )}
          renderItem={({item}) => <SPRecentData {...item} />}
        />

      </View>
      <View style={styles.recentlyPlayedContainer}>
      <Text style={styles.recentlyPlayedTxtContainer}>Editor's picks</Text>
        <FlatList
          data={editors}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          renderItem={({item}) => <SPRecentData {...item} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
