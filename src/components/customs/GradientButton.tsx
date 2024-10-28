import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IconName} from '../../constants/interfaces';
import Icon from '../icons/Icon';

const width = Dimensions.get('screen').width;

interface GradientButtonProps {
  title: string;
  icon?: IconName['value'];
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
          <Icon name={props.icon} size={width * 0.1} color={props.titleColor} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  gradient: {
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.08,
    borderRadius: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.05,
  },
  title: {fontSize: width * 0.075},
});
