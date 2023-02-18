/* eslint-disable no-undef */
import React from 'react';
import {Text, TextInput, Button, StyleSheet} from 'react-native';
import {Box, Center, FormControl, Select, CheckIcon} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schemaValidation = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

const FormHook = prop => {
  var TurnoValue = {
    name: '',
    phone: '',
    job: '',
    email: '',
    date: new Date(Date.now()),
  };
  const {onSubmit, turno, onEditTurno} = prop;

  turno && (TurnoValue = turno);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaValidation),
    defaultValues: TurnoValue,
  });

  return (
    <Center>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Nombre y Apellido:</Text>
            </FormControl.Label>
            <TextInput
              fontSize={17}
              placeholder="Nombre y apellido del cliente"
              style={styles.inputs}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="name"
      />
      {errors.name && <Text>Completa todos los campos</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Teléfono:</Text>
            </FormControl.Label>
            <TextInput
              placeholder="Teléfono del cliente"
              style={styles.inputs}
              fontSize={17}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="phone"
      />
      {errors.phone && <Text>Completa todos los campos</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Email:</Text>
            </FormControl.Label>
            <TextInput
              placeholder="Email del cliente"
              fontSize={17}
              style={styles.inputs}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="email"
      />
      {errors.email && <Text>Email inválido</Text>}

      <FormControl.Label>
        <Text style={styles.input}>Fecha del turno:</Text>
      </FormControl.Label>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <>
            <DatePicker
              minimumDate={new Date()}
              mode="datetime"
              is24Hour={true}
              date={value}
              locale="es"
              onDateChange={date => onChange(date)}
              androidVariant="nativeAndroid"
            />
          </>
        )}
        name="date"
      />

      <FormControl.Label>
        <Text style={styles.input}>Trabajo a realizar:</Text>
      </FormControl.Label>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <>
            <Select
              fontSize={17}
              width="85%"
              borderColor="#a08d8d"
              selectedValue={value}
              placeholder="Elige el Servicio"
              _selectedItem={{
                bg: '#dea5a4',
                endIcon: <CheckIcon size="5" />,
              }}
              _text={{fontSize: 18}}
              mt={1}
              onValueChange={job => onChange(job)}>
              <Select.Item label="Semi Permanentes" value="Semi" />
              <Select.Item label="Esculpidas" value="Esculpidas" />
              <Select.Item label="Tradicional" value="Tradicional" />
              <Select.Item label="Remoción" value="Remocion" />
            </Select>
          </>
        )}
        name="job"
      />

      <Box marginTop={10}>
        {turno === undefined ? (
          <Button
            color="#a08d8d"
            style={{fontSize: 17}}
            title="Agendar"
            onPress={handleSubmit(onSubmit)}
          />
        ) : (
          <Button title="Editar" onPress={handleSubmit(onEditTurno)} />
        )}
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 1,
    width: '90%',
    paddingVertical: 7,
    marginTop: 4,
    borderColor: '#a08d8d',
    paddingLeft: 5,
  },
  input: {fontSize: 18, marginTop: 10, marginBottom: 5},
});

export default FormHook;
