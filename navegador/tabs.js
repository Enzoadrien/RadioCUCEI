import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native;'
import Ionicons from 'react-native-vector-icons/Ionicons';

import inicioPantalla from "../pantallas/PInicio";
import tablasPantalla from "../pantallas/PTablas";
import redesPantall from "../pantallas/PRedes";
import appsPantalla from "../pantallas/PApps";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                borderRadius: 10,
                backgroundColor: '#181818',


            }
        }}
        >
            <Tab.Screen name="Inicio" component={inicioPantalla} 
            options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                  <Ionicons name={"musical-notes-outline"} size={30} color="orange" />
                ),
            }} />
            <Tab.Screen name="Horario" component={tablasPantalla}
            options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                  <Ionicons name={"time-outline"} size={30} color="orange" />
                ),
            }} />
            <Tab.Screen name="Redes" component={redesPantall}
            options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                  <Ionicons name={"logo-instagram"} size={30} color="orange" />
                ),
            }} />
            <Tab.Screen name="Apps" component={appsPantalla}
            options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                  <Ionicons name={"add-outline"} size={30} color="orange" />
                ),
            }} />
        </Tab.Navigator>
       
    );
}

export default Tabs;