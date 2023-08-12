import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ onLoginSuccess, onLoginFailure }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Verificar se o nome de usuário e a senha estão corretos
    if (username === 'admin123' && password === '2023') {
      // Se forem corretos, notificar o sucesso do login
      onLoginSuccess();
    } else {
      // Caso contrário, notificar o fracasso do login
      onLoginFailure();
    }
  };

  const handleAdminScreenNavigation = () => {
    navigation.navigate('AdminScreen'); // Nome da tela registrada em sua navegação
  };

  return (
    <View style={styles.container}>
    <Text style={styles.Usuario}>Entre com Google para personalizar seu roteiro:</Text>
    
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
  <Image
        source={require('../assets/Google1.jpg')} // Certifique-se de que o caminho da imagem está correto
        style={styles.buttonImage}
      />    
      <Text style={styles.buttonText}>Entrar com Google</Text>
      
    </TouchableOpacity>

      {/* Botão para a tela de admin */}
      <TouchableOpacity
        style={[styles.button, styles.adminButton]} // Estilos adicionais para o novo botão
        onPress={handleAdminScreenNavigation}
      >
        <Text style={styles.buttonTextAdmin}> Administrador </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1EFFF',
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    backgroundColor:'#E9F0FC',
    color: '#B6B6B6',
    width: '80%',
    height: 50,
    //borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius:5,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 8,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    backgroundColor: '#147DEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    //fontWeight: 'bold',
  },
  Usuario: {
    marginTop:120,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 150,
    textAlign: 'center',

  },
  Admin: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '##147DEB'
  },
  
  adminButton: {
    borderRadius:5,
    padding:8,
    position: 'absolute',
    bottom: 20,
    right: 5,
    backgroundColor: '#F1EFFF', // Personalize as cores conforme necessário
  },
  buttonTextAdmin: {
color: '#147DEB',
fontSize: 17,
textDecorationLine:'underline',
textAlign: 'right',
fontWeight: 'bold',

  },
  buttonImage: {
    width: 20,
    height: 20,
    marginLeft: 15, // Espaço entre o texto e a imagem
    marginRight: 10,
    width: 33,
    height:33,
  },
  
});

export default LoginScreen;








