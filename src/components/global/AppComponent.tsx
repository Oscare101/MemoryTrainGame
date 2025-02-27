import {Dimensions, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeName} from '../../constants/interfaces';
import MainNavigation from '../navigation/MainNavigation';
import Toast from 'react-native-toast-message';

const width = Dimensions.get('screen').width;

export default function AppComponent() {
  const theme: ThemeName = 'olive';
  const toastConfig = {
    ToastMessage: ({props}: any) => (
      <View
        style={{
          width: '92%',
          backgroundColor: '#000',
          padding: width * 0.04,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: width * 0.015,
        }}>
        <Text
          style={{
            fontSize: width * 0.042,
            color: '#fff',
            textAlign: 'left',
          }}>
          {props.title}
        </Text>
      </View>
    ),
  };
  return (
    <>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
}
