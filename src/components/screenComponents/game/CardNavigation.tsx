import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GameTypeInterface, ThemeName} from '../../../constants/interfaces';
import Icon from '../../icons/Icon';
import {colors} from '../../../constants/colors';
import {rules} from '../../../constants/rules';

const width = Dimensions.get('screen').width;

interface CardNavigationProps {
  theme: ThemeName['value'];
  words: string[];
  type: GameTypeInterface['type'];
  wordIndex: number;
  setWordIndex: any;
  back: boolean;
}

export default function CardNavigation(props: CardNavigationProps) {
  return (
    <View
      style={{
        width: width * rules.widthNumber,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: width * 0.05,
      }}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          if (props.wordIndex > 0) {
            props.setWordIndex(props.wordIndex - 1);
          }
        }}
        disabled={!props.back || props.wordIndex === 0}>
        <Icon
          name="arrowLeft"
          size={width * 0.1}
          color={
            props.wordIndex === 0 || !props.back
              ? '#00000000'
              : colors[props.theme].main
          }
        />
      </TouchableOpacity>
      <Text
        style={{fontSize: width * 0.075, color: colors[props.theme].comment}}>
        {props.wordIndex + 1} / {props.words.length}
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          if (props.wordIndex < props.words.length - 1) {
            props.setWordIndex(props.wordIndex + 1);
          }
        }}
        disabled={props.wordIndex === props.words.length - 1}>
        <Icon
          name="arrowRight"
          size={width * 0.1}
          color={
            props.wordIndex === props.words.length - 1
              ? '#00000000'
              : colors[props.theme].main
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    // TODO maybe make them bigger
  },
});
