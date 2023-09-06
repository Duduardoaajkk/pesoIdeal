import { StatusBar } from 'expo-status-bar';
import { useState, useTransition } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const[pesoMasculino, setPesoMasculino] = useState ('')
  const[pesoFeminino, setPesoFeminino] = useState ('')
  const[resultado, setResultado] = useState ('')




  return (
    <View style={styles.container}>
      <View>
        <Text>Calcular Peso Ideal</Text>
      </View>
      <View>
        <Text>Altura</Text>
        <TextInput keyboardType='numeric'/>
      </View>
      <View>
        <Text>Sexo</Text>
        <Text>
        <Pressable>Masculino</Pressable>
        <Pressable>Feminino</Pressable>
        </Text>
      </View>
      <View>
        <Pressable>Exibir</Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
