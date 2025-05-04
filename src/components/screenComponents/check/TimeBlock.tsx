import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/colors';
import {text} from '../../../constants/text';
import {Language, ThemeName} from '../../../constants/interfaces';

function TimeFormat(ms: number, language: Language) {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor(ms / 60000) % 60;
  const seconds = Math.floor(ms / 1000) % 60;
  const oneTenthOfSecond = Math.floor(ms / 100) % 10;
  if (hours) {
    return `${hours} ${text[language].hours} ${minutes} ${text[language].min} ${seconds} ${text[language].sec}`;
  } else if (minutes) {
    return `${minutes} ${text[language].min} ${seconds} ${text[language].sec}`;
  } else {
    return `${seconds}.${oneTenthOfSecond} ${text[language].sec}`;
  }
}

function TimeBlock({
  time,
  language,
  theme,
}: {
  time: number;
  language: Language;
  theme: ThemeName;
}) {
  return (
    <View style={styles.timeBlock}>
      <Text style={styles.timeTitle}>{TimeFormat(time, language)}</Text>
      <Text
        style={[
          styles.timeComment,
          {
            color: colors[theme].comment,
          },
        ]}>
        {text[language].timeMemorizing}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeBlock: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTitle: {
    fontSize: 32,
    color: colors['Olive'].main,
  },
  timeComment: {
    fontSize: 16,
  },
});

export default React.memo(TimeBlock);
