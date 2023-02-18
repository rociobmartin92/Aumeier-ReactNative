/* eslint-disable no-undef */
import React, {useContext, useState} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {Box, Image} from 'native-base';
import {TurnoContext} from '../context/TurnoContext';
import smile from '../assets/images/smile.jpg';
import Card from './Card';

const New = () => {
  const {turnos, deleteTurno, setTurnos} = useContext(TurnoContext);
  const [show, setShow] = useState(false);
  const [turno, setTurno] = useState();

  const onClose = () => {
    setShow(false);
  };

  const onPressButtonEdit = id => {
    setShow(true);
    const editedTurno = turnos.find(item => item.phone === id);
    setTurno(editedTurno);
  };

  const editTurnos = data => {
    const updateTurnos = turnos.map(item =>
      item.phone === turno.phone ? data : item,
    );

    console.log(updateTurnos);
    setTurnos(updateTurnos);
    setShow(false);
  };

  return (
    <Box alignItems="center" justifyContent="center" testID="new">
      <FlatList
        ListEmptyComponent={
          <Box justifyContent="center" mt={40}>
            <Text style={styles.nt}>No tenes turnos próximos</Text>
          </Box>
        }
        data={turnos}
        renderItem={({item}) => {
          return (
            <Card
              item={item}
              onDelete={deleteTurno}
              show={show}
              onClose={onClose}
              turno={turno}
              onPressEdit={onPressButtonEdit}
              turnos={turnos}
              onEdit={editTurnos}
            />
          );
        }}
        keyExtractor={item => item.phone}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  nt: {
    color: '#a08d8d',
    fontSize: 21,
    justifyContent: 'center',
  },
});

export default New;
