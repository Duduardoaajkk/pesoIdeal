import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [resultado, setResultado] = useState('');
  const [mostrarImagens, setMostrarImagens] = useState(false); // Estado para controlar a exibição das imagens

  const calcularPesoIdeal = () => {
    const alturaCm = parseFloat(altura);
    if (isNaN(alturaCm)) {
      alert('Por favor, insira uma altura válida em centímetros.');
      return;
    }

    let pesoIdeal;
    if (sexo === 'masculino') {
      pesoIdeal = 50 + 2.3 * ((alturaCm / 2.54) - 60);
    } else if (sexo === 'feminino') {
      pesoIdeal = 45.5 + 2.3 * ((alturaCm / 2.54) - 60);
    } else {
      alert('Por favor, selecione o sexo antes de calcular.');
      return;
    }

    setResultado(`Seu peso ideal é aproximadamente ${pesoIdeal.toFixed(2)} kg.`);
  };

  const imagemMasculino = require('./assets/img/giga.jpg');
  const imagemFeminino = require('./assets/img/lean.jpg');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>Calcular Peso Ideal</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput
          keyboardType='numeric'
          value={altura}
          onChangeText={setAltura}
          style={styles.input}
        />
      </View>
      <View style={styles.sexContainer}>
        <Text style={styles.label}>Sexo</Text>
        <Pressable onPress={() => {
          setSexo('masculino');
          setMostrarImagens(true);
        }} style={styles.sexButton}>
          {mostrarImagens && sexo === 'masculino' && (
            <Image source={imagemMasculino} style={styles.selectedImage} />
          )}
          {!mostrarImagens && <Text style={styles.sexButton}>Masculino</Text>}
        </Pressable>
        <Pressable onPress={() => {
          setSexo('feminino');
          setMostrarImagens(true);
        }} style={styles.sexButton}>
          {mostrarImagens && sexo === 'feminino' && (
            <Image source={imagemFeminino} style={styles.selectedImage} />
          )}
          {!mostrarImagens && <Text style={styles.sexButton}>Feminino</Text>}
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={calcularPesoIdeal} style={styles.calculateButton}>
          <Text style={styles.calculateButton}>Exibir</Text>
        </Pressable>
      </View>
      <Text style={styles.result}>{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    backgroundColor: 'white',
  },
  sexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sexButton: {
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,

    fontSize: 16,
    color: 'black',
  },

  selectedImage: {
    width: 50, 
    height: 50,
  },

  buttonContainer: {
    marginBottom: 20,
  },
  calculateButton: {
    backgroundColor: '#86ee86',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    color: 'black',
  },
  result: {
    fontSize: 20,
    marginTop: 10,
    color: 'lack',
  },
});
