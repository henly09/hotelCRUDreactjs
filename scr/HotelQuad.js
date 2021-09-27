import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  TouchableNativeFeedback, 
  Image,  
  SafeAreaView, 
  ImageBackground,
  Alert,
} from 'react-native';
// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import quad from '../assets/hotelroom/quad.jpg';
import bg from '../assets/bg.jpg';

export default function QuadScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={bg}/>

<Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'flex-start',
        top:60,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center',
        left: 20
      }}> ROOM </Text>
 
     <Image
     style={styles.imagebgsecond}
     source={quad}/>
     <Text
     style={styles.textimagebgsecond} 
     >QUAD ROOM</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > $60.00 /per night</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Designed with maximum flexibility and comfort, Quadruple Room offers 
       spacious and pleasant accommodation for a group of up to four persons, 
       with value-for-money guaranteed. Sized at 32 sqm, the room is equipped 
       with four single beds and comprehensive amenities for four persons, 
       allowing guests to unwind in the complete comfort and convenience.
       Media and Entertainment: Voice Mail,Satellite / Cable TV, LED TV. Refreshments room Coffee / Tea Making Facilities,
       Mini-bar, Bottled water{"\n"}
        </Text>

   </View>
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  
    imagebackground: {
      height: 800,
      width: 420,
      backgroundColor: 'black',
      position: 'absolute',
    },
    
    imagebgsecond: {
      borderColor: '#6c0c1c',
      borderWidth: 5,
      borderRadius: 13,
      height: 215,
      width: 360,
      alignSelf: 'center',
      top: 120
    },
    
    textimagebgsecond: {
           textAlign: 'center',
           alignItems: 'center', 
           position: 'absolute',
           top: 350,
           color: 'white',
           fontSize: 27,
           paddingTop: 3,
           paddingLeft: 10,
           paddingRight: 10,
           backgroundColor: '#6c0c1c',
           borderColor: '#6c0c1c',
           borderWidth: 3,
           borderRadius: 13,
           fontStyle: 'italic',
           margin: 5,
           fontWeight: 'bold'
    },
    
    textimagebgsecondonepointtwo: {
       textAlign: 'center',
       alignItems: 'center', 
       position: 'absolute',
       top: 360,
       color: 'white',
       fontSize: 15,
       paddingTop: 3,
       paddingLeft: 10,
       paddingRight: 10,
       backgroundColor: '#6c0c1c',
       borderColor: '#6c0c1c',
       borderWidth: 3,
       borderRadius: 13,
       fontStyle: 'italic',
       right: 5,
       margin: 5,
       fontWeight: 'bold'
    },
    
    textimagebgsecond2: {
           position: 'absolute',
           textAlign: 'justify', 
           color: 'white', 
           top: 420,
           fontSize: 15,
           paddingTop: 20,
           paddingLeft: 20,
           paddingRight: 20,
           backgroundColor: '#6c0c1c',
           borderColor: '#6c0c1c',
           borderWidth: 5,
           borderRadius: 13,
           fontStyle: 'italic',
           margin: 5,
           fontWeight: 'bold'
    },
    
    })