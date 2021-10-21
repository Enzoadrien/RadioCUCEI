import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Redes = () => {
  return(
    <LinearGradient colors={['orange', '#181818','#181818']} style={estilos.contenedor}>
      <View style={estilos.texcontenedor}>
        <Text style={estilos.texto}>SIGUENOS EN REDES SOCIALES</Text>
      </View>
      <View style={estilos.contenedordos}>
        <TouchableOpacity>
        <Ionicons name={"logo-facebook"} size={70} color="orange"  />
        </TouchableOpacity>
            
      </View>

    </LinearGradient>
);

}

const estilos = StyleSheet.create({
contenedor:{
    flex: 1,
},
texcontenedor:{
flex:1,
alignItems: 'center', 
justifyContent: 'center',
},
texto:{
fontSize: 23,
color: '#FCF7F6',
alignItems: 'center',
justifyContent: 'center',
},
contenedordos:{
  flex: 5,
  
},
});

export default Redes;