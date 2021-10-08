
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';


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
    console.log(
      'Duracion en segundos: ' +
        audio.getDuration() +
        'number of channels: ' +
        audio.getNumberOfChannels(),
    );
  },
);

const App = () => {
  const [playing, setPlaying] = useState();
  useEffect(() => {
    audio.setVolume(1);
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.playBtn} onPress={playPause}>
       
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f3640',
  },
  playBtn: {
    width: '50%',
    height:50,
    backgroundColor:'#c23616',
    justifyContent: 'center',
    alignItems: 'center',
  }

});


export default App;
