

import * as React from 'react';

import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from './configFile/config';


function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation()

  const login = () => {
    navigation.navigate('login');
  };


  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
       navigation.replace("home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    
    createUserWithEmailAndPassword(auth ,email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      
      alert=('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
}



  return (
    <View style={styles.container}>

      <Text style={styles.text}>Signup</Text>
      <View style={styles.box}>

        <Text  style={styles.lable}>Email</Text>
        <TextInput    placeholder="  enter email"  onChangeText={(email) => setEmail(email)} style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 12,
          overflow: 'hidden',
          background: '#F0F0F0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#B20600', borderWidth: 1
        }} />


        <Text style={styles.lable}>Create new password</Text>

        <TextInput onChangeText={(password) => setPassword(password)} placeholder="  enter Password" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 12,
          overflow: 'hidden',
          background: '#F0F0F0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#B20600', borderWidth: 1
        }} />

        <Text style={styles.paragraph}>Password may contain only lowercase,uppercase lettters and numbers,nd be at leasr 6 characters long </Text>
        <Text style={styles.paragraph}>Already have an account ? </Text>

        <TouchableOpacity onPress={login}>

          <Text style={styles.text2}>Login</Text>


        </TouchableOpacity>



        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>

          <Text style={styles.btntext}>Signup</Text >


        </TouchableOpacity>
      </View>

    </View>
  )
}
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  box: {
    justifyContent: 'center'
  },

  text: {

    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 35,
    lineHeight: 48,
    textAlign: 'center',
    margin: 25
  },
  lable: {
    margin: 15,
    fontSize: 15,
    fontWeight: '500',
  },
  paragraph: {
    margin: 15,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  text2: {

    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 48,
    color: '#B22727',
    marginLeft: 150

  },
  btn: {
    marginTop: 12,
    backgroundColor: '#B22727',

    width: 150,
    height: 40,
    marginLeft: 99,
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
    fontFamily: 'Inria Serif',
    color: '#fff'


  }



});