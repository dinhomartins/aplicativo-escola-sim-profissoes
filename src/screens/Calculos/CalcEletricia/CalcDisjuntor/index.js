import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';

const CalculadoraDisjuntor = () => {
  const [corrente, setCorrente] = useState('');
  const [disjuntor, setDisjuntor] = useState('');

  const calcularDisjuntor = () => {
    // Converte a corrente inserida em número
    const correnteNumerica = parseFloat(corrente);

    // Define o disjuntor com base em algum critério de cálculo (exemplo: valor fixo para simplificar)
    // Você pode usar uma lógica mais complexa para calcular o disjuntor com base em normas elétricas
    if (!isNaN(correnteNumerica)) {
      if (correnteNumerica <= 8) {
        setDisjuntor('Disjuntor de 10A');
        
    } else if (correnteNumerica <= 9) {
        setDisjuntor('Disjuntor de 16A');

    } else if (correnteNumerica <= 14) {
        setDisjuntor('Disjuntor de 20A');

    } else if (correnteNumerica <= 18) {
        setDisjuntor('Disjuntor de 25A');

    } else if (correnteNumerica <= 25) {
        setDisjuntor('Disjuntor de 32A');

    } else if (correnteNumerica <= 32) {
        setDisjuntor('Disjuntor de 40A');

    } else if (correnteNumerica <= 38) {
        setDisjuntor('Disjuntor de 45A - 50A');

    } else if (correnteNumerica <= 50) {
        setDisjuntor('Disjuntor de 63A');

    } else if (correnteNumerica <= 54) {
        setDisjuntor('Disjuntor de 70A');

      } else {
        setDisjuntor('Disjuntor não encontrado');
      }
    } else {
      setDisjuntor('Erro: Verifique os valores inseridos');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.txtTitulo}>Calculadora de Disjuntor</Text>
        <Text style={styles.descAmperes}>Insira a Corrente (A)</Text>
        <TextInput
          style={styles.txtAmperes}
          placeholder="Corrente (A)"
          keyboardType="numeric"
          onChangeText={(text) => setCorrente(text)}
          value={corrente}
        />

        <Text style={styles.descCalcular}>Toque para calcular Disjuntor</Text>
        <Pressable style={styles.btnCalcularDisjuntor} onPress={calcularDisjuntor}>
          <Text style={styles.txtbotao}>{`Calcular Disjuntor`}</Text>
        </Pressable>

        <Text style={styles.txtResultado}>Disjuntor Recomendado: {disjuntor}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalculadoraDisjuntor;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
  btnCalcularDisjuntor: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    width: '90%',
    marginTop: 10,
    height: 50,
    color: '#fff',
  },
  txtResultado: {
    fontSize: 26,
    marginTop: 20,
  },
  txtbotao: {
    color: '#fff',
    fontSize: 18,
  },
  descCalcular: {
    marginTop: 20,
  },
});
