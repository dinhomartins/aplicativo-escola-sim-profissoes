import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

function Aula09({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>DPS</Text>

        <Image
          style={{
            height: 250,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
          }}
          source={require("../../../../assets/dps.jpg")}
        />

        <Text style={styles.subTitulo}>
          DPS (dispositivos de proteção contra surtos)
        </Text>
        <Text style={styles.texto}>
          O significado da sigla DPS é Dispositivo de Proteção contra Surtos, ou
          seja, pode ser considerado um protetor de surto. Eles são
          regulamentados pelas Normas Regulamentadoras ABNT NM nº 60898 e IEC nº
          60947-2.
          {"\n"}
          {"\n"}
          Trata-se de equipamentos que detectam sobretensões na rede de energia
          elétrica dos estabelecimentos. Essa ferramenta é muito conhecida pelos
          engenheiros e eletricistas, que as indicam para a proteção de:{"\n"}
          {"\n"}
          Transformadores; {"\n"}Produtos domésticos;{"\n"} Luminárias urbanas;
          {"\n"}
          Linhas de telecomunicações; {"\n"}Painéis de energia solar; {"\n"}
          Tubulações de companhias; {"\n"}Quadros de distribuição de
          edificações. {"\n"}
          {"\n"}Os dispositivos protegem dos raios produzidos nas tempestades e
          dos surtos que são comuns nas sobrecargas. Eles são como os
          disjuntores, que se desligam quando ocorre uma descarga elétrica
          atmosférica ou quando há um problema na eletricidade.
        </Text>

        <Text style={styles.subTitulo}>Saiba como funciona o DPS</Text>

        <Text style={styles.texto}>
          O DPS detecta e desvia rapidamente o surto de tensão para o sistema de
          aterramento, de modo que o disjuntor sequer consegue perceber a fuga.
          O dispositivo é ligado ao fio terra de um lado e ao fio fase do outro,
          fechando um curto que não vai prejudicar a instalação elétrica do
          local. Mas eles precisam ser protegidos por disjuntores de desconexão.
        </Text>

        <Text style={styles.subTitulo}>O que causa um Surto Elétrico?</Text>

        <Text style={styles.texto}>
          O surto elétrico é um fenômeno que pode ocorrer devido aos raios que
          caem sobre a rede elétrica, partida de grandes motores elétricos, além
          de outras anomalias. Por esses e outros motivos é que devemos usar
          sempre um DPS.
        </Text>

        <Text style={styles.subTitulo}>Exemplos de DPS</Text>

        <Image
          style={{
            height: 350,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
          }}
          source={require("../../../../assets/dps01.jpg")}
        />
        <Text style={styles.subTitulo}>DPS: Classes e Funcionamento</Text>

        <Text style={styles.texto}>
          No mercado, é possível encontrar três classes de DPS e todas elas são
          indispensáveis para a segurança da população. A classe I diz respeito
          aos dispositivos que drenam correntes parciais dos raios atmosféricos,
          a qual é utilizada nas áreas rurais e urbanas periféricas.
          {"\n"}
          {"\n"}
          Já a classe II se refere aos dispositivos que fazem a drenagem das
          correntes induzidas nas edificações. Por fim, a classe III trata dos
          dispositivos úteis para a proteção fina de equipamentos ligados na
          rede elétrica, telefônica ou de dados. Esse último tipo é muito
          importante, já que evita acidentes graves relacionados à eletricidade.
        </Text>

        <Text style={styles.subTitulo}>Classe I</Text>

        <Text style={styles.texto}>
          Os DPS classe I são os dispositivos utilizados na proteção contra os
          efeitos das descargas diretas, então a sua instalação é realizada no
          ponto de entrada da instalação. O DPS classe I é o mais robusto em
          relação à capacidade de descarga.
        </Text>

        <Text style={styles.subTitulo}>Classe II</Text>

        <Text style={styles.texto}>
          Os DPS Classe II são os dispositivos adequados para a proteção contra
          os efeitos das descargas indiretas, então a sua instalação normalmente
          é feita no quadro de distribuição. {"\n"}
          {"\n"}O DPS classe II é o mais utilizado em residências e pequenos
          imóveis comerciais, trabalhando como complemento ao modelos classe I,
          ou ainda na prevenção contra sobretensões de manobra.
        </Text>

        <Text style={styles.subTitulo}>Classe III</Text>

        <Text style={styles.texto}>
          Os DPS Classe III são os dispositivos instalados para uma proteção
          complementar. Eles são usados em níveis internos de proteção, sendo
          instalados próximos aos equipamentos para garantir uma proteção maior.
        </Text>

        <Text style={styles.subTitulo}>
          Compreenda onde e como instalar o DPS
        </Text>

        <Text style={styles.texto}>
          O procedimento de instalação do DPS tem papel primordial na proteção
          dos equipamentos. Se a implantação for inadequada, o dispositivo é
          inútil para proteger o sistema elétrico. É aconselhável contar com o
          auxílio de um profissional especializado e capacitado para fazer esse
          trabalho.
          {"\n"}
          {"\n"}O instalador precisa saber os conceitos de eletricidade,
          entender sobre Vp/ef ou nível eficaz de proteção, o qual considera a
          queda de tensão nos terminais dos condutores (V1 / V2) e a tensão do
          DPS (Vp). As fórmulas utilizadas para DPS com varistor são as
          seguintes:
          {"\n"}
          {"\n"}
          Vp/ef = Vp + V1 + V2;{"\n"}
          DeltaV = V1 + V2;{"\n"}
          Vp/ef = Vp + Delta V.{"\n"}
          {"\n"}
          Já para o DPS com centelhador, deve-se verificar qual é o maior valor
          entre Vp e Delta V, tendo em vista que a queda na conexão acontece
          após a sua ignição. Além disso, é preciso se certificar de que os
          aparelhos e o fio terra estão conectados à barra equipotencial ligada
          ao DPS, e não em qualquer haste.
          {"\n"}
          {"\n"}
          Os cabos de entrada e saída do DPS devem ter, no máximo, 50
          centímetros de comprimento nos casos de ele pertencer à classe I. Se
          as conexões forem maiores, podem ser realizadas nos terminais do DPS,
          para eliminar a contribuição do Delta V, ou seja “Delta V. (D1 + D2 ≤
          0,50m)”.
          {"\n"}
          {"\n"}
          Para reduzir a indutância entre os cabos, o profissional pode trançar
          os fios condutores e utilizar cabos blindados. Essa técnica funciona
          se o fio terra ligado ao DPS estiver conectado na barra equipotencial
          e passe por um conduíte dedicado. Parece difícil? Então, vamos
          simplificar!
          {"\n"}
          {"\n"}A instalação do DPS pode ser planejada no projeto arquitetônico
          para considerar toda a estrutura elétrica. A ferramenta precisa ser
          instalada em conjunto com o dispositivo de desconexão. Ela precisa
          ficar antes do disjuntor geral para assegurar a proteção, pois se ele
          falhar, o disjuntor segue funcionando.
          {"\n"}
          {"\n"}
          Porém, o DPS também pode ser instalado após o disjuntor geral. Nesse
          caso, se o disjuntor falhar, o dispositivo de proteção contra surtos é
          desativado e o consumo de energia é interrompido.
          {"\n"}
          {"\n"}
          Portanto, indica-se a instalação do DPS dentro do quadro de
          distribuição geral (QDG) ou na entrada da rede elétrica. Existem,
          ainda, DPS individuais, úteis para a proteção de um único equipamento,
          os quais são colocados nas tomadas.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={styles.subTitulo}>Exemplo de instalação DPS</Text>
        <Image
          style={{
            height: 350,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
          }}
          source={require("../../../../assets/dpsintalado.jpg")}
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

export default Aula09;
