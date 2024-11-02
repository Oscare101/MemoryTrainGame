import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ThemeName} from '../../../constants/interfaces';
import {rules} from '../../../constants/rules';
import {colors} from '../../../constants/colors';
import Icon from '../../icons/Icon';

const width = Dimensions.get('screen').width;

interface CardListBlock {
  wordsList: string[];
  theme: ThemeName['value'];
  onOpenCard: any;
}

export default function CardsListBlock(props: CardListBlock) {
  function RenderItem(item: any) {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: width * 0.06, color: colors[props.theme].main}}>
          {item.index + 1}
        </Text>
        <Text
          style={{
            fontSize: width * 0.06,
            color: colors[props.theme].main,
          }}>
          {item.item.charAt(0).toUpperCase() + item.item.slice(1)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => props.onOpenCard(item.index)}>
          <Icon
            name="open"
            color={colors[props.theme].main}
            size={width * 0.07}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: width}}
        data={props.wordsList}
        renderItem={RenderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.1,
    alignSelf: 'center',
  },
  button: {
    height: width * 0.1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
