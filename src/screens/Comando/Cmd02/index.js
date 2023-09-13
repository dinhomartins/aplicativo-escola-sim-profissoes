import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

function Cmd02({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Motor elétrico</Text>
        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Image
        style={{width: null, height: 240, marginTop: 20}}
        source={require("../../../../assets/motoreletrico2.jpg")}
      />
        <Text style={styles.texto}>
          Em máquinas elétricas, motor elétrico ou atuador elétrico[1] é
          qualquer dispositivo que transforma energia elétrica em mecânica. É o
          mais usado de todos os tipos de motores, pois combina as vantagens da
          energia elétrica - baixo custo, facilidade de transporte, limpeza e
          simplicidade de comando – com sua construção simples, custo reduzido,
          grande versatilidade de adaptação às cargas dos mais diversos tipos e
          melhores rendimentos.
          {"\n"}
          {"\n"}A tarefa reversa, aquela de converter o movimento mecânico na
          energia elétrica, é realizada por um gerador ou por um dínamo. Em
          muitos casos os dois dispositivos diferem somente em sua aplicação e
          detalhes menores de construção. Os motores de tração usados em
          locomotivas executam frequentemente ambas as tarefas se a locomotiva
          for equipada com os freios dinâmicos. Normalmente também esta
          aplicação se dá a caminhões fora de estrada, chamados eletro diesel.
        </Text>
      </View>

      {/* Corrente Eletrica */}
      <Text style={styles.subTitulo}>Funcionamento</Text>
      <Text style={styles.texto}>
        A maioria de motores elétricos trabalha pela interação entre campos
        eletromagnéticos, mas existem motores baseados em outros fenômenos
        eletromecânicos, tais como forças eletrostáticas. O princípio
        fundamental em que os motores eletromagnéticos são baseados é que há uma
        força mecânica em todo o fio quando está conduzindo corrente elétrica
        imersa em um campo magnético. A força é descrita pela lei da força de
        Lorentz e é perpendicular ao fio e ao campo magnético. Em um motor
        giratório, há um elemento girando, o rotor. O rotor gira porque os fios
        e o campo magnético são arranjados de modo que um torque seja
        desenvolvido sobre a linha central do rotor.
        {"\n"} {"\n"}A maioria de motores magnéticos são giratórios, mas existem
        também os tipos lineares. Em um motor giratório, a parte giratória
        (geralmente no interior) é chamada de rotor, e a parte estacionária é
        chamada de estator. O motor é constituído de eletroímãs ou imãs
        permanentes, que são posicionados no material ferromagnético que
        constitui o corpo do rotor, e geralmente bobinas de cobre são enroladas
        e adequadamente dispostas em volta do material ferromagnético que
        constitui o estator.
      </Text>

      <Text style={styles.subTitulo}>
        Funcionamento de um motor de corrente contínua simples
      </Text>

      <Image
        style={styles.motores}
        source={require("../../../../assets/m01.png")}
      />
      <Text style={styles.subTitulo}>
        Quando a bobina é alimentada, um campo magnético é gerado em torno do
        rotor. O lado esquerdo do rotor é empurrado para fora do imã esquerdo e
        atraído para a direita, causando rotação.
      </Text>
      {/* Corrente Eletrica */}
      <Image
        style={styles.motores}
        source={require("../../../../assets/m02.png")}
      />

      <Text style={styles.subTitulo}>O rotor continua a girar.</Text>

      <Image
        style={styles.motores}
        source={require("../../../../assets/m03.png")}
      />

      <Text style={styles.subTitulo}>
        Quando o rotor fica horizontalmente alinhado, o torque torna-se zero.
        Neste ponto, o comutador inverte a direção da corrente através da
        bobina, invertendo o campo magnético.
      </Text>

      <Image
        style={styles.motores}
        source={require("../../../../assets/m04.gif")}
      />

      <Text style={styles.subTitulo}>
      Animação do processo.
      </Text>

  

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
    fontSize: 24,
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

export default Cmd02;
