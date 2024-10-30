import {BackHandler, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/customs/Header';
import {colors} from '../constants/colors';
import {Language, ThemeName} from '../constants/interfaces';
import CloseGameModal from '../components/customs/CloseGameModal';
import CardNavigation from '../components/screenComponents/game/CardNavigation';

export default function GameScreen({navigation, route}: any) {
  const theme: ThemeName['value'] = 'olive';
  const language: Language['value'] = 'UA';

  const [modal, setModal] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);

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
      <View></View>
      <View>
        <CardNavigation
          theme={theme}
          words={route.params.words}
          type={route.paramstype}
          wordIndex={wordIndex}
          setWordIndex={(i: number) => setWordIndex(i)}
        />
      </View>
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
