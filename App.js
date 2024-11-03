// App.js
import React, { useState } from 'react'; // Importa o React e useState
import { View } from 'react-native'; // Importa o View do React Native
import Login from './Login'; // Importa o componente Login
import RegistroUsuario from './registroUsuario'; // Importa o componente RegistroUsuario

export default function App() {
  const [isLoginScreen, setIsLoginScreen] = useState(true); // Estado para controlar a tela atual

  // Função para alternar entre as telas
  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen); // Inverte o estado
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoginScreen ? ( // Se isLoginScreen for verdadeiro, mostra Login
        <Login onRegisterPress={toggleScreen} /> // Passa a função de alternância
      ) : ( // Caso contrário, mostra RegistroUsuario
        <RegistroUsuario onLoginPress={toggleScreen} /> // Passa a função de alternância
      )}
    </View>
  );
}
