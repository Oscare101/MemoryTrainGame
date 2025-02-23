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
  theme: ThemeName;
  words: string[];
  type: GameTypeInterface;
  wordIndex: number;
  setWordIndex: any;
  back: boolean;
}

export default function CardNavigation(props: CardNavigationProps) {
  return (
    <>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: width * 0.075,
              color: colors[props.theme].comment,
              marginRight: width * 0.02,
            }}>
            {props.wordIndex + 1}
          </Text>
        </View>
        <Text
          style={{
            fontSize: width * 0.075,
            color: colors[props.theme].comment,
            marginRight: width * 0.01,
          }}>
          /
        </Text>
        <View>
          {props.type === 'stamina' ? (
            <Icon
              name="infinity"
              color={colors[props.theme].comment}
              size={width * 0.12}
            />
          ) : (
            <Text
              style={{
                fontSize: width * 0.075,
                color: colors[props.theme].comment,
                marginLeft: width * 0.01,
              }}>
              {props.words.length}
            </Text>
          )}
        </View>
      </View>

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
    </>
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
