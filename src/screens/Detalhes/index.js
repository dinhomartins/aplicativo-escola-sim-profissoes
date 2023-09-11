import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
const bg = {uri: 'https://i0.wp.com/s3.sa-east-1.amazonaws.com/static.inbep.com.br/wp-content/uploads/2022/10/17154128/image-2-e1666032133196.png?resize=600%2C370&ssl=1'};


function Datalhes({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View  style={styles.capaScreen}>

        <ImageBackground source={bg} resizeMode="cover" style={styles.capa}>
        </ImageBackground>
        </View>
        <Text style={styles.titulo} >Comando Eletrico</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Home')}
        /> */}
        {/* Aula 01 */}
        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('ComandoAula01')}>
          <Text style={styles.tituloAula} >Aula 01</Text>
          <Text style={styles.conteudoAula}>Conceitos elétricos</Text>
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

  export default Datalhes;