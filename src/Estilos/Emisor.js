import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TCararcteres = (props) => {
    return(
        <Text style={estilos.textonumeros}>{props.caracter}</Text>
    );
    
}


const Emisor = (props) => {
    return(
        <LinearGradient colors={['orange', '#a36a00','#573800']} style={estilos.contenedorbarra}>
        <View style={estilos.basuperior}>
        <TCararcteres caracter='0' />
        <TCararcteres caracter='10' />
        <TCararcteres caracter='20' />
        <TCararcteres caracter='30' />
        <TCararcteres caracter='40' />
        <TCararcteres caracter='50' />
        <TCararcteres caracter='60' />
        <TCararcteres caracter='70' />
        <TCararcteres caracter='80' />
        <TCararcteres caracter='90' />
        <TCararcteres caracter='100' /> 
        </View>
        <View style={estilos.lineassupe}>
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='|' />
        <TCararcteres caracter='   |' />
          </View>
          <View style={estilos.centro}>
            <Text style={estilos.textonum}>{props.tenumero}</Text>
            <Text style={estilos.MHz}>MHz</Text>
          </View>
          <View style={estilos.barbajo}>
          <TCararcteres caracter='|' />
          <TCararcteres caracter='   |' />
          <TCararcteres caracter='|' />
          <TCararcteres caracter='|' />
          <TCararcteres caracter='|' />
          </View>
          <View style={{backgroundColor: '#f61c04', width: '1%', height: '100%', marginTop: '-22%', marginLeft:props.posicion}}>

          </View>
        </LinearGradient>


    );
}

const estilos = StyleSheet.create({
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
})
export default Emisor;