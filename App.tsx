import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Stacknavigator from './src/navigation/Stacknavigator'

const App = () => {
  return (
    <SafeAreaProvider>
     <NavigationContainer>
      <Stacknavigator/>
    
     </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})