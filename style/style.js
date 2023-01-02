/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const bgColor = '#bbe7e2';
const primaryColor = '#006d77';
const secondaryColor = '#d2e8ea';
const lightColor = '#edf6f9';

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        textAlign: 'center',
    },
    container: {
        // paddingTop: 20,
        paddingHorizontal: 15,
        height: '100%',
        backgroundColor: bgColor,
    },
    primaryButton: {
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        fontWeight: '600',
        color: '#edf6f9',
    },
});

export { bgColor, styles, primaryColor, secondaryColor, lightColor };
