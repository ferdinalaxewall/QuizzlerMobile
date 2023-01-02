import {StatusBar} from 'react-native';
import React from 'react';
import {bgColor} from '../style/style';

const Bar = () => {
  return <StatusBar barStyle="dark-content" backgroundColor={bgColor} />;
};

export default Bar;
