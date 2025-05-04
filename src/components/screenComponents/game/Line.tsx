import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ThemeName} from '../../../constants/interfaces';
import {colors} from '../../../constants/colors';

export default function Line(props: {theme: ThemeName}) {
  return (
    <View
      style={[styles.line, {backgroundColor: colors[props.theme].border}]}
    />
  );
}

const styles = StyleSheet.create({
  line: {
    width: '92%',
    height: 1,
    marginBottom: 32,
  },
});
