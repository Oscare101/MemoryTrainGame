import {
  BackHandler,
  Dimensions,
  FlatList,
  InteractionManager,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {colors} from '../constants/colors';
import {Language, ThemeName, UserData} from '../constants/interfaces';
import Header from '../components/customs/Header';
import CloseGameModal from '../components/customs/CloseGameModal';
import CheckBlock from '../components/screenComponents/game/CheckBlock';
import ConfirmCheckModal from '../components/customs/ConfirmCheckModal';
import {text} from '../constants/text';
import TimeBlock from '../components/screenComponents/check/TimeBlock';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import GameBottomBlock from '../components/screenComponents/game/GameBottomBlock';

const {width, height} = Dimensions.get('screen');
const shortScreen = height / width < 1.8;
export default function CheckScreen({navigation, route}: any) {
  const userData: UserData = useSelector((state: RootState) => state.userData);
  const theme: ThemeName = userData.theme;
  const language: Language = userData.language;

  const [modal, setModal] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [wordsInputs, setWordsInputs] = useState<string[]>(
    Array(route.params.words.length).fill(''),
  );
  const inputRefs = useRef<TextInput[]>([]);
  const flatListRef = useRef<FlatList>(null);

  const time = route.params.finish - route.params.start;

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

  function RenderItem(item: any) {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: width * 0.06, color: colors[theme].main}}>
          {item.index + 1}
        </Text>
        <TextInput
          ref={el => (inputRefs.current[item.index] = el!)} // Store reference
          value={wordsInputs[item.index]}
          onChangeText={(value: string) => {
            let arr = [...wordsInputs];
            arr[item.index] = value;

            setWordsInputs(arr);
          }}
          style={{
            flex: 1,
            color: colors[theme].main,
            fontSize: width * 0.06,
            padding: 0,
            marginLeft: width * 0.05,
            borderBottomWidth: 1,
            borderColor: colors[theme].main,
            borderStyle: 'solid',
          }}
          selectionColor={colors[theme].main}
          autoCapitalize="words"
          returnKeyType={
            item.index === wordsInputs.length - 1 ? 'done' : 'next'
          } // 'done' on last input
          onSubmitEditing={() => {
            const nextIndex = item.index + 1;
            if (nextIndex < wordsInputs.length) {
              flatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
                viewPosition: 0.5, // optional: scrolls the item to middle
              });

              InteractionManager.runAfterInteractions(() => {
                inputRefs.current[nextIndex]?.focus();
              });
            }
          }}
        />
      </View>
    );
  }

  const onCheck = useCallback(() => {
    if (wordsInputs.some((i: any) => !i.trim())) {
      setConfirm(true);
    } else {
      console.log('result');
    }
  }, [wordsInputs]);

  const closeGameModal = useCallback(() => {
    setModal(false);
  }, []);

  const submitCloseGame = useCallback(() => {
    setModal(false);
    navigation.pop(2);
    // TODO save DNF to statistics
  }, []);

  const closeConfirmModal = useCallback(() => {
    setConfirm(false);
  }, []);

  const submitConfirmGame = useCallback(() => {
    setConfirm(false);
    navigation.pop(2);
    // TODO save result to statistics
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
        <Header
          theme={theme}
          icon={'close'}
          action={() => {
            setModal(true);
          }}
        />
        <View style={{flex: 1}}>
          <FlatList
            ref={flatListRef}
            style={{width: width}}
            data={route.params.words}
            renderItem={RenderItem}
            ListFooterComponent={() => <View style={{height: width * 0.2}} />}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <GameBottomBlock theme={theme}>
          <CheckBlock
            theme={theme}
            language={language}
            finishAvailable={true}
            buttonTitle={text[language].Finish}
            comment={text[language].IfYouEnteredWords}
            onCheck={onCheck}
            shortScreen={shortScreen}
          />
          <View style={{flex: 1}} />
          <TimeBlock time={time} language={language} theme={theme} />
        </GameBottomBlock>
        <CloseGameModal
          theme={theme}
          language={language}
          visible={modal}
          onClose={closeGameModal}
          onSubmit={submitCloseGame}
        />
        <ConfirmCheckModal
          theme={theme}
          language={language}
          visible={confirm}
          onClose={closeConfirmModal}
          onSubmit={submitConfirmGame}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.1,
    alignSelf: 'center',
  },
});
