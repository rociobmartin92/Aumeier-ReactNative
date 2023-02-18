import React from 'react';
import Home from '../views/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Earnings from '../views/Earnings';
import Album from '../views/Album';
import New from '../New';
import {Image} from 'native-base';
import calendar from '../../assets/images/calendar.png';
import pesos from '../../assets/images/pesos.jpg';
import album from '../../assets/images/album.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import {faCoins} from '@fortawesome/free-solid-svg-icons/faCoins';

const Dra = createDrawerNavigator();

const Drawer = () => {
  return (
    <Dra.Navigator screenOptions={{headerShown: false}}>
      <Dra.Screen
        name="home"
        component={Home}
        options={{
          title: 'Bienvenido',
          drawerActiveBackgroundColor: '#dea5a4',
          drawerActiveTintColor: 'white',
        }}
      />
      <Dra.Screen
        name="dates"
        component={New}
        options={{
          title: 'Turnos',
          drawerIcon: () => <FontAwesomeIcon icon={faCalendarDays} />,
          drawerActiveBackgroundColor: '#dea5a4',
          drawerActiveTintColor: 'white',
        }}
      />
      <Dra.Screen
        name="earnings"
        component={Earnings}
        options={{
          title: 'Ganancias',
          drawerIcon: () => <FontAwesomeIcon icon={faCoins} />,
          drawerActiveBackgroundColor: '#dea5a4',
          drawerActiveTintColor: 'white',
        }}
      />
      <Dra.Screen
        name="photos"
        component={Album}
        options={{
          title: 'Album',
          drawerIcon: () => <Image source={album} alt="dineroIcon" size={5} />,
          drawerActiveBackgroundColor: '#dea5a4',
          drawerActiveTintColor: 'white',
        }}
      />
    </Dra.Navigator>
  );
};

export default Drawer;
