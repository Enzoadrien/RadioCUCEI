import React, {useEffect, useState} from 'react';
import { Text, View,StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';


Sound.setCategory('Playback');

var audioo = new Sound(
  'http://s3.streammonster.com:8225/stream',
    null,
    error => {
      if (error) {
        console.log('No pudo cargar el sonido', error);
        return;
      }else{
        console.log("cargo el sonido");
        return ;
        
      }
    },
  );


const Appsr = () => {
  const [numero,setNumero] = useState(0);
  const [playing, setPlaying] = useState();
  const [posicion, setPosicion] = useState();

  const playPause = () => {
    if (playing) {
      audioo.pause();
      setPlaying(false);
      setNumero(0);
      setPosicion(0);

      console.log("entro en pause");
    } else {
      setPlaying(true);
      setNumero(96.7);
      setPosicion(190);

      audioo.play();
      console.log("entro en play");
    }
  };

  const btnplaPause = () => {
    if(playing){
       return   <Image 
       style={estilos.boyonplay}
       source={require('../src/imgs/naranjaprendido.png')}
       />
    }else{
        return  <Image 
        style={estilos.boyonplay}
        source={require('../src/imgs/botonapagado.png')}
        />
    }
  }
  return (
    <View style={estilos.contenedor} >
      <View style={{width:300,height:30, marginTop: "-5%", flexDirection: 'row'}}>
      <Image 
          style={estilos.logo}
          source={require('../src/imgs/Logo.png')}
          />
          <Text style={{color: '#E0DDD9', marginTop:12, marginLeft:10, fontSize: 15}}>Radio CUCEI</Text>
      </View>
      <View style={estilos.dos}>
        <LinearGradient colors={['orange','#915403', '#040404']} style={estilos.tres}>
         <View style={estilos.linea}>
            <View style={estilos.cuatro}>
            <Text style={estilos.noventa}>90</Text>
            <Text style={estilos.cien}>100</Text>
          </View>
          <View style={estilos.contenedorlineas}>
            <Text style={estilos.texlinea}>|</Text>
            <Text style={estilos.texlinea}>|</Text>
            <Text style={estilos.texlinea}>|</Text>
            <Text style={estilos.texlinea}>|</Text>
          </View>
          <View style={estilos.contenedornumero}>
            <Text style={estilos.numero}>{numero}</Text>
            <Text style={estilos.letraMHZ}> MHz</Text>

          </View>
          <View style={estilos.contenedorbajolinea}>
            <Text style={estilos.texlinea}> | </Text>
            <Text style={estilos.lineasb}>| | | | | | | | | |</Text>
            <Text style={estilos.texlinea}> | </Text>
            <Text style={estilos.lineasb}>| | | | | | | | | |</Text>
            <Text style={estilos.texlinea}> | </Text>
            <Text style={estilos.lineasb}>| | | | | | | | | |</Text>
            <Text style={estilos.texlinea}> | </Text>
            <Text style={estilos.lineasb}>| | | | | | | | | |</Text>
            <Text style={estilos.texlinea}> | </Text>
            <Text style={estilos.lineasb}>| | | | | | | | | |</Text>
            <Text style={estilos.texlinea}> | </Text>
          

          </View>
          <View style={{backgroundColor: 'red',
                        width:3,
                        height: '92.7%',
                        marginTop: -223,
                        marginLeft:posicion,
                        }}>

          </View>

         </View>
         
        </LinearGradient>

      </View>

      <View style={estilos.botoncontenedor}>
        <TouchableOpacity onPress={playPause} style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
        {btnplaPause()}
        </TouchableOpacity>

      </View>

    </View>
   
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#040404',
    padding: 10,
    paddingTop:30,
  },
  logo:{
    width: '10%',
    height: '100%',

  },
  dos:{
    backgroundColor: 'red',
    width: '100%',
    height:150,
    marginTop: 10,
   
  },
  tres:{
    width: '100%',
    height:250,

    
  },
  cuatro:{
    width: '100%',
    height:50,
    borderBottomColor: '#E0DDD9',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  noventa:{
    fontSize: 23,
    paddingTop: 18,
    color: '#E0DDD9',
    marginLeft: -47,
  },
  cien:{
    fontSize: 23,
    paddingTop: 18,
    color: '#E0DDD9',
    marginRight: 48,


  },
  contenedorlineas:{
   // backgroundColor: 'red',
    height: 20,
    width: '100%',
    marginTop: -7,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  texlinea:{
    color: '#E0DDD9',
    fontSize: 16,
  },
  contenedornumero:{
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  numero:{
    color: '#E0DDD9',
    fontSize: 100,
  },
  letraMHZ:{
    color: '#E0DDD9',
    fontSize: 30,
    marginBottom: -50,
    marginRight: -60,

  },
  contenedorbajolinea:{
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '-1%',
    paddingRight: 5,
    
  },
  lineasb:{
    color: '#E0DDD9',
    fontSize: 12,
    marginTop: 5,
  },
  botoncontenedor:{
    alignItems: 'center',
    height: '25%',
    width: '50%',
    marginTop: '50%',
    marginLeft: '25%',
    justifyContent: 'center',

  },
  boyonplay:{
    width: '80%',
    height: '90%',
    
  },
  linearo:{
    backgroundColor: 'red',
    width:3,
    height: 10,
    marginTop: -223,
    marginLeft:0,

  }

  
});

export default Appsr;