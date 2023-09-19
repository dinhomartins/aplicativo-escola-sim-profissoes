import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd08({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Relé falta de fase</Text>
        <Image
          style={{ width: null, height: 400 }}
          source={require("../../../../assets/relef1.jpg")}
          resizeMode="contain"
        />
        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Text style={styles.texto}>
          O relé falta de fase é um equipamento fundamental para sistemas
          trifásicos, pois garante que a carga do motor esteja sempre alimentada
          pelas três fases, de forma a evitar a destruição total do motor ou
          equipamento nele aplicado.
          {"\n"}
          {"\n"}O relé falta de fase é fabricado com a mais alta tecnologia do
          mercado, pronto para proporcionar segurança e estabilidade elétrica a
          qualquer máquina ou aparelho com sistema trifásico, e assim o protege
          contra falta de fase e instabilidades na corrente elétrica, de maneira
          a detectar também a fase fantasma.
        </Text>
      </View>

      <Image
        style={{ width: null, height: 400 }}
        source={require("../../../../assets/relef2.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>
        SISTEMA DE FUNCIONAMENTO DO RELÉ FALTA DE FASE E SUAS VANTAGENS
      </Text>

      <Text style={styles.texto}>
        O sistema de funcionamento do relé falta de fase é baseado em suas três
        entradas de rede, que são: L1, L2 e L3. Essas entradas são responsáveis
        por energizar o relé interno e permanecem fechadas em condições normais
        de tensão pré-ajustadas. Quando é detectada alguma falta de fase no
        sistema trifásico, as entradas atuam como substitutas, e assim fornece a
        energia acumulada pelos relés internos, no lugar da corrente normal.
        {"\n"}
        {"\n"}
        Esse processo é muito útil e indispensável para salvar a vida de
        qualquer motor trifásico e por isso, o relé falta de fase é um
        equipamento tão importante para a segurança dessas máquinas.
        {"\n"}
        {"\n"}
        Outra característica importante do relé falta de fase é o seu painel LED
        frontal, que permite saber quando está comutado e energizado, é possível
        ajustar até - 35% da tensão nominal, informações importantes para
        antecipar possíveis anomalias no sistema, de maneira a agilizar o tempo
        de ajuste. Isso apenas reforça ainda mais a importância de se adquirir
        um relé falta de fase, equipamento pronto para resolver qualquer
        imprevisto.
      </Text>
      <Image
        style={{ width: null, height: 400 }}
        source={require("../../../../assets/relef3.jpg")}
        resizeMode="contain"
      />
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

export default Cmd08;
