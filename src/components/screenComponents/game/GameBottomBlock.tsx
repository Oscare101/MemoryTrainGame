import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Language, ThemeName} from '../../../constants/interfaces';
import GradientButton from '../../customs/GradientButton';
import {colors} from '../../../constants/colors';
import {text} from '../../../constants/text';
import Line from './Line';

interface BottomBlockProps {
  theme: ThemeName;
  children?: React.ReactNode;
}

export default function GameBottomBlock(props: BottomBlockProps) {
  return (
    <View style={styles.container}>
      <Line theme={props.theme} />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 16,
    height: 256,
  },
});
