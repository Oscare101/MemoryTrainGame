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
import GradientButton from '../components/customs/GradientButton';
import QuoteBlock from '../components/screenComponents/home/QuoteBlock';
import {rules} from '../constants/rules';
import {text} from '../constants/text';

const width = Dimensions.get('screen').width;

export default function HomeScreen({navigation}: any) {
  const theme: ThemeName = 'olive';
  const language: Language = 'UA';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <View style={styles.contentBlock}>
        <QuoteBlock theme={theme} language={language} />
      </View>
      <View style={styles.contentBlock}>
        <GradientButton
          title={text[language].Play}
          icon={'play'}
          bgColors={colors[theme].buttonActive}
          titleColor={colors[theme].buttonTitleActive}
          onPress={() => {
            navigation.navigate('NewGame');
          }}
          cardStyle={{width: '100%', borderRadius: width * 0.04}}
        />
      </View>
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
