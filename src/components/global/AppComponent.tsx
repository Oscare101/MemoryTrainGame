import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeName} from '../../constants/interfaces';
import MainNavigation from '../navigation/MainNavigation';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

export default function AppComponent() {
  const theme: ThemeName = 'Olive';
  const toastConfig = {
    ToastMessage: ({props}: any) => (
      <View
        style={{
          width: '92%',
          backgroundColor: '#000',
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            textAlign: 'left',
          }}>
          {props.title}
        </Text>
      </View>
    ),
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </Provider>
  );
}
