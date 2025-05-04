import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeName} from '../../../constants/interfaces';
import {colors} from '../../../constants/colors';
import Icon from '../../icons/Icon';

interface CardListBlock {
  wordsList: string[];
  theme: ThemeName;
  onOpenCard: any;
}

export default function CardsListBlock(props: CardListBlock) {
  function RenderItem(item: any) {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: 24, color: colors[props.theme].main}}>
          {item.index + 1}
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: colors[props.theme].main,
            flex: 1,
          }}>
          {item.item.charAt(0).toUpperCase() + item.item.slice(1)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => props.onOpenCard(item.index)}>
          <Icon name="open" color={colors[props.theme].main} size={24} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '92%'}}
        data={props.wordsList}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    alignSelf: 'center',
    paddingHorizontal: 32,
    gap: 16,
  },
  button: {
    height: 48,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
