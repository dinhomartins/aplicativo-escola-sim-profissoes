import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function Cmd10({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Fechamento de motor elétrico trifásico 6 pontas
        </Text>

        <Text style={styles.subTitulo}>
          Conceitos sobre motor trifásico 6 pontas
        </Text>
        <Text>
          Um motor elétrico trifásico 6 pontas é um tipo de motor que possui
          seis terminais ou pontas que podem ser conectados de maneiras
          diferentes para operar em diferentes configurações
        </Text>

        <Text style={styles.titulo}>Funcionamento: </Text>

        <Text>
          Os motores 6 pontas trifásicos são alimentados por uma fonte de
          energia elétrica de três fases. como resultado, essa alimentação de
          energia trifásica gera um campo magnético que faz com que o rotor
          gire. O motor elétrico trifásico de 6 pontas é composto de duas partes
          principais: o estator e o rotor.
          {"\n"} {"\n"}O estator é a parte fixa do motor e contém três
          enrolamentos (bobinas) espaçados 120 graus um do outro. certamente,
          cada enrolamento é alimentado por uma fase da fonte de energia
          elétrica trifásica. Quando uma corrente elétrica é aplicada ao
          estator, ele gera um campo magnético que gira em torno do estator. A
          rotação deste campo magnético é essencial para fazer com que o rotor
          gire.
          {"\n"} {"\n"}O rotor é a parte móvel do motor e é composto de um eixo
          e um conjunto de bobinas (visto que, ele também conhecidas como
          barras) que são montadas no torno do eixo. As bobinas do rotor são
          colocadas em posições que correspondem ao espaço entre as bobinas do
          estator. Quando o campo magnético rotativo gerado pelo estator
          interage com as bobinas do rotor, é criada uma força que faz com que o
          rotor comece a girar.
          {"\n"} {"\n"}O motor elétrico trifásico 6 pontas é um dos tipos mais
          comuns de motores elétricos usados ​​na indústria. Afinal, os motores
          são amplamente utilizados em aplicações que exigem alta potência e
          torque, como compressores, bombas, transportadores, elevadores, entre
          outros. Devido à sua eficiência, confiabilidade e capacidade de operar
          em uma ampla gama de condições adversas, os motores elétricos
          trifásicos 6 pontas são amplamente preferidos em relação a outros
          tipos de motores elétricos em muitas aplicações industriais.
        </Text>

        <Text style={styles.titulo}>Ligações: </Text>

        <Text>
          Existem duas configurações principais para fazer as ligações de um
          motor elétrico trifásico 6 pontas: eles podem ser ligados em estrela
          (Y), e também podem ser ligados em triângulo (ou delta). A
          configuração em estrela é usada para uma tensão de alimentação mais
          baixa, enquanto a configuração em triângulo é usada para uma tensão de
          alimentação mais alta
        </Text>

        <Text style={styles.titulo}>Velocidade: </Text>

        <Text>
          A velocidade do motor elétrico trifásico 6 pontas é determinada pelo
          número de pólos no estator. A maioria dos motores elétricos trifásicos
          6 pontas tem quatro, seis ou oito pólos. A velocidade do motor é
          diretamente proporcional à frequência da corrente elétrica fornecida.
        </Text>
        <Text style={styles.titulo}>Potência: </Text>
        <Text>
          A potência é uma quantidade de energia transformada em trabalho por
          unidade de tempo. No caso do motor elétrico, a potência é geralmente
          medida em cavalos-vapor (CV) ou watts (W).
          {"\n"} {"\n"}A potência do motor elétrico trifásico de 6 pontas
          depende da corrente elétrica instalada e da tensão de alimentação.
          Quanto maior a corrente elétrica instalada e a tensão de alimentação,
          maior será a potência do motor. Por exemplo, se uma corrente elétrica
          fornecida for aumentada enquanto a tensão de alimentação permanecer
          constante, a potência do motor aumentará proporcionalmente.
          {"\n"} {"\n"}A potência do motor elétrico trifásico 6 pontas também
          pode ser influenciada pela eficiência do motor, que é a relação entre
          a potência de saída do motor (ou seja, a potência que é fornecida à
          carga) e a potência de entrada (ou seja, a potência elétrica que está
          acomodada ao motor). Quanto maior a eficiência do motor, menor será a
          quantidade de energia elétrica gerada na forma de calor e maior será a
          quantidade de energia que é transformada em trabalho útil.
          {"\n"} {"\n"}A potência do motor elétrico trifásico 6 pontas é um
          fator importante a ser considerado ao selecionar um motor para uma
          determinada aplicação. É importante garantir que o motor selecionado
          tenha potência suficiente para realizar o trabalho necessário sem
          sobrecarregar o motor. Além disso, a potência do motor também pode
          afetar o tamanho e o custo do motor, já que motores mais potentes
          geralmente são maiores e mais caros do que motores menos potentes.
        </Text>

        <Text style={styles.titulo}>Aplicações: </Text>
        <Text>
          Decerto, os motores elétricos trifásicos 6 pontas são amplamente
          utilizados em muitas aplicações industriais, incluindo bombas,
          compressores, ventiladores, transportadores, elevadores, entre outros.
        </Text>

        <Text style={styles.titulo}>Manutenção: </Text>

        <Text>
          A manutenção regular é importante para garantir o bom funcionamento do
          motor elétrico trifásico 6 pontas. Assim sendo, temos que incluir,
          lubrificação, limpeza e verificação das conexões elétricas, nas
          manutençoes. A substituição de peças desgastadas ou danificadas também
          pode ser necessária.
        </Text>

        <Text style={styles.titulo}>
          Fechamento de motor elétrico trifásico{" "}
        </Text>

        <Text>
          Abaixo, está a tabela de fechamento de um motor de 6 pontas. Não tem
          segredo nenhum, é só seguir as tabelas. Estas tabelas tem as mesmas
          especificações de fechamentos existente nas placas de identificação
          fixado na carcaça de um motor elétrico. Ela é muito útil porque as
          vezes os motores tem essas placas danificadas impossibilitando de
          visualizar os fechamentos. Lembrando que em caso de dúvidas para fazer
          este tipo de fechamento e´só entrar em contato para obter maior
          esclarecimento sobre o assunto. Nota. Sempre que for fazer um
          fechamento de um motor; favor prestar bem atenção para não trocar
          nenhum cabo. Quando for ligar o mesmo na energia, verificar se a mesma
          se encontra desligada, evitando assim acidente.
        </Text>

      


          <Image
            style={{ width: 350, height: 250 }}
            source={require("../../../../assets/fechamento.jpg")}
          />
        <Text style={styles.titulo}>
          220V ou 440V triangulo
        </Text>
        <Image
            style={{ width: 350, height: 350 }}
            source={require("../../../../assets/fechamento2.jpg")}
          />
          <Text style={styles.titulo}>
          380V ou 760V Estrela
        </Text>

<Image
            style={{ width: 350, height: 350 }}
            source={require("../../../../assets/fechamento3.jpg")}
          />


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

export default Cmd10;
