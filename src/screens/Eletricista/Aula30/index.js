import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';


function Aula30({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Queda de Tensão</Text>

    <Text style={styles.texto} >
    Conforme a norma NBR 5410:2004 - Instalações Elétricas de Baixa Tensão, item 6.2.7.2, em nenhum caso a queda de tensão nos circuitos terminais pode ser superior a 4%. No entanto, quedas de tensão maiores são permitidas para equipamentos com corrente de partida elevada, durante o período de partida, desde que dentro dos limites permitidos em suas normas respectivas.
    {"\n"}{"\n"}
Abaixo está a tabela de queda de tensão para produtos isolados em PVC 70ºC e temperatura ambiente de 30ºC, instalados conforme método de referência B1.
{"\n"}{"\n"}
Cálculo
Queda de Tensão (V) = Queda de tensão tabelada (V/A.Km) x corrente do circuito (A) x comprimento (Km).
{"\n"}
Queda de Tensão (%) = Queda de Tensão (V) / Tensão do Circuito (V) x 100
    </Text>
   

    <TouchableOpacity
                  style={styles.iconeCirculo}
                  onPress={() => navigation.navigate("Aula30Diagrama")}
                >

    <Image
        style={{height:230, width: null, marginTop:20, marginBottom:20}}
        source={require('../../../../assets/quadadetensao.webp')}  
    />
    </TouchableOpacity>
    <Text style={styles.texto} >
    Tabela de corrente em plena carga de motores CA - 60 hz
    

    </Text>
    <TouchableOpacity
                  style={styles.iconeCirculo}
                  onPress={() => navigation.navigate("Aula30Diagrama")}
                >
    <Image
        style={{height:380, width: null, marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tabelaquedadetensao2.webp')}  
    />
</TouchableOpacity>
</View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
    
  },
  scrollView:{
    margin:10
  },

  titulo:{
    fontSize: 32,
    fontWeight: 'bold',
    color:'#51AC42'
  },
  subTitulo:{
    fontSize: 24,
    marginTop: 20
  },
  texto:{
    fontSize: 18,
    marginTop: 20
  },
  imagem:{
    width: '100%',
    height: 250,
    marginTop: 20
  }
})

export default Aula30