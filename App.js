import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Frontpage from './components/welcome';
import   Secondpage from  './components/onbording';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';
import Menu from './components/menu';
import Form from './components/form';
import Closing from './components/closingPage';
import Cheesypizza from './components/cheesypizza';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="frontpage" component={Frontpage} />
    <Stack.Screen name="secondpage" component={Secondpage} />
    <Stack.Screen name="signup" component={Signup} />
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="menu" component={Menu} />
    <Stack.Screen name="cheesypizza" component={Cheesypizza} />
    <Stack.Screen name="form" component={Form} />
    <Stack.Screen name="closing" component={Closing} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
