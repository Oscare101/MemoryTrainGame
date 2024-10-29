import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GameScreen({navigation, route}: any) {
  console.log(route.params.words);

  return (
    <View>
      <Text>{route.params.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
