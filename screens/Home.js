/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import { styles } from '../style/style';
import Bar from '../components/Bar';

const Home = ({ navigation }) => {
  return (
    <>
        <Bar />
        <View style={[styles.container, inStyles.container]}>
            <View>
                <Title />
                <Text style={inStyles.author}>Created by Ferdinalaxewall</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={require('../image/thinking-icon.png')}
                    style={styles.banner}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={[inStyles.button, styles.primaryButton]}>
                <Text style={[styles.primaryButtonText, inStyles.buttonText]}>Start</Text>
            </TouchableOpacity>
        </View>
    </>
  );
};

export default Home;

const inStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 20,
    },
    button: {
        paddingVertical: 12,
        width: '100%',
        borderRadius: 16,
    },
    buttonText: {
        fontSize: 18,
    },
    author: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: -20,
    },
});
