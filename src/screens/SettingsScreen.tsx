import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Language, ThemeName, UserData} from '../constants/interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import {text} from '../constants/text';
import {colors} from '../constants/colors';
import ScreenHeader from '../components/global/ScreenHeader';
import ButtonWithIcon from '../components/global/ButtonWithIcon';

export default function SettingsScreen({navigation}: any) {
  const userData: UserData = useSelector((state: RootState) => state.userData);
  const theme: ThemeName = userData.theme;
  const language: Language = userData.language;
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <ScreenHeader
        title={text[language].Settings}
        theme={theme}
        action={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.column}>
        <ButtonWithIcon
          title={text[language].Theme}
          icon="palette"
          action={() => {}}
          theme={theme}
        />
        <ButtonWithIcon
          title={text[language].Language}
          icon="language"
          action={() => {}}
          theme={theme}
        />
        <ButtonWithIcon
          title={text[language].Language}
          icon="language"
          action={() => {}}
          theme={theme}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  column: {gap: 8},
});
