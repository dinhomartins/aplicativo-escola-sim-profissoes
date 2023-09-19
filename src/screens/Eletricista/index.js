import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";

import bgeletricista from "../../../assets/bgeletricista.png";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const cursosData = [
  {
    id: "1",
    nome: "Aula 01",
    desc: "Conceito Eletrico",
    // imagem: require("../../../assets/eletricista.png"),
    rota: "Aula01",
    emBreve: false,
  },
  {
    id: "2",
    nome: "Aula 02",
    desc: "Conceito Eletrico",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula02",
    emBreve: false,
  },
  {
    id: "3",
    nome: "Aula 03",
    desc: "Alicate amperimetro e multímetro",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula03",
    emBreve: false,
  },
  {
    id: "4",
    nome: "Aula 04",
    desc: "Alicate amperimetro e multímetro",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula04",
    emBreve: false,
  },
  {
    id: "5",
    nome: "Aula 05",
    desc: "Cores dos cabos",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula05",
    emBreve: false,
  },
  {
    id: "6",
    nome: "Aula 06",
    desc: "Disjuntores",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula06",
    emBreve: false,
  },
  {
    id: "7",
    nome: "Aula 07",
    desc: "QDC - Quadro de distribuição",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula07",
    emBreve: false,
  },
  {
    id: "8",
    nome: "Aula 08",
    desc: "IDR - Interruptor diferencia residual",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula08",
    emBreve: false,
  },
  {
    id: "9",
    nome: "Aula 09",
    desc: "DPS - dispositivos de proteção contra surtos",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula09",
    emBreve: false,
  },
  {
    id: "10",
    nome: "Aula 10",
    desc: "Diagrama QDC Monofasico",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula10",
    emBreve: false,
  },
  {
    id: "11",
    nome: "Aula 11",
    desc: "Diagrama QDC Bifasico",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula11",
    emBreve: false,
  },
  {
    id: "12",
    nome: "Aula 12",
    desc: "Diagrama QDC Trifasico",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula12",
    emBreve: false,
  },
  {
    id: "13",
    nome: "Aula 13",
    desc: "Diagrama QDC Trifasico sem IDR",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula13",
    emBreve: false,
  },
  {
    id: "14",
    nome: "Aula 14",
    desc: "Diagrama QDC Trifasico com IDR",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula14",
    emBreve: false,
  },
  {
    id: "15",
    nome: "Aula 15",
    desc: "Diagrama QDC Trifasico- IDR - DPS",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula15",
    emBreve: false,
  },
  {
    id: "16",
    nome: "Aula 16",
    desc: "Curva dos Disjuntores",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula16",
    emBreve: false,
  },
  {
    id: "17",
    nome: "Aula 17",
    desc: "Disjuntor Motor",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula17",
    emBreve: false,
  },
  {
    id: "18",
    nome: "Aula 18",
    desc: "Diagrama - Interrupr Simples",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula18",
    emBreve: false,
  },
  {
    id: "19",
    nome: "Aula 19",
    desc: "Diagrama - Interrupr 2 e 3 Vias",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula19",
    emBreve: false,
  },
  {
    id: "20",
    nome: "Aula 20",
    desc: "Three Way",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula20",
    emBreve: false,
  },
  {
    id: "21",
    nome: "Aula 21",
    desc: "Four Way",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula21",
    emBreve: false,
  },
  {
    id: "22",
    nome: "Aula 22",
    desc: "Circuito de tomada",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula22",
    emBreve: false,
  },
  {
    id: "23",
    nome: "Aula 23",
    desc: "Circuito de tomada conjugado com iluminação",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula23",
    emBreve: false,
  },
  {
    id: "24",
    nome: "Aula 24",
    desc: "Padrão de tomadas brasileiro",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula24",
    emBreve: false,
  },
  {
    id: "25",
    nome: "Aula 25",
    desc: "Tipos de tomadas mais utilizados no mundo",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula25",
    emBreve: false,
  },
  {
    id: "26",
    nome: "Aula 26",
    desc: "Relé Fotoelétrico",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula26",
    emBreve: false,
  },
  {
    id: "27",
    nome: "Aula 27",
    desc: "Boia",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula27",
    emBreve: false,
  },
  {
    id: "28",
    nome: "Aula 28",
    desc: "Descobrindo seção do cabo Ligando Chuveiro Eletrico",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula28",
    emBreve: false,
  },
  {
    id: "29",
    nome: "Aula 29",
    desc: "Tabela com sessão de cabos",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula29",
    emBreve: false,
  },
  {
    id: "30",
    nome: "Aula 30",
    desc: "Quada de tensão",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula30",
    emBreve: false,
  },
  {
    id: "31",
    nome: "Aula 31",
    desc: "Tabela Metodos de instalação",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula31",
    emBreve: false,
  },
  {
    id: "32",
    nome: "Aula 32",
    desc: "Simbologia instalações eletricas",
    // imagem: require("../../../assets/comandoeletricocapa.png"),
    rota: "Aula32",
    emBreve: false,
  },
  // ... adicione outros cursos conforme necessário
];

function Eletricista({ navigation }) {
  const [hideCapa, setHideCapa] = useState(false);
  const onScrollDebounced = debounce(() => setHideCapa(true), 100);
  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      onScrollDebounced();
    }
  };

  return (
    <View style={styles.container}>
      {!hideCapa && (
        <View style={styles.capaScreen}>
          <ImageBackground
            source={bgeletricista}
            resizeMode="cover"
            style={styles.capa}
          ></ImageBackground>
        </View>
      )}

      <View style={styles.content}>
        <FlatList
          data={cursosData}
          onScroll={handleScroll}
          scrollEventThrottle={2} // controla a frequência dos eventos de rolagem
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.boxMenu,
                styles.shadowProp,
                item.emBreve ? {} : { opacity: 0.9 },
              ]}
              onPress={() => navigation.navigate(item.rota)}
            >
              {/* <View style={styles.contentBoxMenuLeft}>
      <Image style={styles.icone} source={item.imagem} />
    </View> */}

              <View style={styles.contentBoxMenu}>
                {item.emBreve && (
                  <Text style={styles.txtembreve}>Em breve</Text>
                )}
                <Text style={styles.textoBoxMenu}>{item.nome}</Text>
                <Text style={styles.textoDesc}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  capaScreen: {
    height: 200,
    width: "100%",
  },
  capa: {
    height: 200,
    width: "100%",
  },
  boxMenu: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F9EAF",
    marginBottom: 20,
  },
  content: {
    width: "100%",
    padding: 10,
  },
  contentBoxMenu: {
    textAlign: "center",
  },
  textoBoxMenu: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textoDesc: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

export default Eletricista;
