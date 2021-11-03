import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ioniconss from 'react-native-vector-icons/FontAwesome';




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
      <Text style={estilos.texto}>SIGUENOS</Text>
      </View>
      <View style={estilos.texcontenedor2}>
        <Text style={estilos.texto2}>EN  NUESTRAS   REDES   SOCIALES</Text>
      </View>
      <View style={estilos.iconoscontenedor}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/RadioCUCEI')} style={estilos.boton}>
        <Ionicons name={"logo-facebook"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/RadioCUCEIFM')} style={estilos.boton}>
        <Ionicons name={"logo-twitter"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/user/radiocuceifm/videos')} style={estilos.boton}>
        <Ionicons name={"logo-youtube"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://soundcloud.com/radiocuceifm')} style={estilos.boton}>
        <Ioniconss name={"soundcloud"} size={45} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/RadioCucei/')} style={estilos.boton}>
        <Ionicons name={"logo-instagram"} size={50} color='#FCF7F6' />
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
fontSize: 63,
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
  justifyContent: 'space-between',
  marginTop:'3%',
},
boton:{
width: '20%',
height:'85%',
justifyContent: 'center',
alignItems: 'center',
}

});

export default Redes;