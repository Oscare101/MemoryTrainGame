import {SvgXml} from 'react-native-svg';
import {IconName} from '../../constants/interfaces';
import PlayIcon from './PlayIcon';

export default function Icon(props: {
  name: IconName['value'];
  size: number;
  color: string;
}) {
  const icons: Record<IconName['value'], any> = {
    play: (
      <SvgXml
        xml={PlayIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.name];
}
