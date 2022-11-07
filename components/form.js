import { Image, StyleSheet, Text, View,TouchableOpacity,TextInput  } from 'react-native';
import * as React from 'react';
import logo from '../assets/logo.png';
import { db } from './configFile/config'
import { Route } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
function Form ({navigation , route}){
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [suburd, setSuburd] = React.useState('');

     const order =  async () => {
       
        try {
            const docRef = await addDoc(collection(db, "users"), {
              name:name,
              number:number,
              street:street,
              suburd: suburd,
              pizza: route.params.pizza,
              drinks: route.params.drinks,
              Pizzasize: route.params.pizzaSize,
              price: route.params.price
              
             
            });
            navigation.navigate('closing')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
     
      };

    return(
        
        <View style={styles.container}>

<Image source={logo} style={{ height: 170,width: '100%', }} />

<Text  style={styles.header}>YOUR PERSONAL DETAILS</Text>

 <TextInput    placeholder="  enter your fullname " style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 12,
          margin: 10,
          overflow: 'hidden',
          background: '#F0F0F0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#B20600', borderWidth: 1
        }} onChangeText={text => setName(text)}
        value={name}/>
         
         <TextInput    placeholder="  enter your number" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginLeft: 12,
          overflow: 'hidden',
          background: '#F0F0F0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#B20600', borderWidth: 1
        }}  onChangeText={text => setNumber(text)}
        value={number}/>
          
         <TextInput    placeholder="  enter your Street" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginLeft: 12,
          overflow: 'hidden',
          background: '#F0F0F0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#B20600', borderWidth: 1
        }} onChangeText={text => setStreet(text)}
        value={street}
          />
       
        <TextInput    placeholder="  enter your Suburb" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginLeft: 12,
          overflow: 'hidden',
          background: '#F0F0F0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#B20600', borderWidth: 1
        }} onChangeText={text => setSuburd(text)}
        value={suburd}/>

<TouchableOpacity style={styles.btn} onPress={order}>

<Text style={styles.btntext}>Add</Text >


</TouchableOpacity>
        </View>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
        backgroundColor:'#fff',
      },
    lable: {
        margin: 15,
        fontSize: 15,
        fontWeight: '500',
      },
      header:{
        width:'80%',
height:'15%',
fontSize:27,
fontWeight:'500',
color:'#B20600',
left: -20,
margin:10,
      },
      btn: {
        marginTop: 12,
        backgroundColor: '#B22727',
        width: 150,
        height: 40,
        marginLeft: 15,
        paddingTop: 20,
        borderRadius: 50,
        color: 'white'
      },
      btntext: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: -15,
        lineHeight: 29,
        color: '#fff'
      }
    });