import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {text} from '../../../constants/text';
import GradientButton from '../../customs/GradientButton';
import {Language, ThemeName} from '../../../constants/interfaces';

const width = Dimensions.get('screen').width;

interface CheckBlockProps {
  theme: ThemeName['value'];
  language: Language['value'];
  finishAvailable: boolean;
  onCheck: any;
}

export default function CheckBlock(props: CheckBlockProps) {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: colors[props.theme].main,
        width: width * 0.8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: width * 0.1,
      }}>
      <GradientButton
        title={text[props.language].Check}
        bgColors={
          !props.finishAvailable
            ? colors[props.theme].buttonDisabled
            : colors[props.theme].buttonActive
        }
        titleColor={
          !props.finishAvailable
            ? colors[props.theme].buttonTitleDisabled
            : colors[props.theme].buttonTitleActive
        }
        cardStyle={{width: width * 0.6}}
        onPress={props.onCheck}
        disables={!props.finishAvailable}
      />
      <Text
        style={{
          color: colors[props.theme].comment,
          fontSize: width * 0.042,
          marginBottom: width * 0.1,
          width: width * 0.6,
          textAlign: 'center',
          marginTop: width * 0.05,
        }}>
        {text[props.language].IfYouReadyToCheck}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
