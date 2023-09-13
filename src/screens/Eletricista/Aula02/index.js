import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function Aula02({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >

    <Text style={styles.titulo} >Ferramentas</Text>

<Text style={styles.titulo} >1 - Kit chaves</Text>
    <Image
        style={styles.imagem}
        source={require('../../../../assets/kitChaves.jpg')}  />

<Text style={styles.titulo} >2 Alicates de diversos tipos</Text>
    <Image
        style={{height:500, width: '100%'}}
        source={require('../../../../assets/alicates.jpg')}  />

<Text style={styles.titulo} >3. Multímetro</Text>
    <Image
        style={{height:300, width: '100%'}}
        source={require('../../../../assets/multimetro.jpg')}  />

<Text style={styles.titulo} >4. alicate amperimetro</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/amperimetro.jpg')}  />

<Text style={styles.titulo} >5. Ferro de solda</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/ferrodesolda.jpg')}  />

<Text style={styles.titulo} >6. Chave de teste</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/chaveteste.jpg')}  />

<Text style={styles.titulo} >7. Detector De Fase Caneta Teste Bip Sonoro</Text>
    <Image
        style={{height:453, width:82}}
        source={require('../../../../assets/detectortensao.jpg')}  />

<Text style={styles.titulo} >7. Detector De Fase Caneta Teste Bip Sonoro</Text>
    <Image
        style={{height:250, width: '100%'}}
        source={require('../../../../assets/alicatedecapador.jpg')}  />

<Text style={styles.titulo} >7. Detector De Fase Caneta Teste Bip Sonoro</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/alicate.jpg')}  />

   </View>




   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
    
  },
  scrollView:{
    margin: 10
  },

  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#51AC42',
    marginTop: 40,
    marginBottom: 20
  },
  subTitulo:{
    fontSize: 18,
    marginTop: 20
  },
  texto:{
    fontSize: 14,
    marginTop: 20
  },
  imagem:{
    width: '100%',
    height: 250,
    marginTop: 20
  }
})

export default Aula02