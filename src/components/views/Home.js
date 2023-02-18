import React from 'react';
import AddItem from '../AddItem';
import {Box, Image} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import nails from '../../assets/images/nails.png';

const Home = () => {
  return (
    <Box>
      <Box alignItems="center">
        <Image
          marginTop={20}
          source={nails}
          alt="nails"
          height="83%"
          width="88%"
        />
      </Box>
      <AddItem />
    </Box>
  );
};

export default Home;
