import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  GameTypeInterface,
  Language,
  TextInterface,
  ThemeName,
} from '../constants/interfaces';
import {colors} from '../constants/colors';
import {rules} from '../constants/rules';
import {text} from '../constants/text';
import Header from '../components/customs/Header';
import RenderNewGameOptionItem from '../components/screenComponents/newGame/RenderNewGameOptionItem';

const {width, height} = Dimensions.get('screen');

const shortScreen = height / width < 1.8;

export default function NewGameScreen({navigation}: any) {
  const theme: ThemeName = 'olive';
  const language: Language = 'UA';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <Header icon={'chevronLeft'} action={() => navigation.goBack()} />
      <View style={styles.contentBlock}>
        <Text
          style={[
            styles.title,
            {
              color: colors[theme].main,
              marginTop: shortScreen ? 0 : width * 0.15,
            },
          ]}>
          {text[language].NewGame}
        </Text>
        <View style={styles.optionsBlock}>
          {Object.values(text[language].options).map((item: any) => (
            <RenderNewGameOptionItem
              key={item.type}
              item={item}
              theme={theme}
              onPress={(game: TextInterface['options']['easy']) => {
                navigation.navigate('PreGameScreen', {game: game});
              }}
            />
          ))}
        </View>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: width * rules.widthNumber,
  },
  title: {
    fontSize: width * 0.1,
  },
  optionsBlock: {
    width: '100%',
    gap: width * 0.03,
    marginBottom: width * 0.1,
  },
});
