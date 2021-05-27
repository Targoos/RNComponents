import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import {Header} from '../components/Header';

export const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Header title="Modal" />
      <Modal transparent animationType="fade" visible={modalVisible}>
        <View style={styles.innerContainer}>
          <View style={styles.modal}>
            <Text>Hello!</Text>
            <Button title="Cerrar modal" onPress={handleModal} />
          </View>
        </View>
      </Modal>
      <Button title="Abrir modal" onPress={handleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 20,
  },
  modal: {
    width: 200,
    height: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
