/* eslint-disable no-undef */
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {FlatList, Text, StyleSheet} from 'react-native';
import {Box, Image, Button, Center} from 'native-base';
import plus from '../../assets/images/plus.jpg';

const Album = () => {
  const [imagenes, setImagenes] = useState([]);

  const openCamera = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagenes([...imagenes, image.path]);
      console.log(imagenes);
    });
  };

  const eliminarFoto = imagen => {
    const nuevoArrayImagenes = imagenes.filter(id => id !== imagen);
    setImagenes(nuevoArrayImagenes);
  };
  return (
    <Box marginTop={10}>
      <FlatList
        ListEmptyComponent={<Text style={styles.texto}>No hay fotos</Text>}
        data={imagenes}
        renderItem={({item}) => {
          return (
            <Center>
              <Button
                bg="#a67b5b"
                padding={0}
                margin={4}
                onPress={() => eliminarFoto(item)}
                _pressed={{bg: '#EBE0C6'}}>
                <Image
                  source={{uri: item}}
                  alt="imagenes clientas"
                  size={80}
                  margin={3}
                />
              </Button>
            </Center>
          );
        }}
        keyExtractor={item => item}
      />
      <Box
        position="absolute"
        backgroundColor="red"
        top={650}
        right={0}
        mr={10}>
        <Button
          m={0}
          p={0}
          onPress={() => openCamera()}
          _pressed={{bg: 'transparent'}}>
          <Image source={plus} alt="Agregar Foto" size={16} />
        </Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#a08d8d',
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 50,
  },
});

export default Album;
