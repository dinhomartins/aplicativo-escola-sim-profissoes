import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd17({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.tituloPrimario}>
          Vantagens da Partida Estrela Triangulo
        </Text>

        <Text>
          Uma das discussões sempre vistas nas aulas de elétrica nas equipes de
          manutenção elétrica é do porquê realizar a partida do motor em estrela
          triangulo, com isso nesse post vamos abordar esse assunto e tirar suas
          dúvidas. {"\n"} {"\n"}Esse método de partida em estrela triangulo
          consiste no start de motores elétricos trifásicos que para serem
          acionados necessitam de uma chave com a mesma nomenclatura. A partida
          desses motores por intermédio dessa chave pode ser tanto manual quanto
          automática, tudo vai depender do sistema em que está ligado e a
          necessidade da empresa, mas o que é igual em todas ligações é que essa
          chave estrela triangulo é interligada aos enrolamentos do motor que
          por sua vez estão acessíveis com 6 terminais.
        </Text>
        <Text style={styles.subTitulo}>
          Funcionamento da Partida Estrela Triangulo
        </Text>

        <Text>
          Na partida estrela triangulo o motor inicia em sua configuração
          estrela e dessa forma proporciona uma impedância mais elevada com uma
          tensão bem baixa nas suas bobinas, fazendo assim com que a corrente
          nesse momento tenha uma queda na sua partida, e isso resultará em uma
          perda considerável do torque na partida desse motor. Essa manobra
          proporciona ao motor uma partida mais suave e consegue reduzir a sua
          corrente de partida utilizando apenas 1/3 da corrente necessária caso
          o motor fosse ligado em uma partida direta.
          {"\n"} {"\n"}
          Dessa forma a utilização desse método de partida visa a diminuição do
          pico de corrente na partida do motor, porém lembramos que você nunca
          deve tomar essa configuração de ligação como um padrão, sempre analise
          bem se o pico de corrente na partida é o seu problema principal, pois
          as chaves estrela triangulo ou soft starts são relativamente caras,
          basicamente elas são viáveis para motores superiores a 20HP de
          potência, ou seja, se você tiver um motor de 10HP não é compensatório
          o uso de uma chave estrela triangulo a menos que haja algum
          impedimento , caso contrário utilize o método de partida direta.
        </Text>

        <Text style={styles.subTitulo}>Características de fechamento</Text>

        <Text style={styles.subTitulo}>Fechamento Triangulo</Text>

        <Text>
          Esse tipo de fechamento tem por definição fazer com que o motor receba
          um nível muito baixo de tensão em seu projeto elétrico, sendo assim se
          um motor com tensão 220/380V tiver o fechamento em triangulo, ele terá
          uma inserção somente da tensão 220V. Os seus terminais são ligados da
          seguinte maneira:
        </Text>

        <Text style={styles.titulo}>
          1-6 (rede R){"\n"}
          3-5 (rede S){"\n"}
          4-2 (rede T){"\n"}
        </Text>
        <TouchableOpacity
          style={styles.boxAula}
          onPress={() => navigation.navigate("Cmd17Diagrama")}
        >
          <Image
            style={{ width: null, height: 180 }}
            source={require("../../../../assets/triangulo.jpg")}
          />
        </TouchableOpacity>

        <Text style={styles.subTitulo}>Fechamento Estrela</Text>

        <Text>
          O motor que receber um fechamento das suas bobinas no método estrela
          irá ter por definição uma tensão de alto nível em sua partida de
          acordo com o projetado, sendo assim caso esse motor tenha uma
          alimentação em 220/380V o fechamento no método estrela vai permitir
          uma tensão de 380V atuante. Os terminais das bobonas dos enrolamentos
          desse motor devem ser ligadas da seguinte forma:
        </Text>
        <TouchableOpacity
          style={styles.boxAula}
          onPress={() => navigation.navigate("Cmd17Diagrama")}
        >
          <Image
            style={{ width: null, height: 180, marginTop: 40 }}
            source={require("../../../../assets/estrela.jpg")}
          />
        </TouchableOpacity>

        <Text style={styles.subTitulo}>
          Precauções na Instalação Estrela Triangulo
        </Text>

        <Text>
          Um dos pontos mais importantes para que devem ter total atenção do
          profissional no momento da instalação da partida do motor em estrela
          triangulo está na questão de quando o modo triangulo deve entrar em
          ação.
          {"\n"}
          {"\n"}
          Pois bem, a ligação em triangulo só deve ser comutada após o motor
          estar com no mínimo noventa por centro da sua rotação nominal, sendo
          assim a comutação da chave estrela triangulo deverá ser executada
          tendo esse parâmetro como referência. Para que seja estabelecido o
          tempo em que o motor atinge essa velocidade, é interessante que seja
          usado um tacômetro na primeira vez que for realizar o teste do sistema
          já com carga instalada.
          {"\n"}
          {"\n"}
          Caso o motor tenha a mudança na configuração do fechamento antes da
          hora, irá ocorrer um pico de corrente praticamente idêntico a uma
          partida direta, dessa forma é valido conferir se o motor aplicado no
          sistema consegue atingir esse nível de rotação com carga aplicada,
          caso contrário é mais conveniente o uso de inversor de frequência, por
          exemplo.
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

export default Cmd17;
