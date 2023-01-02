import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import Result from './screens/Result';
import Quiz from './screens/Quiz';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
