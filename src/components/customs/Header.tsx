import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconName, ThemeName} from '../../constants/interfaces';
import Icon from '../icons/Icon';
import {colors} from '../../constants/colors';

interface HeaderProps {
  theme: ThemeName;
  icon: IconName;
  action: any;
  secondary?: boolean;
  secondaryTitle?: string;
  secondaryAction?: any;
}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.action}
        style={styles.button}>
        <Icon name={props.icon} size={48} color={colors[props.theme].main} />
      </TouchableOpacity>
      {props.secondaryTitle && props.secondary ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={props.secondaryAction}>
          <Text
            style={{
              fontSize: 32,
              color: colors[props.theme].main,
            }}>
            {props.secondaryTitle}
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    padding: 16,
  },
});
