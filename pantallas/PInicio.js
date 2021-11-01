import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions,Image, ScrollView, Text} from 'react-native';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen'





const {width, height} = Dimensions.get('window');
//Categoria del sonido.
Sound.setCategory('Playback');
 var Dat = 0;


  var audio = new Sound(
    'http://s3.streammonster.com:8225/stream',
      null,
      error => {
        if (error) {
          console.log('No pudo cargar el sonido', error);
          return;
        }else{
          console.log("cargo el sonido");
          return ( SplashScreen.hide() );
          
        }
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
       return  <Ionicons name={"pause-circle-outline"} size={100} color="orange" />
    }else{
        return <Ionicons name={"play-circle-outline"} size={100} color="orange" />
    }
  }


  return (

    <LinearGradient colors={['orange', '#040404','#040404']} style={estilos.contenedor}>

      <View style={estilos.maincontenedor}>
        <View style={estilos.contenedorimagen}>
          <Image 
          style={estilos.logo}
          source={require('../src/imgs/Logo.png')}
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
  contenedorimagen:{
    width:'56%',
    height: '30%',
    marginBottom:100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-10%',
    marginBottom: '15%',

  },
  logo:{
    width: '85%',
    height: '85%',

  },
  barrcontenedor:{
    marginTop: '0%',
    marginBottom: '25%',
    width:  '70%',
    height: '13%',
    backgroundColor: 'red',
  },
  barrsuperior:{
    width: "100%",
    height: '45%', 
    backgroundColor: '#040404', 
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
    height: '45%', 
    backgroundColor: '#040404', 
    justifyContent: "space-between", 
    borderTopColor: "#FEFDFD", 
    borderTopWidth: 2.5, 
    flexDirection: "row",
  },
  playcontenedor:{
    flexDirection: 'row',
    width:'25%',
    justifyContent: 'space-between',
    marginTop: '-10%',
    justifyContent: 'center',
  },
  playBtn: {
    width: '50%',
    height: '20%',
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