import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Fondo = () => {
    return(
        <LinearGradient colors={['orange', '#181818','#181818']} style={estilos.contenedor}>

        </LinearGradient>
    );

}

const estilos = StyleSheet.create({
    contenedor:{
        flex: 1,
    }
});

export default Fondo;