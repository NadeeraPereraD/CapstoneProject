import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import InitialScreen from './screens/InitialScreen'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <InitialScreen/>
    </View>
  )
}

export default App 