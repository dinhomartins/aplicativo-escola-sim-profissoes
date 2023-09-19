import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd04({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Contator</Text>

        <Text style={styles.subTitulo}>
          Contator: O Que É, Como Funciona e Tipos
        </Text>
        {/* <Text style={styles.subTitulo}>Tensão elétrica</Text> */}
        <Text style={styles.texto}>
          Os contatores elétricos são dispositivos eletrônicos especializados em
          transportar a corrente para diferentes partes de um circuito, onde
          cada tipo de contato terá a sua própria função e um campo
          eletromagnético é gerado quando a corrente flui através dos contatos.
          Sua divisão acontece em 3 tipos diferentes: Molas de contato; Contatos
          auxiliares; Contatos de potência. {"\n"}
          {"\n"}Quer saber mais sobre as funções de um contator elétrico?
          Continue lendo e acabe de vez com as suas dúvidas.
        </Text>
      </View>

      <Image
        style={{ width: null, height: 350 }}
        source={require("../../../../assets/contator.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.subTitulo}>Como funciona um contator elétrico?</Text>
      <Text style={styles.texto}>
        Em um contator elétrico, a bobina móvel atrai a corrente enquanto o
        núcleo móvel empurra os contatos móveis e fixos juntos, fazendo com que
        eles fechem e abrem ao mesmo tempo. Dentro do meio industrial, os
        contatores são utilizados em diferentes aplicações já que esses
        dispositivos controlam o aquecimento, a iluminação e os motores
        elétricos.
        {"\n"}
        {"\n"}É importante ressaltar que, nos dias de hoje, existem várias
        tensões disponíveis e elas variam entre 24V AC e 110V DC. Esses
        contatores também vêm em diferentes níveis de amplificador e potência,
        enquanto bobinas de 230V AC são usadas para controlar o circuito de uma
        chave de motor de 230V.
      </Text>

      <Text style={styles.subTitulo}>
        As características de um contator elétrico
      </Text>

      <Text style={styles.texto}>
        Como explicado, o contator elétrico é um dispositivo eletromagnético que
        comuta circuitos de energia elétrica. Ele consiste em três componentes
        principais: uma carcaça de metal, uma carcaça de plástico e um
        eletroímã.
        {"\n"}
        {"\n"}
        Nele, a bobina será o componente mais importante de um contator e
        fornecerá a força motriz para fechar e abrir os contatos. Um contator
        também é feito de duas bobinas, onde essas bobinas são alimentadas por
        um circuito de controle externo. Além disso, o material do núcleo de um
        contator pode ser macio, duro ou pode ser de aço sólido.
        {"\n"}
        {"\n"}É comum que um contator elétrico possua vários contatos, já que
        esses contatos controlam outros componentes em um sistema elétrico, e
        normalmente são fechados ou abertos, fornecendo energia a uma carga
        quando a mesma é energizada.
      </Text>

      <Text style={styles.subTitulo}>Como funciona um contator elétrico?</Text>

      <Text style={styles.texto}>
        Mola: Em um contator elétrico, a mola tem a função de colocar os
        contatos em uma posição de repouso no momento em que a bobina estiver
        diretamente desconectada de sua fonte de energia.
        {"\n"}
        {"\n"}
        Contatos: De forma básica, os contatos são lâminas metálicas com função
        de chaveamento, além de serem responsáveis por realizar a condução da
        corrente de carga e também da corrente de comando.
        {"\n"}
        {"\n"}
        Feita de cobre, a bobina é um enrolamento capaz de criar um campo
        eletromagnético que, quando for alimentado em terminais do tipo A1 e A2,
        também consegue promover um deslocamento desse núcleo de ferromagnético.
        {"\n"}
        {"\n"}
        Núcleo: O núcleo do contator elétrico é construído com lâminas de um
        material ferromagnético, além de contar com duas diferentes partes que
        são separadas por uma ação mecânica de molas. Uma das partes deste
        núcleo está diretamente ligada aos contatos do dispositivo, onde irá
        acionar os contatos de comando e da carga do contator ao ter uma
        movimentação do núcleo.{" "}
      </Text>
      <Image
        style={{ width: null, height: 350 }}
        source={require("../../../../assets/contator2.jpg")}
        resizeMode="contain"
      />

      <Image
        style={{ width: null, height: 350 }}
        source={require("../../../../assets/contator3.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.subTitulo}>
        Qual é a importância do contator elétrico?
      </Text>

      <Text style={styles.texto}>
        Os contatores elétricos são dispositivos que usam bobinas para produzir
        um campo magnético e fechar ou abrir um conjunto de contatos para
        controlar a carga. Ou seja, esses contatores podem cortar os circuitos
        principais CA de forma rápida e frequentemente se conectar a grandes
        circuitos de controle de corrente.
        {"\n"}
        {"\n"}
        Vale ressaltar, que os contatos do contator elétrico são o único
        componente que permitirá que a corrente de plena carga passe por ele. Os
        contatos do contator são de diferentes tipos. No entanto, existem outros
        tipos de contatos. Os contatos de alimentação são aqueles que estão
        conectados à fonte de alimentação. Os contatos de alimentação são feitos
        de metal e os dois tipos de contatos são iguais. Por isso, os contatos
        elétricos hoje são tão importantes para qualquer tipo de projeto.
      </Text>

      <Text style={styles.subTitulo}>Contator elétrico de tipo AC1</Text>

      <Text style={styles.texto}>
        Os contatores elétricos que se encaixam nessa categoria contam com um
        fator de potência de no mínimo 0.95, com cargas puramente resistivas,
        com aquecimento e resistência, além de outros fatores. Por ter um valor
        de fator indutivo bem menor, as interrupções de correntes nessa
        categoria de contator elétrica são feitas de forma fácil.
      </Text>

      <Image
        style={{ width: null, height: 420 }}
        source={require("../../../../assets/contator4.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.subTitulo}>Contator elétrico de tipo AC2</Text>

      <Text style={styles.texto}>
        A segunda categoria de contatores elétricos é redirecionada para as
        partidas e também desligamentos, além de frenagens por uma
        contracorrente e uma partida por impulso em motores de anéis. No tipo
        AC2, o contator elétrico tem força para aguentar correntes de até 2.5x
        maiores que a corrente nominal. Por ter um valor mais alto, as
        interrupções são feitas de forma severa e bruta, porém o contato é capaz
        de suportar.
      </Text>

      <Image
        style={{ width: null, height: 380 }}
        source={require("../../../../assets/contator5.jpg")}
        resizeMode="contain"
      />

      <Text style={styles.subTitulo}>Contator elétrico de tipo AC3</Text>

      <Text style={styles.texto}>
        A terceira categoria de contatores elétricos é a AC3, divisão voltada
        para motores de gaiola dos quais o desligamento é feito com um motor em
        regime. Nessa categoria, a corrente da partida chega a ser cinco a sete
        vezes maior que o valor da corrente nominal. Comumente utilizados em
        escadas rolantes, elevadores, ar-condicionado e etc.
      </Text>

      <Image
        style={{ width: null, height: 480 }}
        source={require("../../../../assets/contator6.jpg")}
        resizeMode="contain"
      />


<Text style={styles.subTitulo}>Contator elétrico de tipo AC4</Text>

<Text style={styles.texto}>
Já a última categoria de contatores elétricos (a AC4) é voltada para realizar manobras com pesos extremos, como é o caso de pontes rolantes, tornos, etc.
</Text>

<Image
  style={{ width: null, height: 480 }}
  source={require("../../../../assets/contator7.jpg")}
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

export default Cmd04;
