import {Dimensions} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeName} from '../../constants/interfaces';
import MainNavigation from '../navigation/MainNavigation';

const width = Dimensions.get('screen').width;

export default function AppComponent() {
  const theme: ThemeName['value'] = 'olive';
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
