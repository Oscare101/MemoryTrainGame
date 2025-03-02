import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import NewGameScreen from '../../screens/NewGameScreen';
import PreGameScreen from '../../screens/PreGameScreen';
import GameScreen from '../../screens/GameScreen';
import CheckScreen from '../../screens/CheckScreen';
import ResultScreen from '../../screens/ResultScreen';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  headerLeft: () => null,
  animationEnabled: true,
  gestureDirection: 'horizontal' as 'horizontal' | 'vertical',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={options} />
      <Stack.Screen
        name="NewGame"
        component={NewGameScreen}
        options={options}
      />
      <Stack.Screen
        name="PreGameScreen"
        component={PreGameScreen}
        options={options}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={options}
      />
      <Stack.Screen
        name="CheckScreen"
        component={CheckScreen}
        options={options}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={options}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
