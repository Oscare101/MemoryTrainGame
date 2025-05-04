import {Dimensions, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import {ThemeName} from '../../../constants/interfaces';
import GradientButton from '../../customs/GradientButton';

export default function RenderNewGameOptionItem(props: {
  item: any;
  theme: ThemeName;
  onPress: any;
}) {
  return (
    <View style={{gap: 8, alignSelf: 'center', width: '100%'}}>
      <GradientButton
        title={props.item.title}
        bgColors={colors[props.theme].buttonActive}
        titleColor={colors[props.theme].buttonTitleActive}
        icon={props.item.icon}
        onPress={() => {
          props.onPress(props.item);
        }}
        cardStyle={{width: '100%', borderRadius: 16}}
      />
      <Text
        style={{
          color: colors[props.theme].comment,
          fontSize: 16,
        }}>
        {props.item.description}
      </Text>
    </View>
  );
}
