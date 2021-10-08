import React from 'react';
import {View, StyleSheet,TouchableOpacity, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';


const App = () => {
  return (
    <View style={estilos.contenedor}>
      <TouchableOpacity style={estilos.btnPlay} onPress={SoundPlayer.playUrl('http://s3.streammonster.com:8225/stream')}>
        <Text style={estilos.txPlay}>PLAY</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:'#2f3640',
    justifyContent:'center',
    alignItems:'center'
  },
  btnPlay:{
    width:'50%',
    height:'7%',
    backgroundColor:'#e84118',
    alignItems:'center',
    justifyContent:'center',
  },
  txPlay:{
    color:'#f5f6fa',
    fontSize: 25,
    fontWeight: 'bold',
  }

});

export default App;




