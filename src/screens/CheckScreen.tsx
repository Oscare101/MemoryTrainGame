import {
  BackHandler,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../constants/colors';
import {Language, ThemeName} from '../constants/interfaces';
import Header from '../components/customs/Header';
import CloseGameModal from '../components/customs/CloseGameModal';
import CheckBlock from '../components/screenComponents/game/CheckBlock';
import {rules} from '../constants/rules';
import ConfirmCheckModal from '../components/customs/ConfirmCheckModal';
import {text} from '../constants/text';

const width = Dimensions.get('screen').width;

export default function CheckScreen({navigation, route}: any) {
  const theme: ThemeName['value'] = 'olive';
  const language: Language['value'] = 'UA';

  const [modal, setModal] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [wordsInputs, setWordsInputs] = useState<string[]>(
    Array(route.params.words.length).fill(''),
  );

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
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <Header
        icon={'close'}
        action={() => {
          setModal(true);
        }}
      />
      <View style={{flex: 1}}>
        <FlatList
          style={{width: width}}
          data={route.params.words}
          renderItem={RenderItem}
        />
      </View>
      <CheckBlock
        theme={theme}
        language={language}
        finishAvailable={true}
        buttonTitle={text[language].Finish}
        comment={text[language].IfYouEnteredWords}
        onCheck={() => {
          if (wordsInputs.some((i: any) => !i.trim())) {
            setConfirm(true);
          } else {
          }
        }}
      />
      <View
        style={{
          width: width * rules.widthNumber,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: width * 0.05,
          height: width * 0.15,
        }}></View>
      <CloseGameModal
        theme={theme}
        language={language}
        visible={modal}
        onClose={() => setModal(false)}
        onSubmit={() => {
          setModal(false);
          navigation.pop(2);
          // TODO save statistics
        }}
      />
      <ConfirmCheckModal
        theme={theme}
        language={language}
        visible={confirm}
        onClose={() => setConfirm(false)}
        onSubmit={() => {
          setModal(false);
          navigation.pop(2);
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
  item: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.1,
    alignSelf: 'center',
  },
});
