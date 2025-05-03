import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '../icons/Icon';
import {IconName, ThemeName} from '../../constants/interfaces';
import {colors} from '../../constants/colors';

export default function ButtonWithIcon({
  title,
  icon,
  theme,
  action,
}: {
  title: string;
  icon: IconName;
  theme: ThemeName;
  action: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={action}
      style={[styles.button, {borderColor: colors[theme].main}]}>
      <Text style={[styles.title, {color: colors[theme].main}]}>{title}</Text>
      <Icon name={icon} color={colors[theme].main} size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
});
