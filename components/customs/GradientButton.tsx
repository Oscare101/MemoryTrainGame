import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('screen').width;

interface GradientButtonProps {
  title: string;
  bgColors: string[];
  titleColor: string;
  onPress: any;
  cardStyle?: any;
  titleStyle?: any;
}

export default function GradientButton(props: GradientButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {...props.cardStyle}]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: width * 0.07},
});
