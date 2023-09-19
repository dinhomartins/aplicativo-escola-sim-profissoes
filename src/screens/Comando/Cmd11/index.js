import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd11({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.tituloPrimario}>Relé Térmico</Text>

        <Image
          style={{ width: 350, height: 250 }}
          source={require("../../../../assets/rlt02.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.subTitulo}>O que é relé térmico</Text>
        <Text>
          Os relés térmicos são dispositivos construídos para proteger,
          controlar ou comandar um circuito elétrico, atuando sempre pelo efeito
          térmico provocado pela corrente elétrica.
          {"\n"}{" "}
        </Text>

        <Text>
          O relé térmico ou relé bimetálico de sobrecarga, é muito usado na
          proteção dos motores elétricos de possíveis anomalias, como sobrecarga
          de correntes prolongadas, sobreaquecimento e falta de fase.
          {"\n"} {"\n"}
          Quando o motor trava o seu eixo ou está trabalhando com muita carga,
          ele solicita mais corrente da rede elétrica para tentar compensar o
          peso requerido, resultando em um trabalho acima das especificações
          nominais.
          {"\n"} {"\n"}
          Dessa maneira, o motor fica mais suscetível a danos em suas bobinas,
          sobreaquecimentos e até mesmo, um provável derretimento na sua
          isolação, condições que podem provocar curtos-circuitos internos.
          {"\n"} {"\n"}O relé térmico também é usado para a proteção dos
          condutores de alimentação e dos dispositivos de manobra. Além do mais,
          ele pode ser utilizado em conjunto com disjuntores, uma vez que é
          possível realizar a sinalização, através de sinaleiros e alarmes, para
          o desarmamento do disjuntor.
        </Text>

        <Text style={styles.titulo}>Funcionamento do relé térmico</Text>
        <Text>
          O relé térmico funciona seccionando o circuito quando é identificado
          um aquecimento excessivo!
          {"\n"} {"\n"}
          Os relés térmicos têm como elemento básico o bimetal ou como ele é
          conhecido, lâmina bimetálica. Esse elemento é constituído de duas
          lâminas finas, normalmente ferro e níquel, sobrepostas e soldadas.
          {"\n"} {"\n"}
          Como os dois materiais apresentam coeficientes de dilatação
          diferentes, um se alonga mais do que o outro quando aquecido.
          {"\n"} {"\n"}
          Além disso, por estarem rigidamente unidos e fixados em uma das
          extremidades, o metal de menor coeficiente de dilatação provoca um
          encurvamento do conjunto para o seu lado.
          {"\n"} {"\n"}
          Esse movimento provoca o contato mecânico e a abertura do circuito
          elétrico em sequência ao disjuntor térmico, efetuando a proteção dos
          equipamentos elétricos.
          {"\n"} {"\n"}
          Além do mais, com o acionamento do relé, há o desarmamento do circuito
          do motor e do circuito de comando, através de seus contatos
          auxiliares.
          {"\n"} {"\n"}O relé térmico é muito utilizado, uma vez que após
          acionado, ele trava e impede o acionamento do motor novamente. Dessa
          forma, só é possível ligar o motor novamente quando ocorrer uma ação
          manual de rearme!
          {"\n"} {"\n"}
          Alguns fatores são responsáveis pela atuação ou desarmamento do relé
          térmico, são eles:
        </Text>

        <Text>
          Travamento do rotor{"\n"} {"\n"}
          Curto-circuito entre as bobinas no rolamento interno{"\n"} {"\n"}
          Curto-circuito entre a bobina e a carcaça do motor{"\n"} {"\n"}
          Aumento da corrente acima do valor nominal{"\n"} {"\n"}
        </Text>

        <Text style={styles.titulo}>Contatos do relé térmico</Text>

        <Image
          style={{ width: 350, height: 250 }}
          source={require("../../../../assets/rlt03.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Contatos principais</Text>
        <Text>
          Os contatos principais recebem as três fases para a alimentação da
          carga e quando acionados, conduzem a sua corrente nominal.
          Identificados pelos algarismos 1, 3, 5 ou as letras L1, L2, L3 (linha)
          para a entrada da alimentação. E 2, 4,6 ou T1, T2, T3 (terminal) para
          a saída até carga.
        </Text>

        <Text style={styles.titulo}>Contatos auxiliares</Text>
        <Text>
          Os contatos auxiliares protegem o circuito de comando do motor
          trifásico e o circuito de lógica do motor.
        </Text>

        <Text style={styles.titulo}>Contato fechado</Text>
        <Text>
          Os contatos abertos podem ser usados para sinalizar que o relé térmico
          está acionado ou que existe um problema no circuito, através de uma
          lâmpada por exemplo. Eles são identificados pelos números 97 e 98.
        </Text>

        <Text style={styles.titulo}>Contato tipo comutador</Text>
        <Text>
          Os contatos do tipo comutador são usados da mesma forma que os outros
          contatos aberto e fechado, porém, com apenas uma entrada de
          alimentação.
          {"\n"} {"\n"}
          Assim como os demais dispositivos elétricos, o relé térmico também
          necessita de ajuste específico de acordo com cada circuito e cada tipo
          de motor a ser utilizado.
          {"\n"} {"\n"}
          Existem classes de disparo, tornando possível o melhor dimensionamento
          dele de acordo com o tempo de partida do motor.
        </Text>
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
    fontSize: 32,
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

export default Cmd11;
