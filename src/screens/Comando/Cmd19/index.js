import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd19({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.tituloPrimario}>
        Diagrama unifilar - Potência - Carga - Força
        </Text>

        <TouchableOpacity
          style={styles.boxAula}
          onPress={() => navigation.navigate("Cmd19Diagrama")}
        >
          <Image
            style={{ width: null, height: 550 }}
            source={require("../../../../assets/54.webp")}
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

  tituloPrimario: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#51AC42",
    marginTop: 20,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#51AC42",
    marginTop: 20,
    marginBottom: 20,
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

export default Cmd19;