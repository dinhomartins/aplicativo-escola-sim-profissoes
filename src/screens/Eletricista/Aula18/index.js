import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Aula18({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          CIRCUITO DE ILUMINAÇÃO LIGAÇÃO INTERRUPTOR SIMPLES
        </Text>

        <TouchableOpacity
          style={styles.iconeCirculo}
          onPress={() => navigation.navigate("Aula18Diagrama")}
        >
          <Image
            style={{
              height: 190,
              width: "90%",
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/il04.jpg")}
            resizeMode="contain"
          />

          <Image
            style={{
              height: 300,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/il01.jpg")}
            resizeMode="contain"
          />

          <Image
            style={{
              height: 350,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/il02.jpg")}
            resizeMode="contain"
          />

          <Image
            style={{
              height: 270,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/il03.jpg")}
            resizeMode="contain"
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
    padding: 10,
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
    fontSize: 14,
    marginTop: 20,
  },
  imagem: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
});

export default Aula18;
