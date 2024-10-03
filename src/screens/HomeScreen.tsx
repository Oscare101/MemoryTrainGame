import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {ThemeName} from '../constants/interfaces';
import {colors} from '../constants/colors';
import GradientButton from '../components/customs/GradientButton';

const width = Dimensions.get('screen').width;

export default function HomeScreen({navigation}: any) {
  const theme: ThemeName['value'] = 'olive';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <Text style={[styles.title, {color: colors[theme].main[0]}]}>Main</Text>
      <GradientButton
        title="Button"
        bgColors={colors[theme].buttonActive}
        titleColor={colors[theme].buttonTitleActive}
        onPress={() => {}}
      />
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
