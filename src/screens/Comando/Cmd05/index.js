import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd05({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Relé temporizador</Text>

        <Text style={styles.subTitulo}>
          Contator: O Que É, Como Funciona e Tipos
        </Text>
        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Text style={styles.texto}>
          Utilizado para fazer acionamentos de cargas atravês de programação por
          horário definido. Alguns modelos suportam mais de 40 programações{" "}
        </Text>
      </View>

      <Image
        style={{ width: 200, height: 500 }}
        source={require("../../../../assets/temporizador.jpg")}
      />

      <Text style={styles.titulo}>TEMPORIZADOR</Text>
      <Text style={styles.texto}>
        Auxiliar na inversão de motores.{"\n"}
        {"\n"}
        Contribuir para a automação e sincronização industrial.{"\n"}
        {"\n"}
        Introduzir atrasos na energização.{"\n"}
        {"\n"}
        Padronizar sinais para Controladores Lógicos Programáveis (CLP).{"\n"}
        {"\n"}
        Prolongar pulsos de acionamento.{"\n"}
        {"\n"}
        Introduzir atrasos na desenergização.{"\n"}
        {"\n"}
        Prevenir sobrecargas no sistema de energia durante o arranque de
        motores.{"\n"}
        {"\n"}
        Gerar pulsos no momento da energização, entre outras funções.{"\n"}
        {"\n"}
      </Text>

      <Text style={styles.subTitulo}>Tipos de Relés Temporizadores</Text>
      <Text style={styles.texto}>
        Assim como outros tipos de contatos e relés, o relé temporizador possui
        contatos auxiliares que são acionados com base na contagem de tempo
        configurada.
        {"\n"}
        {"\n"}
        Existem diversos tipos de relés temporizadores, e entre os modelos
        disponíveis, podemos mencionar:
      </Text>

      <Text style={styles.subTitulo}>
        Relé Temporizador Pneumático (associado a um contator auxiliar).
      </Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../../../../assets/temp1.jpg")}
      />

      <Text style={styles.subTitulo}>
        Relé Temporizador Eletrônico Simples.
      </Text>
      <Image
        style={{ width: 300, height: 400 }}
        source={require("../../../../assets/temp2.jpg")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    margin: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#51AC42",
  },
  subTitulo: {
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
    marginTop: 20,
  },
  imagem: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  motores: {
    width: "100%",
    height: 350,
    marginTop: 20,
  },
});

export default Cmd05;
