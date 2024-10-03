import React from 'react';
// import {Text} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
// import LinearGradient from 'react-native-linear-gradient';
import {Defs, Stop, Svg, Text, LinearGradient} from 'react-native-svg';
import {Dimensions} from 'react-native';

interface GradientTextProps {
  colors: string[];
  children: any;
  onPress: any;
  style: any;
}

const w = Dimensions.get('screen').width;

const text = 'wefqfewfwef';
const height = w * 0.1 * 1.5;
const width = 300;
const gradientColors = ['green', 'yellow'];
const borderColors = ['#b429f9', '#26c5f3'];
const locations = {x: 150, y: w * 0.1};
const start = {x: 0, y: 0};
const end = {x: 1, y: 1};
const isGradientFill = true;
const fillColor = '#FFFFFF';
const isGradientStroke = true;
const strokeColor = '#000000';
const strokeWidth = 0;
const fontSize = w * 0.1;
const fontFamily = 'Marker Felt';
const fontWeight = 900;
const style = {backgroundColor: 'transparent'};

export default function GradientText(props: GradientTextProps) {
  return (
    // <MaskedView
    //   androidRenderingMode="software"
    //   maskElement={<Text {...props} />}>
    //   <LinearGradient
    //     colors={props.colors}
    //     start={{x: 0, y: 1}}
    //     end={{x: 1, y: 0}}>
    //     <Text {...props} style={[props.style, {opacity: 0}]} />
    //   </LinearGradient>
    // </MaskedView>
    <Svg height={height} width={width} style={style}>
      <Defs>
        <LinearGradient
          id="Gradient"
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}>
          <Stop stopColor={borderColors[0]} offset="0" stopOpacity="1" />
          <Stop stopColor={borderColors[1]} offset="1" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient
          id="GradientFill"
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}>
          <Stop stopColor={props.colors[0]} offset="0" stopOpacity="1" />
          <Stop stopColor={props.colors[1]} offset="1" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Text
        fill={isGradientFill ? 'url(#GradientFill)' : fillColor}
        stroke={isGradientStroke ? 'url(#Gradient)' : strokeColor}
        strokeWidth={strokeWidth}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        x={locations.x}
        y={locations.y}
        textAnchor="middle">
        {text}
      </Text>
    </Svg>
  );
}
