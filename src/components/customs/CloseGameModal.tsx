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
    <Modal visible={props.visible} transparent={true} style={styles.modal}>
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
              marginBottom: width * 0.1,
            }}>
            {text[props.language].CloseGameWarningTitle}
          </Text>
          <Text
            style={{fontSize: width * 0.042, color: colors[props.theme].main}}>
            {text[props.language].CloseGameWarning}
          </Text>
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
    paddingVertical: width * 0.1,
    borderRadius: width * 0.05,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
