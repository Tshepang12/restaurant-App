import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import pizza from '../assets/pizza.png';

function Secondpage({ navigation }){
       const nextpage = (()=>{
     navigation.navigate('signup')
        
      

  })
         const nextpage1 = (()=>{
     navigation.navigate('login')
        
        
  })
  return(
    <View  style={styles.container} >
    <View style={styles.box}>

   <Image source={ pizza } style={{ width: 200, height: 199,borderRadius: 215 ,marginLeft: 128,marginTop: -60}} />  

    <Text style={styles.text}>Find the world best 
 <Text style={{color: '#B22727'}}> Pizza</Text> for you!</Text>

 <Text style={styles.paragraph}>people dissapoint,but pizza never does,all you nee is love and a pizza.</Text>


    </View>

      <TouchableOpacity style={styles.btn} onPress={nextpage} >
<Text style={styles.btntext}>Sign Up</Text>
    </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={nextpage1 }>
<Text style={styles.btntext}>Login</Text>
    </TouchableOpacity>
    
    </View>
  )
}
export default Secondpage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
width: '85%',
backgroundColor: 'white',
height: 523,
borderRadius: 35

  },
  text:{

fontStyle: 'normal',
fontWeight: '600',
fontSize: 35,
lineHeight: 48,
width: 212,
marginLeft: 20,
margin: '5%'
  },
  paragraph:{
color: '#8C8C8C',

fontStyle: 'normal',
fontWeight: '400',
fontSize: 20 ,
lineHeight: 24,
marginLeft: 20,


  },
    btn:{
    marginTop:5,
    backgroundColor: 'white',
    width: 190,
    height: 40,
    marginLeft: 15,
    borderRadius: 50,

  },
  btntext:{

fontStyle: 'normal',
fontWeight: '600',
fontSize: 20,
lineHeight: 29,
textAlign: 'center',
color:'black'
  }



});