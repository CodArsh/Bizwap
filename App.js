import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Intro from './app/components/Intro';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './app/components/Signup';
import {BaseColors} from './app/config/theme';
import Login from './app/components/Login';
const {Navigator, Screen} = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={BaseColors.lightblue} barStyle={'dark-content'} />
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Intro"
            component={Intro}
            options={{headerShown: false}}
          />
          <Screen
            name="signup"
            component={Signup}
            options={{title: 'Create an account'}}
          />
           <Screen
            name="login"
            component={Login}
            options={{title: 'Signin your account'}}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
