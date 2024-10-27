import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Language, ThemeName} from '../constants/interfaces';
import {colors} from '../constants/colors';
import {rules} from '../constants/rules';
import {text} from '../constants/text';
import Icon from '../components/icons/Icon';
import Header from '../components/customs/Header';

const width = Dimensions.get('screen').width;

export default function NewGameScreen({navigation}: any) {
  const theme: ThemeName['value'] = 'olive';
  const language: Language['value'] = 'UA';
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <Header icon={'chevronLeft'} action={() => navigation.goBack()} />
      <View>
        <Text>{text[language].NewGame}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentBlock: {
    width: width * rules.widthNumber,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
