import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GameScreen({navigation, route}: any) {
  return (
    <View>
      <Text>
        {route.params.type} {route.params.wordsAmount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
