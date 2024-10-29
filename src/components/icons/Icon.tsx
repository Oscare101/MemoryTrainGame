import {SvgXml} from 'react-native-svg';
import {IconName} from '../../constants/interfaces';
import PlayIcon from './PlayIcon';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import SettingsIcon from './SettingsIcon';
import StatisticIcon from './StatisticIcon';
import FireIcon from './FireIcon';
import EasyIcon from './EasyIcon';
import HardIcon from './HardIcon';
import InfinityIcon from './InfinityIcon';
import CloseIcon from './CloseIcon';

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
    chevronLeft: (
      <SvgXml
        xml={ChevronLeftIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    chevronRight: (
      <SvgXml
        xml={ChevronRightIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    settings: (
      <SvgXml
        xml={SettingsIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    fire: (
      <SvgXml
        xml={FireIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    statistics: (
      <SvgXml
        xml={StatisticIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    easy: (
      <SvgXml
        xml={EasyIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    hard: (
      <SvgXml
        xml={HardIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    infinity: (
      <SvgXml
        xml={InfinityIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    close: (
      <SvgXml
        xml={CloseIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.name];
}
