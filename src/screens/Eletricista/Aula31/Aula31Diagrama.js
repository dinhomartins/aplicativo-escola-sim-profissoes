import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

function Aula31Diagrama({ navigation }) {
  const images = [
    {
      url: "",
      props: {
        source: require("../../../../assets/tabela01.webp"),
      },
    },
    {
      url: "",
      props: {
        source: require("../../../../assets/tabela02.webp"),
      },
    },
    {
      url: "",
      props: {
        source: require("../../../../assets/tabela03.webp"),
      },
    },
    {
      url: "",
      props: {
        source: require("../../../../assets/tabela04.webp"),
      },
    },
    {
      url: "",
      props: {
        source: require("../../../../assets/tabela05.webp"),
      },
    },
    {
      url: "",
      props: {
        source: require("../../../../assets/tabela06.webp"),
      },
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageViewer imageUrls={images} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  tituloTopo: {
    color: "#fff",
    fontSize: 20,
  },
  topo: {
    backgroundColor: "#000",
    paddingTop: 20,
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

export default Aula31Diagrama;
