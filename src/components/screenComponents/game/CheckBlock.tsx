import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import GradientButton from '../../customs/GradientButton';
import {Language, ThemeName} from '../../../constants/interfaces';

interface CheckBlockProps {
  theme: ThemeName;
  language: Language;
  finishAvailable: boolean;
  onCheck: () => void;
  buttonTitle: string;
  comment: string;
  shortScreen: boolean;
}

function CheckBlock(props: CheckBlockProps) {
  return (
    <View style={styles.block}>
      <GradientButton
        title={props.buttonTitle}
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
        onPress={props.onCheck}
        disables={!props.finishAvailable}
      />
      <Text
        style={[
          styles.comment,
          {
            color: colors[props.theme].comment,
            marginTop: 16,
          },
        ]}>
        {props.comment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  comment: {
    fontSize: 16,
    width: '70%',
    textAlign: 'center',
  },
});

export default React.memo(CheckBlock);
