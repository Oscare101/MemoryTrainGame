import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ThemeName} from './constants/interfaces';
import {colors} from './constants/colors';

const width = Dimensions.get('screen').width;

export default function App() {
  const theme: ThemeName['value'] = 'olive';
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg}]}>
      <StatusBar
        backgroundColor={colors[theme].bg}
        barStyle={colors[theme].barStyle}
      />
      <Text style={[styles.title, {color: colors[theme].main}]}>Main</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: width * 0.15},
});
