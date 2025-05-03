import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Language, ThemeName, UserData, WordPack} from '../constants/interfaces';
import Header from '../components/customs/Header';
import {colors} from '../constants/colors';
import {text} from '../constants/text';
import {rules} from '../constants/rules';
import GradientButton from '../components/customs/GradientButton';
import Icon from '../components/icons/Icon';
import {TextInput} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {GetRandomWords} from '../functions/funtions';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import WordsExport from '../components/words/wordsOutput';

const {width, height} = Dimensions.get('screen');
const shortScreen = height / width < 1.8;
export default function PreGameScreen({navigation, route}: any) {
  const userData: UserData = useSelector((state: RootState) => state.userData);
  const theme: ThemeName = userData.theme;
  const language: Language = userData.language;
  const words: WordPack['words'] = WordsExport(userData.wordPack).words;

  const [wordsAmount, setWordsAmount] = useState<string>(
    route.params.game.type === 'stamina'
      ? words.length.toString()
      : rules.defaultWordsAmount.toString(),
  );

  useEffect(() => {
    if (+wordsAmount > words.length) {
      Toast.show({
        type: 'ToastMessage',
        props: {
          title: text[language].wordsMaxWarning.replace(
            '#',
            words.length.toString(),
          ),
        },
        position: 'top',
      });
    }
  }, [wordsAmount]);

  return (
    <View style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <Header
        theme={theme}
        icon={'chevronLeft'}
        action={() => navigation.goBack()}
      />
      <View style={styles.contentBlock}>
        <View style={[styles.inputBlock, shortScreen ? {} : {flex: 1}]}>
          {route.params.game.type === 'stamina' ? (
            <Icon
              name={'infinity'}
              size={width * 0.2}
              color={colors[theme].main}
            />
          ) : (
            <TextInput
              value={wordsAmount}
              onChangeText={(newValue: string) => {
                if (newValue.length === 0 || /^[1-9][0-9]*$/.test(newValue)) {
                  setWordsAmount(newValue);
                }
              }}
              style={{
                textAlign: 'center',
                fontSize: width * 0.1,
                height: width * 0.2,
                width: width * 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                color:
                  +wordsAmount > words.length
                    ? colors[theme].error
                    : colors[theme].main,
              }}
              placeholder="0"
              placeholderTextColor={colors[theme].comment}
              keyboardType="number-pad"
              selectionColor={
                wordsAmount.length ? colors[theme].main : colors[theme].comment
              }
            />
          )}
          <View
            style={{
              borderTopWidth: 1,
              borderColor: colors[theme].main,
              borderStyle: 'solid',
              paddingTop: shortScreen ? width * 0.01 : width * 0.02,
            }}>
            <Text
              style={{
                color: colors[theme].main,
                fontSize: width * 0.042,
                marginBottom: shortScreen ? width * 0.02 : width * 0.1,
              }}>
              {text[language].WordsAmount}
            </Text>
          </View>

          <Icon
            name={route.params.game.icon}
            size={width * 0.1}
            color={colors[theme].main}
          />
          <Text style={{color: colors[theme].main, fontSize: width * 0.07}}>
            {route.params.game.typeTitle}
          </Text>
        </View>

        <View
          style={[
            styles.infoBlock,
            {marginBottom: shortScreen ? width * 0.02 : width * 0.1},
          ]}>
          <Text
            style={{
              color: colors[theme].comment,
              fontSize: width * 0.042,
              marginBottom: shortScreen ? width * 0.02 : width * 0.1,
            }}>
            {text[language].gamePreambula}
          </Text>
          <GradientButton
            title={text[language].Start}
            bgColors={
              !wordsAmount.length || +wordsAmount > words.length
                ? colors[theme].buttonDisabled
                : colors[theme].buttonActive
            }
            titleColor={
              !wordsAmount.length || +wordsAmount > words.length
                ? colors[theme].buttonTitleDisabled
                : colors[theme].buttonTitleActive
            }
            icon={'play'}
            onPress={() => {
              const wordsArray = GetRandomWords(words, +wordsAmount);

              navigation.navigate('GameScreen', {
                type: route.params.game.type,
                words: wordsArray,
              });
            }}
            cardStyle={{width: '100%', borderRadius: width * 0.04}}
            disables={!wordsAmount.length || +wordsAmount > words.length}
          />
          <Text
            style={{
              color: colors[theme].comment,
              fontSize: width * 0.042,
              textAlign: 'center',
            }}>
            {text[language].startWhenReady + '\n\n'}
          </Text>
        </View>
      </View>
    </View>
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
  inputBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: width * 0.02,
  },
  infoBlock: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    gap: width * 0.02,
  },
});
