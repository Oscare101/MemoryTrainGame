import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Language, ThemeName} from '../../../constants/interfaces';
import {text} from '../../../constants/text';
import {colors} from '../../../constants/colors';

export default function QuoteBlock(props: {
  theme: ThemeName;
  language: Language;
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
    gap: 8,
  },
  quote: {
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
    fontStyle: 'italic',
  },
  author: {
    fontSize: 20,
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 300,
  },
});
