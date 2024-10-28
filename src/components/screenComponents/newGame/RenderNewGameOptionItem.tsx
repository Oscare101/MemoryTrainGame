import {Dimensions, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import {ThemeName} from '../../../constants/interfaces';
import GradientButton from '../../customs/GradientButton';

const width = Dimensions.get('screen').width;

export default function RenderNewGameOptionItem(props: {
  item: any;
  theme: ThemeName['value'];
  onPress: any;
}) {
  return (
    <View style={{gap: width * 0.02, alignSelf: 'center', width: '100%'}}>
      <GradientButton
        title={props.item.title}
        bgColors={colors[props.theme].buttonActive}
        titleColor={colors[props.theme].buttonTitleActive}
        icon={props.item.icon}
        onPress={() => {
          props.onPress(props.item.type);
        }}
        cardStyle={{width: '100%', borderRadius: width * 0.04}}
      />
      <Text
        style={{color: colors[props.theme].comment, fontSize: width * 0.042}}>
        {props.item.description}
      </Text>
    </View>
  );
}
