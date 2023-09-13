import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Aula31({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Tabela de Método de Instalação</Text>

        <TouchableOpacity
          style={styles.iconeCirculo}
          onPress={() => navigation.navigate("Aula31Diagrama")}
        >
          <Image
            style={{
              height: 280,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela01.webp")}
          />
          <Image
            style={{
              height: 280,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela02.webp")}
          />
          <Image
            style={{
              height: 280,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela03.webp")}
          />
          <Image
            style={{
              height: 280,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela04.webp")}
          />
          <Image
            style={{
              height: 240,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela05.webp")}
          />
          <Image
            style={{
              height: 150,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela06.webp")}
          />
        </TouchableOpacity>

        <Text style={styles.texto}>
          NOTAS:{"\n"}
          {"\n"}1 Ver 6.2.5.1.2. da NBR5410/97{"\n"}
          {"\n"}2 O revestimento interno da parede possui condutância térmica
          de, no mínimo, 10 W/m2 .K.{"\n"}
          {"\n"}3 A distância entre eletroduto e superfície deve ser inferior a
          0,3 vez o diâmetro externo do eletroduto.{"\n"}
          {"\n"}4 A distância entre cabo e parede deve ser inferior a 0,3 vez o
          diâmetro externo do cabo.{"\n"}
          {"\n"}5 A distância entre cabo e parede ou teto deve ser igual ou
          superior a 0,3 vez o diâmetro externo do cabo.{"\n"}
          {"\n"}6 Deve-se atentar para o fato de que quando os cabos estão
          instalados na vertical e a ventilação é restrita, a temperatura
          ambiente no topo do trecho vertical pode aumentar consideravelmente.
          {"\n"}
          {"\n"}7 Os cabos devem ser providos de armação.
        </Text>

        <TouchableOpacity
          style={styles.iconeCirculo}
          onPress={() => navigation.navigate("Aula31Diagrama2")}
        >
          <Image
            style={{
              height: 500,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela07.webp")}
          />

<Image
            style={{
              height: 110,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tabela08.webp")}
          />
        </TouchableOpacity>


      </View>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#51AC42",
  },
  subTitulo: {
    fontSize: 24,
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

export default Aula31;
