import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const InicializarScreen = ({ navigation }) => {
  useEffect(() => {
    
    setTimeout(() => {
      navigation.navigate('HomeScreen'); //  próxima tela
    }, 1500); // (2 segundos)
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Inicio.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default InicializarScreen;
