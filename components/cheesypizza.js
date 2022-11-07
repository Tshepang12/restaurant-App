import * as React from 'react';
import { Card, Title, } from 'react-native-paper';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Cheesepizza from '../assets/cheesypizza.png';
import pizzaicon from '../assets/eights.png';
import Applejuice from '../assets/applejuice.png';
import Orangejuice from '../assets/orange.png';
import Star from '../assets/star.png';
import Halfstar from '../assets/star-half-empty.png';
import leafpizza from '../assets/leafpizza.png';
import pepperpizza from '../assets/pepperpizza.png';
import Coke from '../assets/coke.png';
import Cranberry from '../assets/cranberry.png'
import { useState } from 'react';

function Cheesypizza({ navigation, route }) {

    const [pizzaSize, setpizzaSize] = useState({ size: "", price: "" });
    const [price, setPrice] = useState('')

    const [drinks, setDrinks] = useState('')



    const nextpage = (() => {
        navigation.navigate('form', { pizza: route.params.pizza, drinks: drinks, pizzaSize: pizzaSize.size, price:pizzaSize.price })
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={route.params.image} style={{ width: 385, height: 200 }} />





                <Text style={styles.heading}>{route.params.pizza}</Text>

                {pizzaSize.price == '' ?
                    <View>
                        <View style={styles.pricebox}>
                            <Text style={styles.price}>R85.99</Text>
                        </View>

                    </View> :

                    <View>
                        <View style={styles.pricebox}>
                            <Text style={styles.price}>{pizzaSize.price}</Text>
                        </View>
                    </View>}

                <Text style={styles.paragraph}>Offering the best of them all .Order yours and have a brigher day its made with love .Fresh out of the oven !! </Text>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={() => setpizzaSize({ size: "SIZE L", price: "R 85.99" })}>
                        <Card style={styles.card9}>
                            <Image source={pizzaicon} style={{ width: 80, height: 80, marginLeft: 10 }} />
                            <Text style={styles.sizetext}>Size L</Text>
                        </Card>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setpizzaSize({ size: "SIZE M", price: "R 65.99" })}>
                        <Card style={styles.card10}>
                            <Image source={pizzaicon} style={{ width: 80, height: 80, marginLeft: 10 }} />
                            <Text style={styles.sizetext}>Size M</Text>
                        </Card>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setpizzaSize({ size: "SIZE M", price: "R 55.99" })}>
                        <Card style={styles.card11}>
                            <Image source={pizzaicon} style={{ width: 80, height: 80, marginLeft: 10 }} />
                            <Text style={styles.sizetext}>Size S</Text>
                        </Card>
                    </TouchableOpacity>
                </ScrollView>

                <Text style={styles.text}>With drinks ?</Text>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={() => setDrinks("Apple Juice")} >
                        <Card style={styles.card3} >
                            <Image source={Applejuice} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                            <Text style={{
                                fontFamily: 'Inter',
                                fontWeight: 'bold', fontSize: 14, marginLeft: 15
                            }} >Apple Juice
                                R12 + MEAL</Text>
                            <View style={styles.rating} >
                                <Image source={Star} style={{ width: 20, height: 15 }} />
                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />

                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                                <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDrinks("Orange Juice")}>
                        <Card style={styles.card4} >
                            <Image source={Orangejuice} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                            <Text style={{
                                fontFamily: 'Inter',
                                fontWeight: 'bold', fontSize: 14, marginLeft: 15
                            }} >Orange Juice
                                R12 + MEAL</Text>
                            <View style={styles.rating}>
                                <Image source={Star} style={{ width: 20, height: 15 }} />
                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />

                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                                <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDrinks("CranBerry Juice")}>
                        <Card style={styles.card7}>
                            <Image source={Cranberry} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                            <Text style={{
                                fontFamily: 'Inter',
                                fontWeight: 'bold', fontSize: 14, marginLeft: 15
                            }} >CranBerry Juice
                                R15 + MEAL</Text>
                            <View style={styles.rating}>
                                <Image source={Star} style={{ width: 20, height: 15 }} />
                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 20, marginTop: -15 }} />
                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 40, marginTop: -15 }} />

                                <Image source={Star} style={{ width: 20, height: 15, marginLeft: 60, marginTop: -15 }} />
                                <Image source={Halfstar} style={{ width: 20, height: 15, marginLeft: 80, marginTop: -15 }} />
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDrinks("Coca-Cola")}>
                        <Card style={styles.card8} >
                            <Image source={Coke} style={{ borderRadius: 20, width: 100, height: 120, marginLeft: 10 }} />
                            <Text style={{
                                fontFamily: 'Inter',
                                fontWeight: 'bold', fontSize: 14, marginLeft: 15
                            }} >Coca-Cola
                                R15 + MEAL</Text>
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
                <TouchableOpacity style={styles.btn} onPress={nextpage}>
                    <Text style={styles.btntext}> Proceed </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Cheesypizza
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 21,
        fontWeight: 'bold',
        lineHeight: 20,
        margin: 20
    },
    pricebox: {
        width: 100,
        backgroundColor: '#B20600',
        height: 55,
        marginLeft: 258,
        marginTop: -55,
        borderRadius: 20
    },
    price: {
        textAlign: 'center',
        marginTop: 15,
        color: 'white',
        fontWeight: 'bold'

    },
    paragraph: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 19,
        width: 355,
        margin: 15

    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    card9: {
        width: 100,
        backgroundColor: '#fff',
        height: 110,
        borderColor: '#B20600', borderWidth: 2,
        margin: 10


    },
    card10: {
        width: 100,
        backgroundColor: '#fff',
        height: 110,
        borderColor: '#B20600', borderWidth: 2,
        margin: 10


    },
    card11: {
        width: 100,
        backgroundColor: '#fff',
        height: 110,
        borderColor: '#B20600', borderWidth: 2,
        margin: 10
    },
    sizetext: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginLeft: 26
    },
    btn: {
        backgroundColor: '#B20600',
        width: 120,
        height: 55,
        borderRadius: 15,
        textAlign: 'center',
        marginLeft: 118,
        marginBottom: 70


    },
    btntext: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginLeft: 5,
        marginTop: 10
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

});