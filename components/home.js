
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import scooter from '../assets/delivery-scooter.png';
import takeout from '../assets/doggy-bag.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

function Home({ navigation }){
       const nextpage = (()=>{
     navigation.navigate('menu')
        
  })
  return(
    <View  style={styles.container}>
   <Text style={styles.heading}>
    Start your order
    </Text>
    <View style={styles.box}>


<View  style={styles.box1}>
   <Image source={scooter} style={{borderRadius: 20, width: 30, height: 30, marginLeft: 7,marginTop: 20}}/>
<Text style={styles.text1}>Delivery</Text>
</View>
<View  style={styles.box2}>
<Image source={takeout} style={{borderRadius: 20, width: 30,height: 30, marginLeft: 7,marginTop: 20}}/>
<Text style={styles.text2}>Take Out</Text>
</View>

</View>
    <Text  style={styles.heading1}> Today’s special</Text>
<TouchableOpacity  onPress={nextpage}>
<Image source={pic1} style={{ width: 250, height: 150 , top: 20}} />
</TouchableOpacity>
<View>
<Text  style={styles.heading2}> Your last orders</Text>
<TouchableOpacity  onPress={nextpage}>
<Image source={pic2} style={{ width: 250, height: 100 ,top: 20}} />
 </TouchableOpacity>
<TouchableOpacity  onPress={nextpage}>
<Image source={pic3} style={{ width: 250, height: 100 ,bottom: -40}} />
  </TouchableOpacity>
</View>


   
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
padding: 28,
  },
    heading:{
fontWeight: '600',
fontSize: 24,
lineHeight: 29,
color: '#000000',

  },
box:{

width: '100%',
height: 100,
backgroundColor: '#B20600',
  },
    box1:{
      width: 120,
height: 69,
left: 20,
top: 16,
backgroundColor: 'white',

  },
      box2:{
      width: 120,
height: 69,
left: 170,
top: -53,
backgroundColor: 'white',
  },
  text1:{

fontStyle: 'normal',
fontWeight: '600',
fontSize: 16,
marginTop: -28,
marginLeft: 51,
lineHeight: 19,
  },
    text2:{

fontStyle: 'normal',
fontWeight: '600',
fontSize: 16,
marginTop: -28,
marginLeft: 51,
lineHeight: 19,
  },
     heading1:{


fontStyle: 'normal',
fontWeight: '600',
fontSize: 16,
lineHeight: 19,
marginTop: 30

   },
        heading2:{

fontStyle: 'normal',
fontWeight: '600',
fontSize: 16,
lineHeight: 19,
marginTop: 30


   },
});
