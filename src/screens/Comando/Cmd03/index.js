import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

function Cmd03({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>BOTOEIRAS</Text>
        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Text style={styles.texto}>
          Conhecidas de forma genérica como botão de comando, funciona como um
          elemento responsável por ligar e desligar os circuitos, sendo as mais
          comuns os contatos do tipo NA (normalmente aberto) e NF (normalmente
          fechado) permitindo uma grande quantidade de configurações. Em algumas
          se encontra presente um dispositivo de retorno por mola que após ser
          acionado retorna para a posição original (botões pulsadores). Outros
          atuadores são chaves rotativas, pedais, fins de curso e etc. Para
          facilitar seu funcionamento possuem cores definidas de acordo com sua
          função pelas normas IEC 73 e VDE 0199, sendo:
        </Text>
      </View>

      {/* Corrente Eletrica */}
      <Text style={styles.subTitulo}>
        vermelho: parar, desligar, emergência.
      </Text>
      <Text style={styles.subTitulo}>amarelo: intervenção.</Text>
      <Text style={styles.subTitulo}>
        verde ou preto: ligar, partir, pulsar.
      </Text>
      <Text style={styles.subTitulo}>
        azul ou branco: qualquer função diferente das citadas.
      </Text>

      <Text style={styles.subTitulo}>Exemplos de botoeiras</Text>

      <Image
        style={styles.imagem}
        source={require("../../../../assets/botoeira1.jpg")}
      />

      <Image
        style={{ width: "100%", height: 140 }}
        source={require("../../../../assets/botoeira2.jpg")}
      />

      <Image
        style={styles.imagem}
        source={require("../../../../assets/botoeira3.jpg")}
      />

      <Image
        style={styles.imagem}
        source={require("../../../../assets/botoeira4.jpg")}
      />

<Text style={styles.titulo}>Como identificar as funções das botoeiras através das cores?</Text>
<Text style={styles.texto}>
As cores das botoeiras devem seguir uma padronização, de acordo com a norma NBR IEC 60204-11, que permite identificar de forma genérica, qual a função realizada por elas. Conheça alguns exemplos:
        </Text>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd03TabelaBotoeira')}>
        <Image
        style={styles.imagem}
        source={require("../../../../assets/tabelabotoeira.jpg")}
      />
      </TouchableOpacity>

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

export default Cmd03;
