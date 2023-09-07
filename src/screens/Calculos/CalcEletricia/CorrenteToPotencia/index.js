import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

const CalculadoraPotencia = () => {
  const [corrente, setCorrente] = useState('');
  const [tensao, setTensao] = useState('127'); // Valor padrão de tensão
  const [potencia, setPotencia] = useState('');

  const toggleTensao = () => {
    // Toggle entre 127V e 220V
    if (tensao === '127') {
      setTensao('220');
    } else {
      setTensao('127');
    }
  };

  const calcularPotencia = () => {
    // Converte as entradas de texto em números
    const correnteNumerica = parseFloat(corrente);
    const tensaoNumerica = parseFloat(tensao);

    // Realiza o cálculo da potência
    if (!isNaN(correnteNumerica) && !isNaN(tensaoNumerica)) {
      const potenciaCalculada = correnteNumerica * tensaoNumerica;
      setPotencia(potenciaCalculada.toFixed(2)); // Limita a duas casas decimais
    } else {
      setPotencia('Erro: Verifique os valores inseridos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>Calculadora de{'\n'} Corrente para potência</Text>
      <Text style={styles.descAmperes}>Insira a Corrente (A)</Text>
      <TextInput
        style={styles.txtAmperes}
        placeholder="Corrente (A)"
        keyboardType="numeric"
        onChangeText={(text) => setCorrente(text)}
        value={corrente}
      />
      <Text style={styles.descVolts}>Toque para alterar a Tensão (V)</Text>
      <Pressable style={styles.button} onPress={toggleTensao}>
        <Text style={styles.txtbotao}>{`Tensão: ${tensao}V`}</Text>
      </Pressable>

      <Text style={styles.descCalcular}>Toque para calcular</Text>
      <Pressable style={styles.btnCalcularPotencia} onPress={calcularPotencia}>
        <Text style={styles.txtbotao}>{`Calcular Potência`}</Text>
      </Pressable>

      <Text style={styles.txtResultado}>Potência: {potencia + 'W'}</Text>
    </View>
  );
};

export default CalculadoraPotencia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtTitulo: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtAmperes: {
    fontSize: 22,
    borderWidth: 1,
    width: '90%',
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
  },
  descAmperes: {
    marginTop: 20,
  },
  descVolts: {
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    width: '90%',
    marginTop: 10,
    height: 50,
    color: '#fff',
  },
  txtbotao: {
    color: '#fff',
    fontSize: 18,
  },
  btnCalcularPotencia: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3281a8',
    width: '90%',
    marginTop: 10,
    height: 50,
    color: '#fff',
  },
  descCalcular: {
    marginTop: 20,
  },
  txtResultado: {
    fontSize: 26,
    marginTop: 20,
  },
});
