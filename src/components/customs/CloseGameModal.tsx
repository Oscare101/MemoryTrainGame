import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  Modal,
  TouchableOpacity,
  Dimensions,
  Linking,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Language, ThemeName} from '../../constants/interfaces';
import {colors} from '../../constants/colors';
import {rules} from '../../constants/rules';
import {text} from '../../constants/text';
import GradientButton from './GradientButton';

const width = Dimensions.get('window').width;

interface CloseModalProps {
  visible: boolean;
  onClose: any;
  onSubmit: any;
  theme: ThemeName['value'];
  language: Language['value'];
}

export default function CloseGameModal(props: CloseModalProps) {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      style={styles.modal}
      onRequestClose={() => {
        if (props.visible) {
          props.onClose(); // Dismiss the modal
        }
      }}>
      <StatusBar
        backgroundColor={colors[props.theme].bgDim}
        barStyle={colors[props.theme].barStyle}
      />
      <View
        style={[
          styles.centeredView,
          {
            backgroundColor: colors[props.theme].bgShadow,
          },
        ]}>
        <View
          style={[
            styles.modalView,
            {backgroundColor: colors[props.theme].bg[0]},
          ]}>
          <Text
            style={{
              fontSize: width * 0.075,
              color: colors[props.theme].main,
            }}>
            {text[props.language].CloseGameWarningTitle}
          </Text>
          <Text
            style={{
              fontSize: width * 0.042,
              color: colors[props.theme].comment,
            }}>
            {text[props.language].CloseGameWarning}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <GradientButton
              title={text[props.language].goBack}
              bgColors={colors[props.theme].buttonActive}
              titleColor={colors[props.theme].buttonTitleActive}
              onPress={props.onClose}
              cardStyle={styles.buttonStyle}
              titleStyle={{fontSize: width * 0.042}}
            />
            <GradientButton
              title={text[props.language].Stop}
              bgColors={['#00000000', '#00000000']}
              titleColor={colors[props.theme].main}
              onPress={props.onSubmit}
              cardStyle={styles.buttonStyle}
              titleStyle={{fontSize: width * 0.042}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: width * rules.widthNumber,
    padding: width * 0.05,
    borderRadius: width * 0.07,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.07,
  },
  buttonStyle: {
    borderRadius: width * 0.02,
    width: (width * rules.widthNumber - width * 0.05 * 2 - width * 0.02) / 2,
    paddingHorizontal: 0,
  },
});