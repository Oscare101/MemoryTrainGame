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

interface CardNavigationProps {
  theme: ThemeName;
  wordsAmount: number;
  type: GameTypeInterface;
  wordIndex: number;
  setWordIndex: any;
  back: boolean;
}

export default function CardNavigation(props: CardNavigationProps) {
  return (
    <View style={styles.container}>
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
          size={48}
          color={
            props.wordIndex === 0 || !props.back
              ? '#00000000'
              : colors[props.theme].main
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          if (props.wordIndex < props.wordsAmount - 1) {
            props.setWordIndex(props.wordIndex + 1);
          }
        }}
        disabled={props.wordIndex === props.wordsAmount - 1}>
        <Icon
          name="arrowRight"
          size={48}
          color={
            props.wordIndex === props.wordsAmount - 1
              ? '#00000000'
              : colors[props.theme].main
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    padding: 16,
    // TODO maybe make them bigger
  },
});
