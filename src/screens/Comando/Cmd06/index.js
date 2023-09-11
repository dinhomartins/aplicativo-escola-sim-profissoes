import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd06({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Sinaleiro luminoso</Text>

        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Text style={styles.texto}>
          Utilizado para fazer acionamentos de cargas atravês de programação por
          horário definido. Alguns modelos suportam mais de 40 programações{" "}
        </Text>
      </View>

      <Image
        style={{ width: null, height: 200 }}
        source={require("../../../../assets/sinaleiro.jpg")}
      />

      
      <Text style={styles.texto}>
        São dispositivos que compõem um circuito elétrico e são usados para
        indicar ao operador as condições atuais de uma máquina ou processo, como
        máquina ligada, desligada, com defeito, entre várias outras funções que
        podem ser aplicadas em comandos elétricos.
      </Text>
      <Text style={styles.titulo}>Simbologia do sinaleiro de comando</Text>

      <Image
        style={{ width: 200, height: 200 }}
        source={require("../../../../assets/sinaleirosimbolo.jpg")}
      />

<Text style={styles.titulo}>Cores e funções dos sinaleiros de comando</Text>


      <Text style={styles.texto}>
      Abaixo a tabela de cores e funções específicas propostas pela norma IEC 60073:2002, que define os princípios de codificação para indicadores e atuadores.</Text>
      <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Sinaleirotabela')}>
      <Image
        style={{ width: 350, height:350 }}
        source={require("../../../../assets/sinaleirotabela.jpg")}
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

export default Cmd06;
