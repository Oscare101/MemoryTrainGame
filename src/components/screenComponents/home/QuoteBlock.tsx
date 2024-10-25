import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Language, ThemeName} from '../../../constants/interfaces';
import {text} from '../../../constants/text';
import {colors} from '../../../constants/colors';

const width = Dimensions.get('screen').width;

export default function QuoteBlock(props: {
  theme: ThemeName['value'];
  language: Language['value'];
}) {
  return (
    <View style={styles.quoteBlock}>
      <Text style={[styles.quote, {color: colors[props.theme].comment}]}>
        {text[props.language].quote}
      </Text>
      <Text style={[styles.author, {color: colors[props.theme].comment}]}>
        {text[props.language].quoteAuthor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteBlock: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    gap: width * 0.03,
  },
  quote: {
    fontSize: width * 0.042,
    textAlign: 'left',
    paddingRight: width * 0.1,
    fontStyle: 'italic',
  },
  author: {
    fontSize: width * 0.045,
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 300,
  },
});
