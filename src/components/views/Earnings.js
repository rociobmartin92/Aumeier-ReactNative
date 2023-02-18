/* eslint-disable no-undef */
import React, {useContext} from 'react';
import {Box, Divider} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import {TurnoContext} from '../../context/TurnoContext';

const EarningsMap = {
  Semi: 900,
  Remocion: 250,
  Tradicional: 400,
  Esculpidas: 1300,
};

const Earnings = () => {
  const {turnos} = useContext(TurnoContext);

  let valores = turnos.map(el => el.job);
  // console.log(valores);

  let transform = valores.map(el => {
    const value = EarningsMap[el] || 0;
    // console.log(value);
    return value;
  });
  // console.log(transform);

  let finalEarningsValueToday = transform.reduce(
    // (previousValue, currentValue) => previousValue + currentValue,
    // initialValue,
    (valor, acumulador) => valor + acumulador,
    0,
  );

  console.log(finalEarningsValueToday);

  const todayDate = new Date().getDay();
  console.log(todayDate);

  return (
    <Box
      flex={1}
      justifyContent="center"
      borderColor="#a08d8d"
      borderWidth={20}>
      <Box marginLeft={10} marginRight={10}>
        <Text style={styles.sub}>
          Hoy: {''}{' '}
          <Text style={styles.rocio}>
            $650
            {/* {finalEarningsValueToday} */}
          </Text>
        </Text>
        <Divider my="5" bg="#700000" />
        <Text style={styles.sub}>
          Semanal: {''}{' '}
          <Text style={styles.rocio}>
            {' '}
            $2550
            {/* {finalEarningsValueToday} */}
          </Text>
        </Text>
        <Divider my="5" bg="#700000" />
        <Text style={styles.sub}>
          Mensual:
          <Text style={styles.rocio}>
            {' '}
            $9900
            {/* {finalEarningsValueToday} */}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  // tit: {
  //   fontSize: 35,
  //   fontFamily: 'HandyQuomteRegular-6YLLo',
  //   color: '#700000',
  //   marginBottom: 35,
  // },
  sub: {
    fontSize: 28,
    marginLeft: 10,
    color: 'black',
  },
  rocio: {fontSize: 25, color: '#700000'},
});

export default Earnings;
