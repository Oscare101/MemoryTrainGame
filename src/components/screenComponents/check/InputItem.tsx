import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {ThemeName} from '../../../constants/interfaces';
import {TextInput} from 'react-native-gesture-handler';

export default function InputItem(props: {
  item: any;
  theme: ThemeName;
  inputRefs: any;
  onChangeText: (value: string) => void;
  value: string;
  wordsAmount: number;
}) {
  const item = props.item.item;
  return (
    <View style={styles.item}>
      <Text style={{fontSize: 24, color: colors[props.theme].main}}>
        {item.index + 1}
      </Text>
      <TextInput
        ref={el => (props.inputRefs.current[item.index] = el!)} // Store reference
        value={props.value}
        onChangeText={props.onChangeText}
        style={{
          flex: 1,
          color: colors[props.theme].main,
          fontSize: 24,
          padding: 0,
          marginLeft: 16,
          borderBottomWidth: 1,
          borderColor: colors[props.theme].main,
          borderStyle: 'solid',
        }}
        selectionColor={colors[props.theme].main}
        autoCapitalize="words"
        returnKeyType={item.index === props.wordsAmount - 1 ? 'done' : 'next'} // 'done' on last input
        onSubmitEditing={() => {
          if (item.index < props.wordsAmount - 1) {
            props.inputRefs.current[item.index + 1]?.focus(); // Focus next input
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: width * 0.1,
    alignSelf: 'center',
  },
});
