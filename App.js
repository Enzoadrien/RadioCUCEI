
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions,Image, ScrollView, Text} from 'react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { STATEMENT_TYPES } from '@babel/types';




const {width, height} = Dimensions.get('window');
//Categoria del sonido.
Sound.setCategory('Playback');
 



var audio = new Sound(
'http://s3.streammonster.com:8225/stream',
  null,
  error => {
    if (error) {
      console.log('No pudo cargar el sonido', error);
      return;
    }
    // if loaded successfully
    
  },
);

const App = () => {
  const [playing, setPlaying] = useState();
  const [dato, setdato] = useState("-98%")

  const playPause = () => {
    if (playing) {
      audio.pause();
      setPlaying(false);
      setdato("-98%");
      console.log("entro en pause");
    } else {
      setPlaying(true);
      setdato(170);
      audio.play();
      console.log("entro en play");
    }
  };

  const btnplaPause = () => {
    if(playing){
       return  <Ionicons name={"pause-circle-outline"} size={80} color="orange" />
    }else{
        return <Ionicons name={"play-circle-outline"} size={80} color="orange" />
    }
  }


  return (

    <LinearGradient colors={['orange', '#181818','#181818']} style={estilos.contenedor}>
      <View style={estilos.maincontenedor}>
        <View style={estilos.contenedorimagen}>
          <Image 
          style={estilos.logo}
          source={require('./src/imgs/Logo.png')}
          />

        </View>
        <View style={estilos.barrcontenedor}>
        <View style={estilos.barrsuperior}>
        <Text style={estilos.bardatos}>0</Text>
        <Text style={estilos.bardatos}>|</Text>
        <Text style={estilos.bardatos}>20</Text>
        <Text style={estilos.bardatos}>|</Text>
        <Text style={estilos.bardatos}>60</Text>
        <Text style={estilos.bardatos}>|</Text>
        <Text style={estilos.bardatos}>80</Text>
        <Text style={estilos.bardatos}>|</Text>
        <Text style={estilos.bardatos}>100</Text>
      </View>
      <View style={estilos.barcentro}> 
       <View style={{width: 10, height: "100%", backgroundColor: "red", marginLeft: dato}}/>

      </View>
      <View style={estilos.barbajo}>
        
      </View>
          
        </View>

        <View style={estilos.playcontenedor}>
          
          <TouchableOpacity onPress={playPause}>
          {btnplaPause()}
          </TouchableOpacity>

        </View>
          

      </View>
      <View style={estilos.bajocontenedor}>
        <View style={estilos.iconcontenedor}>
        <TouchableOpacity style={{justifyContent: 'space-between', margin: 5}} >
          <Ionicons name={"time-outline"} size={45} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'space-between', margin: 5}} >
          <Ionicons name={"musical-notes-outline"} size={45} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'space-between',margin: 5}} >
          <Ionicons name={"logo-instagram"} size={45} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'space-between', margin: 5}} >
          <Ionicons name={"add-outline"} size={45} color="orange" />
          </TouchableOpacity>

        </View>
  
      </View>
      
    </LinearGradient>
   
      

      
    
  );
};


const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
   
    
  },
  maincontenedor:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bajocontenedor:{
    borderTopColor:'#393E46',
    borderTopWidth:2,
    width: '100%',
 

    
  },
  contenedorimagen:{
    width:200,
    height: 200,
    marginBottom:100,

  },
  logo:{
    width: '100%',
    height: '100%',

  },
  barrcontenedor:{
    width:  '70%',
    height: 85,
  },
  barrsuperior:{
    width: "100%",
    height: 35, 
    backgroundColor: "#1F1D1D", 
    justifyContent: "space-between", 
    borderBottomColor: "#FEFDFD", 
    borderBottomWidth: 5, 
    flexDirection: "row",
  },
  bardatos:{
    color: '#FAF9F9', 
    fontSize: 12,
  },
  barcentro:{
    width: "100%", 
    height: 15, 
    backgroundColor: "#666262",
    alignItems: "center", 
    borderLeftWidth: 5, 
    borderRightWidth: 5,
  },
  barbajo:{
    width: "100%", 
    height: 35, 
    backgroundColor: "#1F1D1D", 
    justifyContent: "space-between", 
    borderTopColor: "#FEFDFD", 
    borderTopWidth: 2.5, 
    flexDirection: "row",
  },
  playcontenedor:{
    flexDirection: 'row',
    width:'60%',
    justifyContent: 'space-between',
    marginTop: 15,
    justifyContent: 'center',
  },
  playBtn: {
    width: '50%',
    height:50,
    backgroundColor:'#f06c24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcontenedor:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

});


export default App;
