import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Card, Title, } from 'react-native-paper';
import Pizza from '../assets/pizzahome.png';
import Cheesepizza from '../assets/cheesypizza.png';
import Chickenpizza from '../assets/bbqchicken.png';
import Star from '../assets/star.png';
import Halfstar from '../assets/star-half-empty.png';
import leafpizza from '../assets/leafpizza.png';
import pepperpizza from '../assets/pepperpizza.png';





function Menu({ navigation }) {

  const nextpage = ((pizza,) => {
    navigation.navigate('cheesypizza' , {menuTitle: pizza} )

  })

  
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.image}>
          <Image source={Pizza} style={{ width: 350, height: 190 }} />


          <TouchableOpacity style={styles.btn} >

            <Text style={styles.text} >Most Popular</Text>

          </TouchableOpacity>

          <View style={styles.box}>
            <ScrollView horizontal={true}>
              <TouchableOpacity onPress={() =>navigation.navigate("cheesypizza",{pizza: "Cheesy Crust Pizza",image:require('../assets/cheesypizza.png')})}>
                <Card style={styles.card1}>
                  <Image source={Cheesepizza} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                  <Text style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold', fontSize: 14, marginLeft: 15
                  }} >Cheesy Crust Pizza
                  </Text>
                  <Text style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold', fontSize: 14, marginLeft: 10
                  }}> R85.99</Text>

                  <View style={styles.rating}>
                    <Image source={Star} style={{ width: 20, height: 15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                    <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                  </View>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>navigation.navigate("cheesypizza",{pizza:"Barbecue Chicken" ,image: require('../assets/bbqchicken.png') })}>
                <Card style={styles.card2} >
                  <Image source={Chickenpizza} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                  <Text style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold', fontSize: 14, marginLeft: 15
                  }} >Barbecue Chicken
                    R85.99</Text>

                  <View style={styles.rating}>
                    <Image source={Star} style={{ width: 20, height: 15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />

                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                    <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                  </View>
                </Card>
              </TouchableOpacity>
             

              
            </ScrollView>

            <ScrollView horizontal={true}>
              <TouchableOpacity  onPress={() =>navigation.navigate("cheesypizza",{pizza:"Leaf Nutrisystem Pizza", image: require('../assets/leafpizza.png') })}>
                <Card style={styles.card3}>
                <Image source={leafpizza} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                  <Text style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold', fontSize: 14, marginLeft: 15
                  }} >Leaf Nutrisystem Pizza
                    R79.90</Text>

                  <View style={styles.rating}>
                    <Image source={Star} style={{ width: 20, height: 15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />

                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                    <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>navigation.navigate("cheesypizza",{pizza: "Mediterranean Roasted Pepper Pizza",image: require('../assets/pepperpizza.png')})}>
                <Card style={styles.card4} >
                <Image source={pepperpizza} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                  <Text style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold', fontSize: 14, marginLeft: 15
                  }} >Mediterranean Roasted Pepper Pizza
                    R 70.99</Text>

                  <View style={styles.rating}>
                    <Image source={Star} style={{ width: 20, height: 15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />

                    <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                    <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                  </View>
                </Card>
              </TouchableOpacity>

             

             
            </ScrollView>

          </View>
        </View>




      </ScrollView>
    </View>

  )
}
export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 8,

  },
  image: {
    flex: 1,
    paddingLeft: 11,
    marginTop: 25
  },
  text: {

    fontWeight: '600',
    marginTop: 5,
    marginLeft: 5
  },
  btn: {
    backgroundColor: '#B20600',
    width: 100,
    height: 35,
    borderRadius: 10,
    marginTop: 25,
    textAlign: 'center'
  },

  card1: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20

  },
  card2: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20
  },
  card5: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20

  },
  card6: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20

  },

  card3: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20

  },
  card4: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20
  },
  card7: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20
  },
  card8: {
    width: 130,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 200,
    borderColor: '#B20600', borderWidth: 2,
    marginTop: 25,
    margin: 20
  },
  rating: {
    display: 'flex',

  },

});