import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';



import double from '../assets/hotelroom/double.jpg';
import bg from '../assets/bg.jpg';

export default function DoubleScreen() {
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
     source={double}/>
     <Text
     style={styles.textimagebgsecond} 
     >DOUBLE ROOM</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > $40.00 /night</Text>
     <Text style={styles.textimagebgsecond2}>
       All our double rooms are around 14m2, and feature a double bed or two single beds, (depending on availability), 
       fridge and microwave, tea and coffee facilities, plasma TV, en-suite bathroom, hair dryer and toiletries. We offer 
       free Breakfast in bed for the double rooms. All of our double twin rooms are elegant and tasteful, decorated in traditional Georgian style with the 
       following set of amenities: En-suite bathroom with shower and toilet, toiletries and towels.Fridge/freezer and Microwave,
       Central heating, Flat Screen Televisions, Direct Dial Telephone, Tea and Coffee Facilities,Hair Dryer, Free WiFi,Fully Air conditioned{'\n'}
       Occupancy detail : 2 person
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
           fontSize: 25,
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
           top: 400,
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