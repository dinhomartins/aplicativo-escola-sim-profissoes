import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from "react-native";

const CalculadoraCorrente = () => {
  const [potencia, setPotencia] = useState("");
  const [tensao, setTensao] = useState("127"); // Valor padrão de tensão
  const [corrente, setCorrente] = useState("");

  const toggleTensao = () => {
    // Toggle entre 127V e 220V
    if (tensao === "127") {
      setTensao("220")  ;
    } else {
      setTensao("127");
    }
  };

  const calcularCorrente = () => {
    // Converte as entradas de texto em números
    const potenciaNumerica = parseFloat(potencia);
    const tensaoNumerica = parseFloat(tensao);

    // Realiza o cálculo da corrente
    if (
      !isNaN(potenciaNumerica) &&
      !isNaN(tensaoNumerica) &&
      tensaoNumerica !== 0
    ) {
      const correnteCalculada = potenciaNumerica / tensaoNumerica;
      setCorrente(correnteCalculada.toFixed(2)); // Limita a duas casas decimais
    } else {
      setCorrente("Erro: Verifique os valores inseridos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>Calculadora {'\n'} de Corrente Elétrica</Text>
      <Text style={styles.descWhatts}>Insira a potência</Text>
      <TextInput
        style={styles.txtwatts}
        placeholder="Potência (Watts)"
        keyboardType="numeric"
        onChangeText={(text) => setPotencia(text)}
        value={potencia}
      />
      {/* <Button
        style={styles.btnTensao}
        title={`Tensão: ${tensao}V`}
        onPress={toggleTensao}
        
      /> */}
      <Text style={styles.descWhatts}>Toque para alterar a tensão (v)</Text>
      <Pressable style={styles.button} onPress={toggleTensao}>
      <Text style={styles.txtbotao}>{`Tensão: ${tensao}V`}</Text>
      </Pressable>

      <Text style={styles.descWhatts}>Toque para calcular</Text>
      <Pressable style={styles.btnCalcularCorrente} onPress={calcularCorrente}>
      <Text style={styles.txtbotao}>{`Calcular Corrente`}</Text>
      </Pressable>

      {/* <Button title="Calcular Corrente" onPress={calcularCorrente} /> */}
      <Text style={styles.txtResultado} >Corrente: {corrente + 'A'} </Text>
    </View>
  );
};

export default CalculadoraCorrente;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "col",
    alignItems: "center",
  },
  txtTitulo: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  txtwatts: {
    fontSize: 22,
    borderWidth: 1,
    width: "90%",
    height: 50,
    marginTop: 10,
    paddingLeft:10
  },
  descWhatts: {
    marginTop: 20,
  },
  btnTensao: {
    width: "90%",
    marginTop: 40,
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
    marginTop:10,
    height:50,
    color: '#fff'
  },
  txtbotao:{
    color: '#fff',
    fontSize: 18,
  },
  btnCalcularCorrente:{
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3281a8',
    width: '90%',
    marginTop:10,
    height:50,
    color: '#fff'
  },
  txtResultado:{
    fontSize:26,
    marginTop:20
  }
});
