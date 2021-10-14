
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions,Image} from 'react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

  useEffect(() => {
    audio.setVolume(0);
    return () => {
      audio.release();
    };
  }, []);
  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play(success => {
        if (success) {
          setPlaying(false);
          console.log('terminó de reproducir con éxito');
        } else {
          setPlaying(false);
          console.log('la reproducción falló debido a errores de decodificación de audio');
        }
      });
    }
  };


  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.maincontenedor}>
        <View style={estilos.contenedorimagen}>
          <Image 
          style={estilos.logo}
          source={require('./src/imgs/Logo.png')}
          />

        </View>
        <View>
          <Slider 
          style ={estilos.volumen}
          minimumValue={0}
          maximunValue={100}
          step ={0.1}
          thumbTintColor="orange"
          minimumTrackTintColor="orange"
          maximumTrackTintColor="#FFD369"
          onSlidingComplete={()=>{}} />
        </View>

        <View style={estilos.playcontenedor}>
          
          <TouchableOpacity onPress={playPause}>
            <Ionicons name={   "ios-pause-circle"} size={80} color="orange" />
          </TouchableOpacity>

        </View>
          

      </View>
      <View style={estilos.bajocontenedor}>
      
  
      </View>
      
    </SafeAreaView>
   
      

      
    
  );
};


const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#242424',
    
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
    alignItems: 'center',
    paddingVertical:35,
  },
  contenedorimagen:{
    width:250,
    height: 250,
    marginBottom:100,

  },
  logo:{
    width: '100%',
    height: '100%',

  },
  volumen:{
    width: 300,
    height: 40,
    marginTop:-50,
    flexDirection: 'row',

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
  }


});


export default App;
