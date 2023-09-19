import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd09({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Simbologia comando eletrico</Text>

        <Text style={styles.titulo}>Botoeira NC</Text>
        <Image
          style={{ width: 300, height: 400 }}
          source={require("../../../../assets/btn01.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Botoeira NO</Text>
        <Image
          style={{ width: 300, height: 400 }}
          source={require("../../../../assets/btn02.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Sinaleiro</Text>
        <Image
          style={{ width: 300, height: 400 }}
          source={require("../../../../assets/sina.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Contato potencia </Text>
        <Image
          style={{ width: 300, height: 400 }}
          source={require("../../../../assets/contatopotencia.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Contato auxiliar NO </Text>
        <Image
          style={{ width: 300, height: 400 }}
          source={require("../../../../assets/nc.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Contato auxiliar NC </Text>
        <Image
          style={{ width: 300, height: 400 }}
          source={require("../../../../assets/no.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Exemplo diagrama </Text>
        <TouchableOpacity
          style={styles.boxAula}
          onPress={() => navigation.navigate("Dg")}
          resizeMode="contain"
        >
          <Image
            style={{ width: null, height: 300 }}
            source={require("../../../../assets/dg.jpg")}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.titulo}>Exemplo diagrama </Text>
        <TouchableOpacity
          style={styles.boxAula}
          onPress={() => navigation.navigate("Dg2")}
          resizeMode="contain"
        >
          <Image
            style={{ width: null, height: 300 }}
            source={require("../../../../assets/dg2.jpg")}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.titulo}>Simbolos </Text>
        <TouchableOpacity
          style={styles.boxAula}
          onPress={() => navigation.navigate("Dg3")}
          resizeMode="contain"
        >
          <Image
            style={{ width: null, height: 300 }}
            source={require("../../../../assets/dg3.jpg")}
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

export default Cmd09;
