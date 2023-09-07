import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';

const CalculadoraBitolaCabo = () => {
  const [corrente, setCorrente] = useState('');
  const [bitolaCabo, setBitolaCabo] = useState('');

  const calcularBitolaCabo = () => {
    // Converte a corrente inserida em número
    const correnteNumerica = parseFloat(corrente);

    // Define a bitola do cabo com base em algum critério de cálculo (exemplo: valor fixo para simplificar)
    // Você pode usar uma lógica mais complexa para calcular a bitola do cabo com base em normas elétricas
    if (!isNaN(correnteNumerica)) {
      // Exemplo: bitola mínima para 10A
      let bitola = '1.5 mm²';

      if (correnteNumerica > 15.5 ) {
        // Exemplo: bitola mínima para 20A
        bitola = '2.5 mm²';
      }

      if (correnteNumerica > 21) {
        // Exemplo: bitola mínima para 20A
        bitola = '4 mm²';
      }

      if (correnteNumerica > 28) {
        // Exemplo: bitola mínima para 20A
        bitola = '6 mm²';
      }

      if (correnteNumerica > 36) {
        // Exemplo: bitola mínima para 20A
        bitola = '10 mm²';
      }

      if (correnteNumerica > 50) {
        // Exemplo: bitola mínima para 20A
        bitola = '16 mm²';
      }

      if (correnteNumerica > 68) {
        // Exemplo: bitola mínima para 20A
        bitola = '25 mm²';
      }

      if (correnteNumerica > 89) {
        // Exemplo: bitola mínima para 20A
        bitola = '35 mm²';
      }

      if (correnteNumerica > 111) {
        // Exemplo: bitola mínima para 20A
        bitola = '50 mm²';
      }

      if (correnteNumerica > 134) {
        // Exemplo: bitola mínima para 20A
        bitola = '70 mm²';
      }

      if (correnteNumerica > 171) {
        // Exemplo: bitola mínima para 20A
        bitola = '95 mm²';
      }

      if (correnteNumerica > 207) {
        // Exemplo: bitola mínima para 20A
        bitola = '120 mm²';
      }

      setBitolaCabo(bitola);
    } else {
      setBitolaCabo('Erro: Verifique os valores inseridos');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.txtTitulo}>Calculadora de Bitola de Cabo</Text>
        <Text style={styles.descAmperes}>Insira a Corrente (A)</Text>
        <TextInput
          style={styles.txtAmperes}
          placeholder="Corrente (A)"
          keyboardType="numeric"
          onChangeText={(text) => setCorrente(text)}
          value={corrente}
        />

        <Text style={styles.descCalcular}>Toque para calcular Bitola do Cabo</Text>
        <Pressable style={styles.btnCalcularBitolaCabo} onPress={calcularBitolaCabo}>
          <Text style={styles.txtbotao}>{`Calcular Bitola do Cabo`}</Text>
        </Pressable>

        <Text style={styles.txtResultado}>Bitola do Cabo: {bitolaCabo}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalculadoraBitolaCabo;

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
  btnCalcularBitolaCabo: {
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
