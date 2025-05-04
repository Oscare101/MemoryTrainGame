import React from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Language, ThemeName} from '../../constants/interfaces';
import {colors} from '../../constants/colors';
import {text} from '../../constants/text';
import GradientButton from './GradientButton';

interface CloseModalProps {
  visible: boolean;
  onClose: any;
  onSubmit: any;
  theme: ThemeName;
  language: Language;
}

function ConfirmCheckModal(props: CloseModalProps) {
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
        <Pressable
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={props.onClose}>
          <Pressable
            style={[
              styles.modalView,
              {backgroundColor: colors[props.theme].bg[0]},
            ]}>
            <Text
              style={{
                fontSize: 24,
                color: colors[props.theme].main,
              }}>
              {text[props.language].ConfirmWarningTitle}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors[props.theme].comment,
              }}>
              {text[props.language].ConfirmWarning}
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
                titleStyle={{fontSize: 20}}
              />
              <GradientButton
                title={text[props.language].Finish}
                bgColors={['#00000000', '#00000000']}
                titleColor={colors[props.theme].main}
                onPress={props.onSubmit}
                cardStyle={styles.buttonStyle}
                titleStyle={{fontSize: 20}}
              />
            </View>
          </Pressable>
        </Pressable>
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
    width: '92%',
    padding: 16,
    paddingTop: 24,
    borderRadius: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  buttonStyle: {
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 0,
  },
});

export default React.memo(ConfirmCheckModal);
