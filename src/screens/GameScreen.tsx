import {
  BackHandler,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/customs/Header';
import {colors} from '../constants/colors';
import {Language, ThemeName, UserData} from '../constants/interfaces';
import CloseGameModal from '../components/customs/CloseGameModal';
import CardNavigation from '../components/screenComponents/game/CardNavigation';
import CheckBlock from '../components/screenComponents/game/CheckBlock';
import {text} from '../constants/text';
import CardsListBlock from '../components/screenComponents/game/CardsListBlock';
import {rules} from '../constants/rules';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import GameBottomBlock from '../components/screenComponents/game/GameBottomBlock';

const {width, height} = Dimensions.get('screen');
const shortScreen = height / width < 1.8;
export default function GameScreen({navigation, route}: any) {
  const userData: UserData = useSelector((state: RootState) => state.userData);
  const theme: ThemeName = userData.theme;
  const language: Language = userData.language;

  const [modal, setModal] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>();
  const [finishAvailable, setFinishAvailable] = useState<boolean>(
    route.params.type === 'stamina' || false,
  );
  const [cardsShow, setCardsShow] = useState<boolean>(false);

  useEffect(() => {
    const backAction = () => {
      if (modal) {
        setModal(false);
        return true;
      } else {
        setModal(true);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [modal]);

  useEffect(() => {
    setStartTime(new Date().getTime());
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <Header
        theme={theme}
        icon={'close'}
        action={() => {
          setModal(true);
        }}
        secondary={route.params.type === 'easy'}
        secondaryTitle={
          cardsShow ? text[language].backToCards : text[language].list
        }
        secondaryAction={() => {
          setCardsShow(!cardsShow);
          if (!cardsShow) {
            setFinishAvailable(true);
          }
        }}
      />
      {cardsShow ? (
        <CardsListBlock
          theme={theme}
          wordsList={route.params.words}
          onOpenCard={(index: number) => {
            setWordIndex(index);
            setCardsShow(false);
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Text style={{fontSize: width * 0.1, color: colors[theme].main}}>
            {route.params.words[wordIndex].charAt(0).toUpperCase() +
              route.params.words[wordIndex].slice(1)}
          </Text>
        </View>
      )}

      <CheckBlock
        theme={theme}
        language={language}
        finishAvailable={finishAvailable}
        buttonTitle={text[language].Check}
        comment={text[language].IfYouReadyToCheck}
        onCheck={() => {
          navigation.navigate('CheckScreen', {
            start: startTime,
            finish: new Date().getTime(),
            words:
              route.params.type === 'stamina'
                ? route.params.words.slice(0, wordIndex + 1)
                : route.params.words,
            type: route.params.type,
          });
        }}
        shortScreen={shortScreen}
      />
      <View
        style={{
          width: width * rules.widthNumber,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: width * 0.05,
          height: width * 0.15,
        }}>
        {cardsShow ? (
          <></>
        ) : (
          <CardNavigation
            theme={theme}
            words={route.params.words}
            type={route.params.type}
            wordIndex={wordIndex}
            setWordIndex={(i: number) => {
              if (i === route.params.words.length - 1) {
                setFinishAvailable(true);
              }
              setWordIndex(i);
            }}
            back={route.params.type === 'easy'}
          />
        )}
      </View>
      {/* <GameBottomBlock
        theme={theme}
        mainButton={{
          title: text[language].Check,
          action: () => {
            console.log('a');
          },
          active: true,
        }}
        language={language}
        width={width}
        wordNumber={wordIndex + 1}
        wordsAmount={route.params.words.length}
      /> */}

      <CloseGameModal
        theme={theme}
        language={language}
        visible={modal}
        onClose={() => setModal(false)}
        onSubmit={() => {
          setModal(false);
          navigation.goBack();
          // TODO save statistics
        }}
      />
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
