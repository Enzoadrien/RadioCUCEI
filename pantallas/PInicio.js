import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions,Image, BackHandler, Text} from 'react-native';
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
  const [dato, setdato] = useState('1%');
  const [estacion, setEstacion] = useState(0);


  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  const playPause = () => {
    if (playing) {
      audio.pause();
      setPlaying(false);
      setdato('1%');
      setEstacion(0);
      console.log("entro en pause");
    } else {
      setPlaying(true);
      setdato('92%');
      setEstacion(96.7);
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
        
        <LinearGradient colors={['orange', '#a36a00','#573800']} style={estilos.contenedorbarra}>
          <View style={estilos.basuperior}>
            <Text style={estilos.textonumeros}>0</Text>
            <Text style={estilos.textonumeros}>10</Text>
            <Text style={estilos.textonumeros}>20</Text>
            <Text style={estilos.textonumeros}>30</Text>
            <Text style={estilos.textonumeros}>40</Text>
            <Text style={estilos.textonumeros}>50</Text>
            <Text style={estilos.textonumeros}>60</Text>
            <Text style={estilos.textonumeros}>70</Text>
            <Text style={estilos.textonumeros}>80</Text>
            <Text style={estilos.textonumeros}>90</Text>
            <Text style={estilos.textonumeros}>100</Text>
          </View>
          <View style={estilos.lineassupe}>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>    |</Text>
          </View>
          <View style={estilos.centro}>
            <Text style={estilos.textonum}>{estacion}</Text>
            <Text style={estilos.MHz}>MHz</Text>

          </View>

          <View style={estilos.barbajo}>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>  |</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
            <Text style={estilos.textonumeros}>|</Text>
          </View>
          <View style={{backgroundColor: '#f61c04', width: '1%', height: '100%', marginTop: '-22%', marginLeft:dato}}>

          </View>

        </LinearGradient>

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
  contenedorbarra:{
    marginTop: '-5%',
    marginBottom: '20%',
    width: '85%',
    height: '10%',
    borderRadius: 10,

  },
  basuperior:{
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,

  },
  textonumeros:{
    fontSize:10,
  },
  lineassupe:{
    marginTop: '-1%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  centro:{
    width: '20%',
    height: '50%',
    marginLeft: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textonum:{
    fontSize:25,

  },
  MHz:{
    marginTop: '10%',
   fontSize:15,
  },
  barbajo:{
    width: '100%',
    height: '20%',
    marginTop: '-1%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  

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