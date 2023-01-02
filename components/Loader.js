/* eslint-disable prettier/prettier */
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import { bgColor, primaryColor } from '../style/style';

const Loader = () => {
  return (
    <View style={inStyles.loaderContainer}>
      <ActivityIndicator size="large" color={primaryColor} />
    </View>
  );
};

export default Loader;

const inStyles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
    },
});
