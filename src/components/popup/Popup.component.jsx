import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';
import myStyles from '../../constants/myStyles';
import Button from '../general/Button';

const Popup = ({text, children, buttons, isVisible, setIsVisible, IconFamily, icon, style}) => {

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      onRequestClose={() => setIsVisible(!isVisible)}
      transparent={true}
      statusBarTranslucent={true}
    >
      <Pressable
        style={styles.centeredView}
        onPress={() => setIsVisible(false)}
      >
        <Pressable
          style={[styles.modalView, style]}
          onPress={e => e.stopPropagation()}
        >
          {!!(IconFamily && icon) && <IconFamily
            name={icon}
            color={colors.primary}
            size={50}
            style={styles.icon}
          />}
          
          {!!children ? children : <Text style={styles.modalText}>{text}</Text>}
          
          {!!(buttons && Array.isArray(buttons)) && (<>
            <View style={styles.actions}>
              {buttons.map((button, index) => <Button 
                onPress={button.action}
                key={index}
                type={button.type}
                style={styles.actionBtn}
              >{button.title}</Button>)}
            </View>
          </>)}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
  actionBtn: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 'auto',
  },
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: myStyles.borderRadiusSmall,
    padding: 25,
    alignItems: 'center',
    ...myStyles.shadow,
  },
  modalText: {
    marginBottom: 35,
    fontSize: 17,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 10,
  }
});

export default Popup;