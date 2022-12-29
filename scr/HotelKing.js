import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';

import king from '../assets/hotelroom/king.jpg';
import bg from '../assets/bg.jpg';

export default function KingScreen() {
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
     source={king}/>
     <Text
     style={styles.textimagebgsecond} 
     >KING ROOM</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > $80.00 /per night</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Room size 29 sqm. Fitted with a king-size bed, this air-conditioned 
       room features a flat-screen cable TV, a chiller, safe and a seating 
       area. The private bathroom includes hot/cold shower facilities and 
       free toiletries.Complimentary wifi access,Coffee and Tea Maker,
       Dental Kit, Safety deposit box, Toiletries, Slippers, Mini-bar, Pool Access
       and Sauna, Gym Access
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