import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';


import twin from '../assets/hotelroom/twin.jpg';
import bg from '../assets/bg.jpg';

export default function TwinScreen() {
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
     source={twin}/>
     <Text
     style={styles.textimagebgsecond} 
     >TWIN ROOM</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > $100.00 /per night</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
These luxury rooms feature a open-plan kitchenette, spacious work desk and 
chair, seating area and private bathroom in one room. All rooms are non-smoking.
View: select between ocean or mountain views (subject to availability)
Occupancy: 2 adults + 1 infant in a cot (please request upon booking)
Size: 31m2 / 334ft2
Bedding: Twin Beds Children twelve years and under, are accommodated 
and eat breakfast free when sharing a room or apartment with one full 
paying adult. Where rooms cannot accommodate more than two persons, two 
rooms need to be booked at the applicable single rate. {'\n'}
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