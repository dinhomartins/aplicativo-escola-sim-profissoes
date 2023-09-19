import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
const bg = {
  uri: "https://i0.wp.com/s3.sa-east-1.amazonaws.com/static.inbep.com.br/wp-content/uploads/2022/10/17154128/image-2-e1666032133196.png?resize=600%2C370&ssl=1",
};

const bgcomando = require("../../../assets/bgcomando.jpg");

// function Comando({ navigation }) {
//     return (
//       <ScrollView>
//       <View style={styles.container}>
//       <StatusBar style="light" />
//         <View  style={styles.capaScreen}>

//         <ImageBackground source={bgcomando} resizeMode="cover" style={styles.capa}>
//         </ImageBackground>
//         </View>
//         <Text style={styles.titulo} >Comando Elétrico</Text>
//         {/* <Button
//           title="Go to Details... again"
//           onPress={() => navigation.navigate('Home')}
//         /> */}
//         {/* Aula 01 */}
//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd01')}>
//           <Text style={styles.tituloAula} >Aula 01</Text>
//           <Text style={styles.conteudoAula}>Conceitos elétricos</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd02')}>
//           <Text style={styles.tituloAula} >Aula 02</Text>
//           <Text style={styles.conteudoAula}>Motor elétrico</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd03')}>
//           <Text style={styles.tituloAula} >Aula 03</Text>
//           <Text style={styles.conteudoAula}>Botoeira</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd04')}>
//           <Text style={styles.tituloAula} >Aula 04</Text>
//           <Text style={styles.conteudoAula}>Contator</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd05')}>
//           <Text style={styles.tituloAula} >Aula 05</Text>
//           <Text style={styles.conteudoAula}>Temporizador</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd06')}>
//           <Text style={styles.tituloAula} >Aula 06</Text>
//           <Text style={styles.conteudoAula}>Sinaleiro</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd07')}>
//           <Text style={styles.tituloAula} >Aula 07</Text>
//           <Text style={styles.conteudoAula}>Botoeira de emergencia</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd08')}>
//           <Text style={styles.tituloAula} >Aula 08</Text>
//           <Text style={styles.conteudoAula}>Réle falta de fase</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd09')}>
//           <Text style={styles.tituloAula} >Aula 09</Text>
//           <Text style={styles.conteudoAula}>Simbologia unifilar </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd10')}>
//           <Text style={styles.tituloAula} >Aula 10</Text>
//           <Text style={styles.conteudoAula}>Motor 6 pontas </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd11')}>
//           <Text style={styles.tituloAula} >Aula 11</Text>
//           <Text style={styles.conteudoAula}>Réle Térmico </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd12')}>
//           <Text style={styles.tituloAula} >Aula 12</Text>
//           <Text style={styles.conteudoAula}>Partida Direta</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd13')}>
//           <Text style={styles.tituloAula} >Aula 13</Text>
//           <Text style={styles.conteudoAula}>Contato de Selo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd14')}>
//           <Text style={styles.tituloAula} >Aula 14</Text>
//           <Text style={styles.conteudoAula}>Partida contato de selo com rele térmico</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd15')}>
//           <Text style={styles.tituloAula} >Aula 15</Text>
//           <Text style={styles.conteudoAula}>Partida com motor auxiliar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd16')}>
//           <Text style={styles.tituloAula} >Aula 16</Text>
//           <Text style={styles.conteudoAula}>Partida automatica e manual com boia</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd17')}>
//           <Text style={styles.tituloAula} >Aula 17</Text>
//           <Text style={styles.conteudoAula}>Estrela Triangulo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd18')}>
//           <Text style={styles.tituloAula} >Aula 18</Text>
//           <Text style={styles.conteudoAula}>Partida Estrela Triangulo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd19')}>
//           <Text style={styles.tituloAula} >Aula 19</Text>
//           <Text style={styles.conteudoAula}>Diagrama de potência</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd20')}>
//           <Text style={styles.tituloAula} >Aula 20</Text>
//           <Text style={styles.conteudoAula}>Estrela Triangulo - Unifilar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd21')}>
//           <Text style={styles.tituloAula} >Aula 21</Text>
//           <Text style={styles.conteudoAula}>Partida Arraque</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd22')}>
//           <Text style={styles.tituloAula} >Aula 22</Text>
//           <Text style={styles.conteudoAula}>Comando para caixa água</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd23')}>
//           <Text style={styles.tituloAula} >Aula 23</Text>
//           <Text style={styles.conteudoAula}>Comando para cancela</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd24')}>
//           <Text style={styles.tituloAula} >Aula 24</Text>
//           <Text style={styles.conteudoAula}>Partida com reversão e sinalizador</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd25')}>
//           <Text style={styles.tituloAula} >Aula 25</Text>
//           <Text style={styles.conteudoAula}>Partida direta sem selo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd26')}>
//           <Text style={styles.tituloAula} >Aula 26</Text>
//           <Text style={styles.conteudoAula}>Partida Circuito em cascata</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd27')}>
//           <Text style={styles.tituloAula} >Aula 27</Text>
//           <Text style={styles.conteudoAula}>Contato de selo unifilar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd28')}>
//           <Text style={styles.tituloAula} >Aula 28</Text>
//           <Text style={styles.conteudoAula}>Diagrma comando partida bombas intercaladas</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd29')}>
//           <Text style={styles.tituloAula} >Aula 29</Text>
//           <Text style={styles.conteudoAula}>Partida estrela triangulo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd30')}>
//           <Text style={styles.tituloAula} >Aula 30</Text>
//           <Text style={styles.conteudoAula}>Partida com reversão e botão de emergência</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd31')}>
//           <Text style={styles.tituloAula} >Aula 31</Text>
//           <Text style={styles.conteudoAula}>Partida reversão com memoria</Text>
//         </TouchableOpacity>

//       </View>
//       </ScrollView>
//     );
//   }

//   const styles = StyleSheet.create({
//     container:{
//       flex: 1,
//       alignItems: 'center'
//     },
//     capaScreen:{
//       height: 200,
//       width:'100%'
//     },
//     capa:{
//       height:200,
//       width: '100%'
//     },
//     titulo:{
//       fontSize: 24,
//       paddingBottom:20,
//       paddingTop:20,
//       textAlign: 'center'
//     },
//     boxAula:{
//       width: '90%',
//       height: 120,
//       borderRadius: 8,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#487a86',
//       marginBottom: 20
//     },
//     tituloAula:{
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: '#fff'
//     },
//     conteudoAula:{
//       fontSize: 16,
//       color: '#fff',
//       textAlign: 'center',
//       margin: 10
//     }

//   })

// export default Comando;

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
    desc: "Comando Elétrico",
    rota: "Cmd01",
    emBreve: false,
  },
  {
    id: "2",
    nome: "Aula 02",
    desc: "Conceito Eletrico",

    rota: "Cmd02",
    emBreve: false,
  },
  {
    id: "3",
    nome: "Aula 03",
    desc: "Alicate amperimetro e multímetro",
    rota: "Cmd03",
    emBreve: false,
  },
  {
    id: "4",
    nome: "Aula 04",
    desc: "Alicate amperimetro e multímetro",
    rota: "Cmd04",
    emBreve: false,
  },
  {
    id: "5",
    nome: "Aula 05",
    desc: "Relé Temporizador e timer",
    rota: "Cmd05",
    emBreve: false,
  },
  {
    id: "6",
    nome: "Aula 06",
    desc: "Sinaleiro",
    rota: "Cmd06",
    emBreve: false,
  },
  {
    id: "7",
    nome: "Aula 07",
    desc: "Botoeira de emergência",
    rota: "Cmd07",
    emBreve: false,
  },
  {
    id: "8",
    nome: "Aula 08",
    desc: "Relé falta de fase",
    rota: "Cmd08",
    emBreve: false,
  },
  {
    id: "9",
    nome: "Aula 09",
    desc: "Diagrama Unifilar - Simbologia",
    rota: "Cmd09",
    emBreve: false,
  },
  {
    id: "10",
    nome: "Aula 10",
    desc: "Motor elétrico 6 pontas - tipos de fechamento",
    rota: "Cmd10",
    emBreve: false,
  },
  {
    id: "11",
    nome: "Aula 11",
    desc: "Relé Térmico",
    rota: "Cmd11",
    emBreve: false,
  },
  {
    id: "12",
    nome: "Aula 12",
    desc: "Partida Direta",
    rota: "Cmd12",
    emBreve: false,
  },
  {
    id: "13",
    nome: "Aula 13",
    desc: "Contato de Selo",
    rota: "Cmd13",
    emBreve: false,
  },
  {
    id: "14",
    nome: "Aula 14",
    desc: "Partida contato de selo com rele térmico",
    rota: "Cmd14",
    emBreve: false,
  },
  {
    id: "15",
    nome: "Aula 15",
    desc: "Partida com motor auxiliar",
    rota: "Cmd15",
    emBreve: false,
  },
  {
    id: "16",
    nome: "Aula 16",
    desc: "artida automatica e manual com boia",
    rota: "Cmd16",
    emBreve: false,
  },
  {
    id: "17",
    nome: "Aula 17",
    desc: "Vantagens da parti - Estrela Triangulo",
    rota: "Cmd17",
    emBreve: false,
  },
  {
    id: "18",
    nome: "Aula 18",
    desc: "Diagrama - Partida Estrela Triangulo",
    rota: "Cmd18",
    emBreve: false,
  },
  {
    id: "19",
    nome: "Aula 19",
    desc: "Diagrama de potência",
    rota: "Cmd19",
    emBreve: false,
  },
  {
    id: "20",
    nome: "Aula 20",
    desc: "Estrela Triangulo - Unifilar",
    rota: "Cmd20",
    emBreve: false,
  },
  {
    id: "21",
    nome: "Aula 21",
    desc: "Diagrama - Arraque",
    rota: "Cmd21",
    emBreve: false,
  },
  {
    id: "22",
    nome: "Aula 22",
    desc: "Comando para caixa água",
    rota: "Cmd22",
    emBreve: false,
  },
  {
    id: "23",
    nome: "Aula 23",
    desc: "Diagrama para cancela",
    rota: "Cmd23",
    emBreve: false,
  },
  {
    id: "24",
    nome: "Aula 24",
    desc: "Partida com reversão e sinalizador",
    rota: "Cmd24",
    emBreve: false,
  },
  {
    id: "25",
    nome: "Aula 25",
    desc: "Partida direta sem selo",
    rota: "Cmd25",
    emBreve: false,
  },
  {
    id: "26",
    nome: "Aula 26",
    desc: "Partida Circuito em cascata",
    rota: "Cmd26",
    emBreve: false,
  },
  {
    id: "27",
    nome: "Aula 27",
    desc: "Contato de selo unifilar",
    rota: "Cmd27",
    emBreve: false,
  },
  {
    id: "28",
    nome: "Aula 28",
    desc: "Diagrma comando partida bombas intercaladas",
    rota: "Cmd28",
    emBreve: false,
  },
  {
    id: "29",
    nome: "Aula 29",
    desc: "Diagrama - Partida estrela triangulo",
    rota: "Cmd29",
    emBreve: false,
  },
  {
    id: "30",
    nome: "Aula 30",
    desc: "Partida com reversão e botão de emergência",
    rota: "Cmd30",
    emBreve: false,
  },
  {
    id: "31",
    nome: "Aula 31",
    desc: "Partida reversão com memoria",
    rota: "Cmd31",
    emBreve: false,
  },

  // ... adicione outros cursos conforme necessário
];

function Comando({ navigation }) {
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
            source={bgcomando}
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
    backgroundColor: "#487a86",
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

export default Comando;
