import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd07({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Botoeira de emergencia</Text>

        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Text style={styles.texto}>
          O botão de emergência ou botoeira de emergência, como também é
          conhecido, trata-se de um dispositivo extremamente fundamental para a
          garantia de segurança em máquinas e equipamentos e nos comandos
          elétricos, no ramo industrial.
        </Text>
      </View>

      <Image
        style={{ width: null, height: 400 }}
        source={require("../../../../assets/botaoemergencia.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.texto}>
        Explicando mais claramente, cada comando precisa ter uma extensão deste
        botão para que o funcionário/operador da máquina possa fazer o
        desligamento do maquinário a qualquer momento e em qualquer lugar
      </Text>
      <Text style={styles.titulo}>Para que serve o botão de emergência?</Text>

      <Image
        style={{ width: null, height: 200 }}
        source={require("../../../../assets/btnapertando.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.texto}>
        Como já mencionado, os Botões de Emergência tratam-se de dispositivos
        com acionadores, no formato de cogumelo na cor vermelha (que você
        entenderá sobre a cor mais adiante) e que precisa ser de fácil acesso
        quando for necessário o seu acionamento.
        {"\n"}
        {"\n"}
        Basicamente, este botão de emergência serve para momentos emergenciais
        onde, acionado, ele acaba desligando a máquina e parando todo seu
        movimento. O monitoramento do botão é feito por um CLP de segurança.
        {"\n"}
        {"\n"}É importante destacar novamente que, toda a sistemática de comando
        elétrico e automação precisam estar em conformidade com a NR 12.
      </Text>

      <Text style={styles.titulo}>
        {" "}
        Botão de emergência cogumelo com retenção e chave
      </Text>

      <Image
        style={{ width: null, height: 450 }}
        source={require("../../../../assets/caixabotao.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.texto}>
        O botão de emergência cogumelo com retenção e chave possui duas ou três
        posições, normalmente. Estas podem ser tanto de ligar ou desligar, o que
        gera uma vantagem de ter duas funcionalidades em um único botão –
        ocupando menos espaço no painel de comando.
        {"\n"}
        {"\n"}
        Contudo, como tudo tem dois lados, o uso deste dispositivo também não é
        perfeito e apresenta desvantagens que podem gerar inseguranças como o
        fato dele seguir comutado mesmo com a falta de energia. O que faz com
        que o circuito volte automaticamente, diferente do botão anterior.
        {"\n"}
        {"\n"}
        Este problema também acontece se um relé de proteção, por exemplo,
        atuar. Isso porque, ao solucionar o erro o circuito volta a funcionar
        normalmente, o que acarreta em riscos de acidentes de trabalho
        envolvendo o sistema de comando.
      </Text>

      <Text style={styles.titulo}>
        Localização do botão de emergência no equipamento
      </Text>

      <Text style={styles.texto}>
        Quando falamos em botões para parada de emergência é preciso que levemos
        em consideração alguns pontos, no momento em que forem ser instalados.
        Tais como:
      </Text>

      <Text style={styles.texto}>
        Estes botões de emergência, o nome já diz, são para momentos
        emergenciais que devem ser acionados em casos de risco de acidente de
        trabalho, por exemplo.
        {"\n"}
        {"\n"}
        Afinal, a operação da máquina é parada (lembra que a cor deles é
        vermelha?).
        {"\n"}
        {"\n"}
        Por isso, os profissionais precisam ter fácil acesso a eles, ou seja, os
        botões precisam estar em um local que todos possam acessar em caso de
        necessidade.
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

export default Cmd07;
