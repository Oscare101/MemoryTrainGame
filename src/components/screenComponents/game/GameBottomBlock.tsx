import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Language, ThemeName} from '../../../constants/interfaces';
import GradientButton from '../../customs/GradientButton';
import {colors} from '../../../constants/colors';
import {text} from '../../../constants/text';

interface BottomBlockProps {
  theme: ThemeName;
  mainButton: {
    title: string;
    active: boolean;
    action: () => void;
  };
  language: Language;
  width: number;
  wordNumber: number;
  wordsAmount: number;
}

export default function GameBottomBlock(props: BottomBlockProps) {
  return (
    <View
      style={[styles.container, {borderTopColor: colors[props.theme].border}]}>
      <GradientButton
        title={props.mainButton.title}
        bgColors={
          !props.mainButton.active
            ? colors[props.theme].buttonDisabled
            : colors[props.theme].buttonActive
        }
        titleColor={
          !props.mainButton.active
            ? colors[props.theme].buttonTitleDisabled
            : colors[props.theme].buttonTitleActive
        }
        // cardStyle={{width: props.width * 0.6}}
        onPress={props.mainButton.action}
        disables={!props.mainButton.active}
      />
      <Text style={[styles.comment, {color: colors[props.theme].comment}]}>
        {text[props.language].IfYouReadyToCheck}
      </Text>
      <Text style={[styles.number, {color: colors[props.theme].comment}]}>
        {props.wordNumber} / {props.wordsAmount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 261,
    borderTopWidth: 1,
    paddingVertical: 32,
  },
  comment: {
    width: '70%',
    textAlign: 'center',
  },
  number: {
    fontSize: 24,
  },
});
