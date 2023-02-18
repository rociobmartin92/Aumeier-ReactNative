/* eslint-disable no-undef */
import React, {useContext, useState} from 'react';
import {Button, Center, Modal, HStack} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import FormHook from './FormHook';
import {TurnoContext} from '../context/TurnoContext';

const AddItem = () => {
  const {turnos, setTurnos} = useContext(TurnoContext);
  const [show, setShow] = useState(false);

  const submitTurno = data => {
    setTurnos([...turnos, data]);
    setShow(false);
  };

  return (
    <Center mt={-6} shadow={10}>
      <Button
        background="transparent"
        borderColor="#a08d8d"
        borderWidth={1}
        width="82%"
        _text={{fontSize: 18, fontWeight: 500, color: '#a08d8d'}}
        py={3}
        _pressed={{bg: 'lightBlue.300'}}
        onPress={() => setShow(true)}>
        Nuevo Turno
      </Button>

      <Modal isOpen={show} onClose={() => setShow(false)}>
        <Modal.Content minWidth="350px">
          <Modal.CloseButton />
          <Modal.Header alignItems="center">
            <Text style={estilo.mod}>Agendar Nuevo Turno </Text>
          </Modal.Header>
          <Modal.Body>
            <FormHook onSubmit={submitTurno} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const estilo = StyleSheet.create({
  mod: {fontSize: 25, color: '#a08d8d'},
});
export default AddItem;
