import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';


import single from '../assets/hotelroom/single.jpg';
import bg from '../assets/bg.jpg';

export default function SingleScreen() {
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
      }}> ROOMS </Text>
 
     <Image
     style={styles.imagebgsecond}
     source={single}/>
     <Text
     style={styles.textimagebgsecond} 
     >Single Room</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > $30.00 /per night</Text>
     <Text style={styles.textimagebgsecond2}>
     This room is located on the top floor of the hotel and has hot / cold air conditioned, a furnished balcony with sun loungers with swimming pool or mountain views and free WI FI.{'\n'}
     Room surface area: 17 m²{'\n'}
     Bed options: 1 single bed (105 cm * 190 cm){'\n'}
     Room facilities: Pool or mountain views, terrace, telephone, flat screen TV with satellite channels, free safe, hot/cold air conditioned, desk,  parquet floor, wardrobe, {'\n'}mini fridge , hairdryer, free toiletries, gel / shampoo dispenser and bathtub.{'\n'}
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