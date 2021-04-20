import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import WebViewComponent from './components/webViewComponent';
import MyAppBar from './components/MyAppBar'

export default function App() {
  return (
      <View style={{flex:1}}>
        <MyAppBar/>
        <WebViewComponent/>
      </View>
  );
}


