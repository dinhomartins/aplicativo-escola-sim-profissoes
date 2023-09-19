import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

function Cmd01({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Conceitos Comandos Elétricos</Text>
        <Text style={styles.texto}>
          Em eletricidade, comandos elétricos ou acionamentos elétricos é uma
          disciplina que lida com projetos de circuitos elétricos para o
          acionamento e controle de máquinas elétricas. {"\n"}
          {"\n"}A formação nesta disciplina visa conhecer e dimensionar os
          principais dispositivos de comando e proteção utilizados nestes
          circuitos, ler e interpretar os circuitos de comandos de máquinas
          elétricas ou até mesmo máquinas com acionamentos pneumáticos e
          hidráulicos e conhecer os principais métodos de acionamento destas
          máquinas.[1] {"\n"}
          {"\n"}O conhecimento sobre comandos elétricos é bastante importante,
          pois em qualquer sistema elétrico industrial e/ou residencial, há
          sempre algum tipo de máquina ou equipamento acionado de alguma forma,
          por exemplo, através de um motor elétrico, que é a forma mais
          utilizada para obtenção de energia mecânica.
        </Text>

        <Image
          style={styles.imagem}
          source={require("../../../../assets/painelcomando.jpg")}
          resizeMode="contain"
        />
      </View>

      {/* Corrente Eletrica */}
      <Text style={styles.subTitulo}>Acionamento convencional</Text>
      <Text style={styles.texto}>
        Nos acionamentos convencionais, também conhecidos como partidas
        convencionais de motores, usam-se dispositivos eletromecânicos para o
        acionamento (partida) do motor, como contatores.
      </Text>

      <Image
          style={styles.imagem}
          source={require("../../../../assets/painelcomando2.jpg")}
          resizeMode="contain"
        />



      {/* Corrente Eletrica */}
      <Text style={styles.subTitulo}>Acionamento eletrônico</Text>
      <Text style={styles.texto}>
      Nos acionamentos eletrônicos, também conhecidos como partidas eletrônicas de motores, usam-se dispositivos eletrônicos que realizam o acionamento do motor, como soft-starters, inversores de freqüência, etc.
      </Text>

      <Image
          style={styles.imagem}
          source={require("../../../../assets/motor.jpg")}
          resizeMode="contain"
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
    fontSize: 24,
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
});

export default Cmd01;
