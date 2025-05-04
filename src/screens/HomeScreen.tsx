import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Language, ThemeName, UserData} from '../constants/interfaces';
import {colors} from '../constants/colors';
import GradientButton from '../components/customs/GradientButton';
import QuoteBlock from '../components/screenComponents/home/QuoteBlock';
import {rules} from '../constants/rules';
import {text} from '../constants/text';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import Icon from '../components/icons/Icon';
import ButtonWithIcon from '../components/global/ButtonWithIcon';

const width = Dimensions.get('screen').width;

export default function HomeScreen({navigation}: any) {
  const userData: UserData = useSelector((state: RootState) => state.userData);
  const theme: ThemeName = userData.theme;
  const language: Language = userData.language;

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[theme].bg[0]}]}>
      <StatusBar
        backgroundColor={colors[theme].bg[0]}
        barStyle={colors[theme].barStyle}
      />
      <View style={styles.contentBlock}>
        <QuoteBlock theme={theme} language={language} />
      </View>
      <ButtonWithIcon
        title={text[language].Settings}
        icon="settings"
        theme={theme}
        action={() => {
          navigation.navigate('SettingsScreen');
        }}
      />
      <View style={styles.contentBlock}>
        <GradientButton
          title={text[language].Play}
          icon={'play'}
          bgColors={colors[theme].buttonActive}
          titleColor={colors[theme].buttonTitleActive}
          onPress={() => {
            navigation.navigate('NewGame');
          }}
          cardStyle={{width: '100%', borderRadius: 16}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 16,
  },
  contentBlock: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
