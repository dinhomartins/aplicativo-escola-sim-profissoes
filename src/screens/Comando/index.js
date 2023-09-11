import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
const bg = {uri: 'https://i0.wp.com/s3.sa-east-1.amazonaws.com/static.inbep.com.br/wp-content/uploads/2022/10/17154128/image-2-e1666032133196.png?resize=600%2C370&ssl=1'};


const bgcomando = require('../../../assets/bgcomando.jpg');

function Comando({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View  style={styles.capaScreen}>

        <ImageBackground source={bgcomando} resizeMode="cover" style={styles.capa}>
        </ImageBackground>
        </View>
        <Text style={styles.titulo} >Comando Eletrico</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Home')}
        /> */}
        {/* Aula 01 */}
        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd01')}>
          <Text style={styles.tituloAula} >Aula 01</Text>
          <Text style={styles.conteudoAula}>Conceitos elétricos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd02')}>
          <Text style={styles.tituloAula} >Aula 02</Text>
          <Text style={styles.conteudoAula}>Motor elétrico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd03')}>
          <Text style={styles.tituloAula} >Aula 03</Text>
          <Text style={styles.conteudoAula}>BOTOEIRAS</Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd04')}>
          <Text style={styles.tituloAula} >Aula 04</Text>
          <Text style={styles.conteudoAula}>Contator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd05')}>
          <Text style={styles.tituloAula} >Aula 05</Text>
          <Text style={styles.conteudoAula}>Temporizador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd06')}>
          <Text style={styles.tituloAula} >Aula 06</Text>
          <Text style={styles.conteudoAula}>Sinaleiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd07')}>
          <Text style={styles.tituloAula} >Aula 07</Text>
          <Text style={styles.conteudoAula}>Botoeira de emergencia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd08')}>
          <Text style={styles.tituloAula} >Aula 08</Text>
          <Text style={styles.conteudoAula}>Réle falta de fase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd09')}>
          <Text style={styles.tituloAula} >Aula 09</Text>
          <Text style={styles.conteudoAula}>Simbologia unifilar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Cmd10')}>
          <Text style={styles.tituloAula} >Aula 10</Text>
          <Text style={styles.conteudoAula}>Motor 6 pontas </Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center'
    },
    capaScreen:{
      height: 200,
      width:'100%'
    },
    capa:{
      height:200,
      width: '100%'
    },
    titulo:{
      fontSize: 24,
      paddingBottom:20,
      paddingTop:20,
      textAlign: 'center'
    },
    boxAula:{
      width: '90%',
      height: 120,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1F9EAF',
      marginBottom: 20
    },
    tituloAula:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },
    conteudoAula:{
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      margin: 10
    }
    

  })

  export default Comando;