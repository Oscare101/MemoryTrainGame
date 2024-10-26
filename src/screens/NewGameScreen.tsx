import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Language, ThemeName} from '../constants/interfaces';
import {colors} from '../constants/colors';
import {rules} from '../constants/rules';

const width = Dimensions.get('screen').width;

export default function NewGameScreen() {
  const theme: ThemeName['value'] = 'olive';
  const language: Language['value'] = 'UA';
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.05,
  },
  contentBlock: {
    width: width * rules.widthNumber,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
