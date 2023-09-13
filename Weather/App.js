import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from './src/pages/Home'

export default function App() {
  return (
    <View style= {styles.container}>
      <StatusBar backgroundColor='#46474a' style="light"/>

        <Home/>  

    </View>
  );
}

const styles = StyleSheet.create
({
    container: 
    {
      flex: 1,
    },
});