import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IconName} from '../../constants/interfaces';
import Icon from '../icons/Icon';

interface GradientButtonProps {
  title: string;
  icon?: IconName;
  bgColors: string[];
  titleColor: string;
  onPress: any;
  cardStyle?: any;
  titleStyle?: any;
  disables?: boolean;
}

export default function GradientButton(props: GradientButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {...props.cardStyle}]}
      disabled={props.disables}
      onPress={props.onPress}>
      <LinearGradient
        style={[styles.gradient, {...props.cardStyle}]}
        colors={props.bgColors}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}>
        <Text
          style={[
            styles.title,
            {color: props.titleColor},
            {...props.titleStyle},
          ]}>
          {props.title}
        </Text>
        {props.icon && (
          <Icon name={props.icon} size={32} color={props.titleColor} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {height: 64},
  gradient: {
    height: 64,
    paddingHorizontal: 32,
    borderRadius: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  title: {fontSize: 32},
});
