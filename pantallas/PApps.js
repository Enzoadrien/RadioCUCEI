import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';





const Redes = () => {

  return(
    <LinearGradient colors={['orange','#040404','#040404']} style={estilos.contenedor}>
      <View style={estilos.contenedoruno}>
      <View style={estilos.contenedorlogo}>
      <Image 
          style={estilos.logo}
          source={require('../src/imgs/Logo.png')}
          />
      </View>
      <View style={estilos.contenedorglo}>
      <View style={estilos.texcontenedor}>
      <Text style={estilos.texto}>APP CUCEI</Text>
      </View>
      <View style={estilos.texcontenedor2}>
        <Text style={estilos.texto2}>TE PUEDEN INTERESAR</Text>
      </View>
      <View style={estilos.iconoscontenedor}>
        <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=campuscucei.cuceimobile.cucei.udg.mx.campuscucei&hl=es_MX&gl=US')} style={estilos.boton}>
              <Image style={estilos.imagen} source={require('../src/imgs/cuceimovil.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.mx.udg.cucei.cuceimobile.app.carreracucei&hl=es_MX')} style={estilos.boton}>
          <Image style={estilos.imagen} source={require('../src/imgs/carrera.png')}/>
        </TouchableOpacity>
        

        
      </View>
      </View>
      
      
      
     </View>

    </LinearGradient>
);

}

const estilos = StyleSheet.create({
contenedor:{
    flex: 1,
    alignItems: 'center',
   

},
contenedoruno:{
  width: '90%',
  height: '50%',
  alignItems: 'center',
  marginTop:'40%'
},

contenedorlogo:{
  marginTop: '10%',
},
logo:{
  width:70,
  height:70,
  

},
contenedorglo:{
  width:'90%',
  height: '65%',
  justifyContent: 'center',
  alignItems: 'center',


},
texcontenedor:{
  width:'100%',
  height:'35%',
  marginTop:'-12%',
  alignItems:'center',
 

},
texcontenedor2:{
  width:'100%',
  height:'10%',
  fontFamily: 'Chosence Light',
  alignItems: 'center',
},
texto:{
fontSize: 60,
color: '#FCF7F6',
alignItems: 'center',
justifyContent: 'center',
fontFamily: 'Barlow-Medium'
},

texto2:{
fontSize: 19,
color: '#FCF7F6',
alignItems: 'center',
marginLeft: 5,
fontFamily: 'Barlow-MediumItalic'


},
iconoscontenedor:{
  width:'100%',
  height:70,
  padding: 5,
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop:'3%',
},
boton:{
width: '20%',
height:'85%',
justifyContent: 'center',
alignItems: 'center',
marginLeft: '5%',
}, 
imagen:{
  width: '90%',
  height: '100%',

},

});

export default Redes;