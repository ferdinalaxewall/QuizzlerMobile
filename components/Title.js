import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {primaryColor} from '../style/style';

const Title = ({text = 'Quizzler'}) => {
  return (
    <View style={inStyles.container}>
      <Text style={inStyles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const inStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: primaryColor,
  },
  container: {
    // paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
