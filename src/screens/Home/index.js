import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const HomeScreen = ({ navigation }) => {
  // const [hidden, setHidden] = useState(false);
  // const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  // const [statusBarTransition, setStatusBarTransition] = useState(
  //   TRANSITIONS[0]
  // );

  // const changeStatusBarVisibility = () => setHidden(!hidden);

  // const changeStatusBarStyle = () => {
  //   const styleId = STYLES.indexOf(statusBarStyle) + 1;
  //   if (styleId === STYLES.length) {
  //     setStatusBarStyle(STYLES[0]);
  //   } else {
  //     setStatusBarStyle(STYLES[styleId]);
  //   }
  // };

  // const changeStatusBarTransition = () => {
  //   const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
  //   if (transition === TRANSITIONS.length) {
  //     setStatusBarTransition(TRANSITIONS[0]);
  //   } else {
  //     setStatusBarTransition(TRANSITIONS[transition]);
  //   }
  // };

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <StatusBar
    //     animated={true}
    //     backgroundColor="#1F9EAF"
    //     barStyle={statusBarStyle}
    //     showHideTransition={statusBarTransition}
    //     hidden={hidden}
    //   /> */}

    <ScrollView>
      <View style={styles.container}>
      <StatusBar style="light" />
        <View style={styles.containerTopoContent}>
          <View style={styles.containerTopo}>
            <Text style={styles.textoColor}>
            Curso {"\n"}ElétricoPro
  
            </Text>
          </View>
          <Text style={styles.tituloHome}>Calculos Eletricos</Text>
        </View>
        <View style={styles.areaDeAtuacao}>
          <View style={styles.containerCirculo}>
            <View style={styles.circulo}>
              <TouchableOpacity
                style={styles.iconeCirculo}
                onPress={() => navigation.navigate("CalculadoraCorrente")}
              >
                <View>
                  <Image
                    style={styles.iconeCirculo}
                    source={require("../../../assets/eletric.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.textoCirculo}>Watts para Corrente</Text>
          </View>

          <View style={styles.containerCirculo}>
            <View style={styles.circulo}>
              <TouchableOpacity
                style={styles.iconeCirculo}
                onPress={() => navigation.navigate("CalculadoraPotencia")}
              >
                <View>
                  <Image
                    style={styles.iconeCirculo}
                    source={require("../../../assets/comando.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.textoCirculo}> Corrente para Watts </Text>
          </View>

          <View style={styles.containerCirculo}>
            <View style={styles.circulo}>
              <TouchableOpacity
                style={styles.iconeCirculo}
                onPress={() => navigation.navigate("CalculadoraBitolaCabo")}
              >
                <View>
                  <Image
                    style={styles.iconeCirculo}
                    source={require("../../../assets/fiacao.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.textoCirculo}>Calcular seção cabo</Text>
          </View>

          <View style={styles.containerCirculo}>
            <View style={styles.circulo}>
              <TouchableOpacity
                style={styles.iconeCirculo}
                onPress={() => navigation.navigate("CalculadoraDisjuntor")}
              >
                <View>
                  <Image
                    style={styles.iconeCirculo}
                    source={require("../../../assets/calcdisjuntor.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.textoCirculo}>Calcular Disjuntor</Text>
          </View>
        </View>

        <View style={styles.faixaCursosDisponiveis}>
          <Text style={styles.tituloHome}>Cursos Disponiveis</Text>
        </View>

        <TouchableOpacity
          style={[styles.boxMenu, styles.shadowProp]}
          onPress={() => navigation.navigate("Eletricista")}
        >
          <View style={styles.contentBoxMenuLeft}>
            <Image
              style={styles.icone}
              source={require("../../../assets/eletricista.png")}
            />
          </View>

          <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu}>Eletricista Residencial</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boxMenu, styles.shadowProp]}
          onPress={() => navigation.navigate("Comando")}
        >
          <View style={styles.contentBoxMenuLeft}>
            <Image
              style={styles.icone}
              source={require("../../../assets/comandoeletricocapa.png")}
            />
          </View>

          <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu}>Comando Eletrio</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.boxMenu}>
          <View style={styles.contentBoxMenuLeft}>
            <Image
              style={styles.icone}
              source={require("../../../assets/air.png")}
            />
          </View>

          <View style={styles.contentBoxMenu}>
            <Text style={styles.txtembreve}>Em breve</Text>
            <Text style={styles.textoBoxMenu}>
              manutenção de {"\n"}ar condicionado split
            </Text>
          </View>
        </View>

        <View style={styles.boxMenu}>
          <View style={styles.contentBoxMenuLeft}>
            <Image
              style={styles.icone}
              source={require("../../../assets/freezer.png")}
            />
          </View>

          <View style={styles.contentBoxMenu}>
          <Text style={styles.txtembreve}>Em breve</Text>
            <Text style={styles.textoBoxMenu}>
              Manutenção de {"\n"}Geladeira
            </Text>
          </View>
        </View>

        <View style={styles.boxMenu}>
          <View style={styles.contentBoxMenuLeft}>
            <Image
              style={styles.icone}
              source={require("../../../assets/lavar.png")}
            />
          </View>

          <View style={styles.contentBoxMenu}>
          <Text style={styles.txtembreve}>Em breve</Text>
            <Text style={styles.textoBoxMenu}>
              Manutenção de {"\n"}Maquina de lavar
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    flexWrap: "wrap",
  },
  scrollView: {
    flex: 1,
  },
  containerTopoContent: {
    flexDirection: "column",
    width: "100%",
  },
  tituloHome: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  txtembreve:{
color: 'gray',
fontWeight: 'bold'
  },
  areaDeAtuacao: {
    height: 150,
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
  containerCirculo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconeCirculo: {
    width: 40,
    height: 40,
  },
  boxMenu: {
    width: "95%",
    height: 120,
    backgroundColor: "#f5f5f5",
    margin: 5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  icone: {
    width: 80,
    height: 80,
  },
  textoBoxMenu: {
    fontSize: 18,
  },
  contentBoxMenu: {
    width: "70%",
    flexWrap: "wrap",
    maxWidth: 200,
  },
  contentBoxMenuLeft: {
    width: "30%",
  },
  containerCirculo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  faixaCursosDisponiveis: {
    width: "100%",
    marginBottom: 20,
  },
  circulo: {
    width: 70,
    height: 70,
    backgroundColor: "#44749d",
    margin: 5,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textoCirculo: {
    textAlign: "center",
  },
  containerTopo: {
    height: 150,
    width: "100%",

    backgroundColor: "#44749d",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTopoContent: {
    flexDirection: "column",
    width: "100%",
  },
  areaDeAtuacao: {
    height: 150,
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
  alinhamentoTop: {
    marginTop: 10,
  },
  textoColor: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginTop: 70,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default HomeScreen;
