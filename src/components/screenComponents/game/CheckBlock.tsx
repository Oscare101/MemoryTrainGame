import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import GradientButton from '../../customs/GradientButton';
import {Language, ThemeName} from '../../../constants/interfaces';

const width = Dimensions.get('screen').width;

interface CheckBlockProps {
  theme: ThemeName;
  language: Language;
  finishAvailable: boolean;
  onCheck: () => void;
  buttonTitle: string;
  comment: string;
}

function CheckBlock(props: CheckBlockProps) {
  return (
    <View style={[styles.block, {borderColor: colors[props.theme].main}]}>
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
        cardStyle={{width: width * 0.6}}
        onPress={props.onCheck}
        disables={!props.finishAvailable}
      />
      <Text style={[styles.comment, {color: colors[props.theme].comment}]}>
        {props.comment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderTopWidth: 1,
    width: width * 0.8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: width * 0.1,
  },
  comment: {
    fontSize: width * 0.042,
    marginBottom: width * 0.1,
    width: width * 0.6,
    textAlign: 'center',
    marginTop: width * 0.05,
  },
});

export default React.memo(CheckBlock);
