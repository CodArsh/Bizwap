import React, {useEffect} from 'react';
import {StatusBar, View, Text, ImageBackground, Image} from 'react-native';
import Intro from '../../components/Intro';
import {Images} from '../../config/images';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        backgroundColor={'#0000'}
        translucent
        barStyle="light-content"
      />
      <Image source={Images.splash} />
    </View>
  );
};

export default SplashScreen;
