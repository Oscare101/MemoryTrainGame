import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerLeft: () => null,
          animationEnabled: true,
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
