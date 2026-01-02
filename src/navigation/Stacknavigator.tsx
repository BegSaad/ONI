import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../utils/RootParamList';
import { navigationStrings } from '../utils';
import Home from '../screens/homeScreen/Home';
import counter from '../screens/counterScreen/counter';




const Stack = createNativeStackNavigator<RootStackParamList>();
const Stacknavigator = () => {
  return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationStrings.Home}
        component={Home}
      />
      <Stack.Screen
        name={navigationStrings.countersaad}
        component={counter}
      />
    
    </Stack.Navigator>
  )
}

export default Stacknavigator

const styles = StyleSheet.create({})