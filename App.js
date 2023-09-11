import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button,View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DetalhesScreen from './src/screens/Detalhes'
import EletricistaScreen from './src/screens/Eletricista'
import CalculadoraCorrente from './src/screens/Calculos/CalcEletricia/PotenciaToCorrente'
import CalculadoraPotencia from './src/screens/Calculos/CalcEletricia/CorrenteToPotencia'
import CalculadoraBitolaCabo from './src/screens/Calculos/CalcEletricia/Bitola'
import CalculadoraDisjuntor from './src/screens/Calculos/CalcEletricia/CalcDisjuntor'


import EletricistaAula01 from './src/screens/Eletricista/Aula01';
import EletricistaAula02 from './src/screens/Eletricista/Aula02';
import EletricistaAula03 from './src/screens/Eletricista/Aula03';
import EletricistaAula04 from './src/screens/Eletricista/Aula04';
import EletricistaAula05 from './src/screens/Eletricista/Aula05';
import EletricistaAula06 from './src/screens/Eletricista/Aula06';
import EletricistaAula07 from './src/screens/Eletricista/Aula07';
import EletricistaAula08 from './src/screens/Eletricista/Aula08';
import EletricistaAula09 from './src/screens/Eletricista/Aula09';
import EletricistaAula10 from './src/screens/Eletricista/Aula10';
import EletricistaAula11 from './src/screens/Eletricista/Aula11';
import EletricistaAula12 from './src/screens/Eletricista/Aula12';
import EletricistaAula13 from './src/screens/Eletricista/Aula13';
import EletricistaAula14 from './src/screens/Eletricista/Aula14';
import EletricistaAula15 from './src/screens/Eletricista/Aula15';
import EletricistaAula16 from './src/screens/Eletricista/Aula16';
import EletricistaAula17 from './src/screens/Eletricista/Aula17';
import EletricistaAula18 from './src/screens/Eletricista/Aula18';
import EletricistaAula19 from './src/screens/Eletricista/Aula19';
import EletricistaAula20 from './src/screens/Eletricista/Aula20';
import EletricistaAula21 from './src/screens/Eletricista/Aula21';
import EletricistaAula22 from './src/screens/Eletricista/Aula22';
import EletricistaAula23 from './src/screens/Eletricista/Aula23';
import EletricistaAula24 from './src/screens/Eletricista/Aula24';
import EletricistaAula25 from './src/screens/Eletricista/Aula25';
import EletricistaAula26 from './src/screens/Eletricista/Aula26';
import EletricistaAula27 from './src/screens/Eletricista/Aula27';
import EletricistaAula28 from './src/screens/Eletricista/Aula28';
import EletricistaAula29 from './src/screens/Eletricista/Aula29';

import ComandoAula01     from './src/screens/Detalhes/CmdAula01';
import Cmd01 from './src/screens/Comando/Cmd01';
import Cmd02 from './src/screens/Comando/Cmd02';
import Comando from './src/screens/Comando';
import Cmd03 from './src/screens/Comando/Cmd03';
import Cmd03TabelaBotoeira from './src/screens/Comando/Cmd03/tabelabotoeira';

import Cmd04 from './src/screens/Comando/Cmd04';
import Cmd05 from './src/screens/Comando/Cmd05';
import Cmd06 from './src/screens/Comando/Cmd06';
import Sinaleirotabela from './src/screens/Comando/Cmd06/sinanaleirotabela';
import Cmd07 from './src/screens/Comando/Cmd07';
import Cmd08 from './src/screens/Comando/Cmd08';
import Cmd09 from './src/screens/Comando/Cmd09';
import Dg from './src/screens/Comando/Cmd09/dg';
import Dg2 from './src/screens/Comando/Cmd09/dg2';
import Dg3 from './src/screens/Comando/Cmd09/dg3';
import Cmd10 from './src/screens/Comando/Cmd10';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}options={{
          title: 'Escola Movel',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: false
        }} />
                <Stack.Screen name="Eletricista" component={EletricistaScreen}
        options={{
          title: 'Eletricista Residencial',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="CalculadoraCorrente" component={CalculadoraCorrente}
        options={{
          title: 'Conceitos elétricos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="CalculadoraPotencia" component={CalculadoraPotencia}
        options={{
          title: 'Conceitos elétricos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="CalculadoraBitolaCabo" component={CalculadoraBitolaCabo}
        options={{
          title: 'Conceitos elétricos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="CalculadoraDisjuntor" component={CalculadoraDisjuntor}
        options={{
          title: 'Conceitos elétricos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />
        
<Stack.Screen name="Aula01" component={EletricistaAula01}
        options={{
          title: 'Conceitos elétricos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />
   <Stack.Screen name="Detalhes" component={DetalhesScreen} 
        options={{
          title: 'Escola Movel',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: false
        }} />

<Stack.Screen name="Aula02" component={EletricistaAula02}
        options={{
          title: 'Ferramentas',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />
        <Stack.Screen name="Aula03" component={EletricistaAula03}
        options={{
          title: 'Alicate Amperimetro',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />
        <Stack.Screen name="Aula04" component={EletricistaAula04}
        options={{
          title: 'Medindo tensões elétricas',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula05" component={EletricistaAula05}
        options={{
          title: 'Padrão de cores cabos e fios',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula06" component={EletricistaAula06}
        options={{
          title: 'Disjuntores',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula07" component={EletricistaAula07}
        options={{
          title: 'QDC',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />


<Stack.Screen name="Aula08" component={EletricistaAula08}
        options={{
          title: 'DR (diferencial residual)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />
        <Stack.Screen name="Aula09" component={EletricistaAula09}
        options={{
          title: 'DPS (dispositivos de proteção contra surtos)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula10" component={EletricistaAula10}
        options={{
          title: 'DPS (QDC MONOFASICO DIAGRAMA)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Aula11" component={EletricistaAula11}
        options={{
          title: 'DPS (QDC BIFASICO DIAGRAMA)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula12" component={EletricistaAula12}
        options={{
          title: 'DPS (QDC TRIFASICO DIAGRAMA)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula13" component={EletricistaAula13}
        options={{
          title: 'DPS (QDC TRIFASICO DIAGRAMA - Predial)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula14" component={EletricistaAula14}
        options={{
          title: 'DPS (QDC TRIFASICO DIAGRAMA - Predial)',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />







<Stack.Screen name="Aula15" component={EletricistaAula15}
        options={{
          title: 'QDC Trifasico com IDR E DPS',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula16" component={EletricistaAula16}
        options={{
          title: 'Curva dos disjuntores',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula17" component={EletricistaAula17}
        options={{
          title: 'Disjuntor Motor',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula18" component={EletricistaAula18}
        options={{
          title: 'Interruptor Simples ',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula19" component={EletricistaAula19}
        options={{
          title: 'Interruptor 3 vias',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula20" component={EletricistaAula20}
        options={{
          title: 'Three Way',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />



<Stack.Screen name="Aula21" component={EletricistaAula21}
        options={{
          title: 'Four Way',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula22" component={EletricistaAula22}
        options={{
          title: 'Circuito Tomada',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula23" component={EletricistaAula23}
        options={{
          title: 'Circuito Tomada',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula24" component={EletricistaAula24}
        options={{
          title: 'Padrão de Tomada',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula25" component={EletricistaAula25}
        options={{
          title: 'Tipos de tomadas mais utilizados no mundo',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula26" component={EletricistaAula26}
        options={{
          title: 'Relé Fotoelétrico',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula27" component={EletricistaAula27}
        options={{
          title: 'Boia',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula28" component={EletricistaAula28}
        options={{
          title: 'Chuveiro Eletrico',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />

<Stack.Screen name="Aula29" component={EletricistaAula29}
        options={{
          title: 'Tabela Seção dos cabos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />  

<Stack.Screen name="Cmd01" component={Cmd01}
        options={{
          title: 'Tabela Seção dos cabos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />  

<Stack.Screen name="Cmd02" component={Cmd02}
        options={{
          title: 'Tabela Seção dos cabos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />  

<Stack.Screen name="Comando" component={Comando}
        options={{
          title: 'Tabela Seção dos cabos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />  

<Stack.Screen name="Cmd03" component={Cmd03}
        options={{
          title: 'Tabela Seção dos cabos',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />  

<Stack.Screen name="Cmd03TabelaBotoeira" component={Cmd03TabelaBotoeira}
        options={{
          title: 'Tabela cores botoeira',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  />  

<Stack.Screen name="Cmd04" component={Cmd04}
        options={{
          title: 'Contator',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Cmd05" component={Cmd05}
        options={{
          title: 'Temporizador',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Cmd06" component={Cmd06}
        options={{
          title: 'Sinaleiro',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Sinaleirotabela" component={Sinaleirotabela}
        options={{
          title: 'Tabela cores Sinaleiro',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Cmd07" component={Cmd07}
        options={{
          title: 'Sinaleiro',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Cmd08" component={Cmd08}
        options={{
          title: 'Réle falta de fase',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Cmd09" component={Cmd09}
        options={{
          title: 'Simbologia comando eletrico',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Dg" component={Dg}
        options={{
          title: 'Simbologia comando eletrico',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Dg2" component={Dg2}
        options={{
          title: 'Simbologia comando eletrico',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Dg3" component={Dg3}
        options={{
          title: 'Simbologia comando eletrico',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 

<Stack.Screen name="Cmd10" component={Cmd10}
        options={{
          title: 'Fechamento motor 6 pontas',
          headerStyle:{
            backgroundColor: '#1F9EAF'
          },
          headerTintColor: '#fff',
          // Tirar header
          // headerShown: false
        }}  /> 


      </Stack.Navigator>

      

    </NavigationContainer>
  );
}


