import React, {useContext, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {FormControl, Button} from 'native-base';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {TurnoContext} from '../context/TurnoContext';

// IMPORTANT:
// This component is in disuse, please skip over, move on

const Form = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');

  const {submitTurno, setModal} = useContext(TurnoContext);

  return (
    <>
      <FormControl>
        <FormControl.Label>
          <Text style={estilo.input}>Nombre y Apellido:</Text>
        </FormControl.Label>
        <TextInput style={estilo.ti} value={name} onChangeText={setName} />
      </FormControl>
      <FormControl mt="1">
        <FormControl.Label>
          <Text style={estilo.input}>Fecha y Hora:</Text>
        </FormControl.Label>
        <View>
          <DatePicker
            mode="datetime"
            is24Hour={true}
            date={date}
            locale="es"
            onDateChange={date => setDate(date)}
            androidVariant="nativeAndroid"
          />
        </View>
      </FormControl>
      <FormControl mt="1">
        <FormControl.Label>
          <Text style={estilo.input}>Teléfono:</Text>
        </FormControl.Label>
        <TextInput style={estilo.ti} value={phone} onChangeText={setPhone} />
      </FormControl>
      <FormControl mt="1">
        <FormControl.Label>
          <Text style={estilo.input}>Trabajo:</Text>
        </FormControl.Label>
        <TextInput style={estilo.tit} value={job} onChangeText={setJob} />
      </FormControl>
      <Button.Group space={2} marginTop={10} alignItems="center">
        <Button
          colorScheme="rgb(0,0,0)"
          bg="white"
          onPress={() => {
            setModal(false);
          }}>
          Cancelar
        </Button>
        <Button
          colorScheme="rgb(0,0,0)"
          bg="lightBlue.500"
          onPress={() => {
            submitTurno(
              name,
              phone,
              job,
              date,
              setDate,
              setJob,
              setPhone,
              setName,
              setModal,
            );
          }}>
          Guardar
        </Button>
      </Button.Group>
    </>
  );
};

const estilo = StyleSheet.create({
  but: {fontSize: 18},
  input: {fontSize: 16, color: 'rgb(0,0,0)'},
  tit: {
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    paddingBottom: 3,
    width: '95%',
  },
  ti: {
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    padding: 0.5,
    width: '80%',
  },
  err: {color: 'rgb(117,16,117)', fontWeight: 'bold'},
});

export default Form;
