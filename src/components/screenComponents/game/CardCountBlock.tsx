import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeName} from '../../../constants/interfaces';
import {colors} from '../../../constants/colors';
import Icon from '../../icons/Icon';

interface CardCountProps {
  theme: ThemeName;
  wordsAmount: number;
  wordNumber: number;
  type: string;
}

export default function CardCountBlock(props: CardCountProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 32,
            color: colors[props.theme].comment,
          }}>
          {props.wordNumber}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 32,
          color: colors[props.theme].comment,
          marginHorizontal: 8,
        }}>
        /
      </Text>
      <View>
        {props.type === 'stamina' ? (
          <Icon name="infinity" color={colors[props.theme].comment} size={48} />
        ) : (
          <Text
            style={{
              fontSize: 32,
              color: colors[props.theme].comment,
            }}>
            {props.wordsAmount}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
