import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeName} from '../../constants/interfaces';
import {colors} from '../../constants/colors';
import Icon from '../icons/Icon';

export default function ScreenHeader({
  title,
  action,
  theme,
}: {
  title: string;
  action: () => void;
  theme: ThemeName;
}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.8} onPress={action}>
        <Icon name="chevronLeft" color={colors[theme].main} size={40} />
      </TouchableOpacity>
      <Text style={[styles.title, {color: colors[theme].main}]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 25,
    width: '100%',
    textAlign: 'center',
  },
});
