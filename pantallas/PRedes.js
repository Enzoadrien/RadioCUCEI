import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ioniconss from 'react-native-vector-icons/FontAwesome';


const ExternalLinkBtn = (props) => {
  return <Button
            onPress={() => {
                Linking.openURL(props.url)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('fallo al abrir la pagina')
                })}}
          />
}

const Redes = () => {

  return(
    <LinearGradient colors={['orange','#040404','#040404']} style={estilos.contenedor}>
      <View style={estilos.contenedorlogo}>
      <Image 
          style={estilos.logo}
          source={require('../src/imgs/Logo.png')}
          />
      </View>
      <View style={estilos.texcontenedor}>
      <Text style={estilos.texto}>SIGUENOS</Text>
        <Text style={estilos.texto2}>EN  NUESTRAS   REDES   SOCIALES</Text>
      </View>
      <View style={estilos.iconoscontenedor}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/RadioCUCEI')}>
        <Ionicons name={"logo-facebook"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/RadioCUCEIFM')}>
        <Ionicons name={"logo-twitter"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/user/radiocuceifm/videos')}>
        <Ionicons name={"logo-youtube"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/user/radiocuceifm/videos')}>
        <Ionicons name={"logo-twitter"} size={50} color='#FCF7F6' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/RadioCucei/')}>
        <Ionicons name={"logo-instagram"} size={50} color='#FCF7F6' />
        </TouchableOpacity>

        
      </View>
      
      
      
     

    </LinearGradient>
);

}

const estilos = StyleSheet.create({
contenedor:{
    flex: 1,
    alignItems: 'center',

},
contenedorlogo:{
  marginTop: '40%',
},
logo:{
  width:70,
  height:70,
  

},
texcontenedor:{
  width:'90%',
  height:140,
  padding: 5,
  fontFamily: 'Chosence Light',
 

},
texto:{
fontSize: 65,
color: '#FCF7F6',
alignItems: 'center',
justifyContent: 'center',
fontFamily: 'Chosence Light',
},

texto2:{
fontSize: 19,
color: '#FCF7F6',
alignItems: 'center',
marginLeft: 5,

fontFamily: 'Chosence Light',


},
iconoscontenedor:{
  width:'88%',
  height:70,
  padding: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
}

});

export default Redes;