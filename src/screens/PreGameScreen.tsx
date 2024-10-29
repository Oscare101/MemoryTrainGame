import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Language, ThemeName} from '../constants/interfaces';
import Header from '../components/customs/Header';
import {colors} from '../constants/colors';
import {text} from '../constants/text';
import {rules} from '../constants/rules';
import GradientButton from '../components/customs/GradientButton';
import Icon from '../components/icons/Icon';
import {TextInput} from 'react-native-gesture-handler';
import {words} from '../constants/words';
import Toast from 'react-native-toast-message';
import {GetRandomWords} from '../functions/funtions';

const width = Dimensions.get('screen').width;

export default function PreGameScreen({navigation, route}: any) {
  const theme: ThemeName['value'] = 'olive';
  const language: Language['value'] = 'UA';

  const [wordsAmount, setWordsAmount] = useState<string>(
    route.params.game.type === 'stamina'
      ? words[language].length.toString()
      : rules.defaultWordsAmount.toString(),
  );

  useEffect(() => {
    if (+wordsAmount > words[language].length) {
      Toast.show({
        type: 'ToastMessage',
        props: {
          title: text[language].wordsMaxWarning.replace(
            '#',
            words[language].length.toString(),
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
      <Header icon={'chevronLeft'} action={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          width: width * rules.widthNumber,
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: width * 0.02,
          }}>
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
                  +wordsAmount > words[language].length
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
              paddingTop: width * 0.02,
            }}>
            <Text
              style={{
                color: colors[theme].main,
                fontSize: width * 0.042,
                marginBottom: width * 0.1,
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
          style={{
            flex: 1,
            width: '100%',

            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            gap: width * 0.02,
            marginBottom: width * 0.1,
          }}>
          <Text
            style={{
              color: colors[theme].comment,
              fontSize: width * 0.042,
              marginBottom: width * 0.1,
            }}>
            {text[language].gamePreambula}
          </Text>
          <GradientButton
            title={text[language].Start}
            bgColors={
              !wordsAmount.length || +wordsAmount > words[language].length
                ? colors[theme].buttonDisabled
                : colors[theme].buttonActive
            }
            titleColor={
              !wordsAmount.length || +wordsAmount > words[language].length
                ? colors[theme].buttonTitleDisabled
                : colors[theme].buttonTitleActive
            }
            icon={'play'}
            onPress={() => {
              const wordsArray = GetRandomWords(words[language], +wordsAmount);

              navigation.navigate('GameScreen', {
                type: route.params.game.type,
                words: wordsArray,
              });
            }}
            cardStyle={{width: '100%', borderRadius: width * 0.04}}
            disables={
              !wordsAmount.length || +wordsAmount > words[language].length
            }
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
});
