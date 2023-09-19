import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Aula32({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Simbologia de instalações elétricas</Text>
        <Text  style={styles.texto}>
        Os símbolos gráficos usados nos diagramas unifilar são definidos pela norma
NBR5444, para serem usados em planta baixa (arquitetônica) do imóvel. Neste tipo de
planta é indicada a localização exata dos circuitos de luz, de força, de telefone e seus
respectivos aparelhos.
As tabelas a seguir mostram a simbologia do sistema unifilar para instalações elétricasprediais (NBR5444). 
        </Text>

        <TouchableOpacity
          style={styles.iconeCirculo}
          onPress={() => navigation.navigate("Aula32Diagrama")}
        >
          <Image
            style={{
              height: 400,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl1.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 450,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl2.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 150,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl3.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 320,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl4.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 280,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl5.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 200,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl6.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 380,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl7.webp")}
            resizeMode="contain"
          />
          <Image
            style={{
              height: 450,
              width: null,
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require("../../../../assets/tl8.webp")}
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

export default Aula32;
