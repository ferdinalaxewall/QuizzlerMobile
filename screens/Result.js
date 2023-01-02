/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { primaryColor, styles } from '../style/style';
import Title from '../components/Title';

const Result = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={[styles.container, inStyles.container]}>
      <Title text={score >= 70 ? 'Congratulations!' : 'Looks bad :('} />
      <View style={styles.bannerContainer}>
        {
          score >= 70 ? (
            <Image
                source={require('../image/congrats.png')}
                style={styles.banner}
            />
          ) : (
            <Image
                source={require('../image/cheer-up.png')}
                style={styles.banner}
            />
          )
        }
        <Text style={inStyles.scoreText}>Your Score:</Text>
        <Text style={inStyles.scoreNumber}>{score}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.primaryButton, inStyles.button]}>
            <Text style={[styles.primaryButtonText, styles.buttonText]}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const inStyles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
  },
  container: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  scoreText: {
    fontSize: 20,
  },
  scoreNumber: {
    fontSize: 42,
    fontWeight: '600',
    color: primaryColor,
  },
});
