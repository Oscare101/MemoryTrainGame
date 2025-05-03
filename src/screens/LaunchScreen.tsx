import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import {globalStyles} from '../constants/globalStyles';
import {colors} from '../constants/colors';

export default function LaunchScreen({navigation}: any) {
  const userData = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    if (userData.startDate) {
      navigation.replace(userData.isOnboardingPassed ? 'Home' : 'OnBoarding');
    }
  }, []);

  return (
    <View
      style={[
        globalStyles.containerCenter,
        {backgroundColor: colors['Olive'].main},
      ]}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Text>LaunchScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
