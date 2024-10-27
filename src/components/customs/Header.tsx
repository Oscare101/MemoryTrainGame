import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconName, ThemeName} from '../../constants/interfaces';
import Icon from '../icons/Icon';
import {colors} from '../../constants/colors';

interface HeaderProps {
  icon: IconName['value'];
  action: any;
}

const width = Dimensions.get('screen').width;

export default function Header(props: HeaderProps) {
  const theme: ThemeName['value'] = 'olive';

  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.action}
        style={styles.button}>
        <Icon
          name="chevronLeft"
          size={width * 0.1}
          color={colors[theme].comment}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  button: {
    padding: width * 0.03,
  },
});
