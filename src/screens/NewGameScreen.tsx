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
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          width: width * rules.widthNumber,
        }}>
        <Text style={[styles.title, {color: colors[theme].main}]}>
          {text[language].NewGame}
        </Text>
        <View
          style={{
            width: '100%',
            gap: width * 0.03,
            marginBottom: width * 0.1,
          }}>
          {Object.values(text[language].options).map((item: any) => (
            <RenderNewGameOptionItem
              key={item.type}
              item={item}
              theme={theme}
              onPress={(type: GameTypeInterface['type']) => {
                navigation.navigate('', {type: type});
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
    width: width * rules.widthNumber,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: width * 0.1,
    marginTop: width * 0.15,
  },
});
