import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetUserData, updateUserData} from '../redux/userData';
import {colors} from '../constants/colors';
import {RootState} from '../redux';

export default function OnBoardingScreen({navigation}: any) {
  const userData = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();

  function handleOnboardingFinish() {
    dispatch(updateUserData({isOnboardingPassed: true}));
    navigation.replace('Home');
  }

  return (
    <View style={{backgroundColor: colors[userData.theme].bg[0], flex: 1}}>
      <Text>OnBoardingScreen</Text>
      <Button title="reset" onPress={() => dispatch(resetUserData())} />
      <Button title="log" onPress={() => console.log(userData)} />
      <Button title="onboarding" onPress={handleOnboardingFinish} />
    </View>
  );
}

const styles = StyleSheet.create({});
