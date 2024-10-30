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
import {Language, ThemeName} from '../constants/interfaces';
import CloseGameModal from '../components/customs/CloseGameModal';
import CardNavigation from '../components/screenComponents/game/CardNavigation';
import CheckBlock from '../components/screenComponents/game/CheckBlock';

const width = Dimensions.get('screen').width;

export default function GameScreen({navigation, route}: any) {
  const theme: ThemeName['value'] = 'olive';
  const language: Language['value'] = 'UA';

  const [modal, setModal] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>();
  const [finishAvailable, setFinishAvailable] = useState<boolean>(false);

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
        icon={'close'}
        action={() => {
          setModal(true);
        }}
      />
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
      <CheckBlock
        theme={theme}
        language={language}
        finishAvailable={finishAvailable}
        onCheck={() => {}}
      />
      <CardNavigation
        theme={theme}
        words={route.params.words}
        type={route.paramstype}
        wordIndex={wordIndex}
        setWordIndex={(i: number) => {
          if (i === route.params.words.length - 1) {
            setFinishAvailable(true);
          }
          setWordIndex(i);
        }}
      />

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
