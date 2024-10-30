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

const width = Dimensions.get('screen').width;

interface CardNavigationProps {
  theme: ThemeName['value'];
  words: string[];
  type: GameTypeInterface['type'];
  wordIndex: number;
  setWordIndex: any;
}

export default function CardNavigation(props: CardNavigationProps) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          width: width * 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: 1,
          backgroundColor: 'red',
        }}>
        <Icon
          name="chevronLeft"
          size={width * 0.1}
          color={colors[props.theme].main}
        />
      </TouchableOpacity>
      <Text>CardNavigation</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
