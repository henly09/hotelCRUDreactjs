// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { View,Text, TouchableNativeFeedback, Image, ImageBackground,StyleSheet,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HotelTwin from './HotelTwin.js';
import HotelKing from './HotelKing.js';
import HotelQueen from './HotelQueen.js';
import HotelQuad from './HotelQuad.js';
import HotelTriple from './HotelTriple.js';
import HotelDouble from './HotelDouble';
import HotelSingle from './HotelSingle';

import single from '../assets/hotelroom/single.jpg';
import double from '../assets/hotelroom/double.jpg';
import triple from '../assets/hotelroom/triple.jpg';
import quad from '../assets/hotelroom/quad.jpg';
import queen from '../assets/hotelroom/queen.jpg';
import king from '../assets/hotelroom/king.jpg';
import twin from '../assets/hotelroom/twin.jpg';
import hotelbg2 from '../assets/hotelbg2.gif';

function HotelScreen({ navigation }) {
    return (
       <SafeAreaView>
        <View>
        <ImageBackground
                   opacity={0.9}
                   style={styles.imagebackground}
                   source={hotelbg2}/>
       </View>

       <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'flex-start',
        top:40,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center',
        left: 20
      }}> ROOMS  </Text>

       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('Single')}>    
           <Image 
           style={styles.hotellogo1}
           source={single}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.navigate('Double')}>
           <Image 
          style={styles.hotellogo2}
           source={double}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('Triple')}> 
           <Image 
           style={styles.hotellogo1}
           source={triple}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.navigate('Quad')}> 
           <Image 
           style={styles.hotellogo2}
           source={quad}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('Queen')}>
           <Image 
            style={styles.hotellogo1}
           source={queen}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.navigate('King')}>
           <Image style={styles.hotellogo2}
           source={king}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('Twin')}>
           <Image 
           style={styles.hotellogo1}
           source={twin}/>
       </TouchableNativeFeedback>
       </View>
       </SafeAreaView>
     );
   }

const Stack = createNativeStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
      <Stack.Navigator initialRouteName="HotelScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="HotelScreen" component={HotelScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Twin" component={HotelTwin} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="King" component={HotelKing} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Queen" component={HotelQueen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Quad" component={HotelQuad} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Triple" component={HotelTriple} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Double" component={HotelDouble} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Single" component={HotelSingle} options={{ cardStyleInterpolator: forFade }}/>
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  
  hotellogo1: {
    borderWidth: 3,
    borderColor: '#6c0c1c',
    height: 150, 
    width: 160,
    marginRight: 13,
    margin: 2, 
    borderRadius: 15, 
    bottom: 25 ,
  }, 
  
  hotellogo2: {
    borderWidth: 3,
    borderColor: '#6c0c1c',
    height: 150, 
    width: 160,
    marginLeft: 13,
    margin: 2, 
    borderRadius: 15, 
    bottom: 25 
  },
  
  arrangement: {
    flexDirection: 'row', 
    justifyContent: 'center',
    top: 115
  },
  
  imagebackground: {
    height: 800,
    width: 500,
    backgroundColor: 'black',
    position: 'absolute',
  },
  
  })
