import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navegador/tabs';
import SplashScreen from 'react-native-splash-screen'
import Sound from 'react-native-sound';




const App = () => {
 
  
  useEffect(()=> {
    
    SplashScreen.hide()
  },[])
  
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;