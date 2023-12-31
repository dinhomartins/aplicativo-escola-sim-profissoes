import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

function Aula21({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>CIRCUITO DE ILUMINAÇÃO THREE WAY </Text>

        <Text style={styles.texto}>INTERRUPTOR THREE WAY</Text>

        <Image
          style={{
            height: 190,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
          }}
          source={require("../../../../assets/four1.jpg")}
          resizeMode="contain"
        />
        <Image
          style={{
            height: 250,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
          }}
          source={require("../../../../assets/four2.jpg")}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
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
    fontSize: 14,
    marginTop: 20,
  },
  imagem: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
});

export default Aula21;
