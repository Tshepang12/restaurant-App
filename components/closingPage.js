import { Image, StyleSheet, Text, View,TouchableOpacity,TextInput  } from 'react-native';
import logo from '../assets/logo.png';

function Closing(){
    return(
        <View style={styles.container}>
<Image source={logo} style={{ height: 170,width: '100%',marginTop: -150,margin: 20 }}/>
<View>
            <Text style={styles.header}>Thank you</Text>

            <Text style={styles.paragraph}>Your order was successfully Placed !!!</Text>
            </View>
        </View>
    )
}
export default Closing;
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      flex: 1
    },
    header:{
        fontWeight: 'bold',
        fontSize: 50,
    },

});