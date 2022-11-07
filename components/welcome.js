import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

function Frontpage({ navigation }) {
  
   const nextpage = (()=>{
     navigation.navigate('secondpage')
        
        
  })
 
  return (
    <View style={styles.container}>
   

      <TouchableOpacity style={styles.btn} onPress={nextpage}>

 
   <Image source={logo} style={{ width: 300, height: 189 }} />

    </TouchableOpacity>
    
    </View>
  );
}

export default Frontpage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  borderColor:  '#B20600 '
  },


});