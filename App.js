// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { View, Text, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ModalDropdown from 'react-native-modal-dropdown';

import HotelInsert from './scr/HotelInsert.js';
import HotelSearch from './scr/HotelSearch.js';
import HotelDelete from './scr/HotelDelete.js';
import HotelList from './scr/HotelList.js';
import dash from './assets/dash.png';
import hotel from './assets/hotel.png';
import bg from './assets/bg.jpg';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';


function HomeScreen({ navigation }) {


  const pages = ['Insert', 'Search','Delete', 'HotelList'];

  return (
    <View>
     <ImageBackground 
     source={bg} 
     resizeMode="cover" 
     style={{
       height: '100%',
       width: '100%'
     }}>
    
    <ModalDropdown 
        style={{
        top: 35,
        width: 100,
        right: 10,
        position: 'relative',
      }}
        options={['Insert', 'Search','Delete', 'Hotel List']}
        animated
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        dropdownStyle={{
          height: 190,
          width: 130,
          marginBottom: 100,
          marginLeft: 20,
          marginTop: -80,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}

        dropdownTextStyle={{
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: 'sans-serif',
          fontWeight: 'bold'
        }}
        onSelect = {(e)=> navigation.navigate(pages[e])}>

         <Image 
         source= {dash}
         style={{ 
         height: 80,
         width: 80,
         }}/>

        </ModalDropdown>

      <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'center',
        top: 320,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center'
      }}> LUXURY BOUTIQUE {"\n"} DAVAO HOTEL </Text>

        <Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'center',
        top: 410,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center'
      }}> Hotel Reservation Database System Management™ </Text>

        <Image 
         source= {hotel}
         style={{ 
         height: 200,
         width: 340,
         position: 'absolute',
         alignSelf:'center',
         top: 100,
         resizeMode: 'stretch',
         }}/>

      <View style={{ 
        flexDirection: 'row', 
        top: '110%', 
        justifyContent: 'space-evenly',
        }}>

      <Button
        color="#630513"
        title={"Insert"}
        onPress={() => navigation.navigate('Insert')}
       
      />

      <Button
        color="#630513"
        title={"Search"}
        onPress={() => navigation.navigate('Search')}
       
      />

      <Button
        color="#630513"
        title={"Delete"}
        onPress={() => navigation.navigate('Delete')}
      />

      <Button
        color="#630513"
        title={"Hotel List"}
        onPress={() => navigation.navigate('HotelList')}
      />

      </View>
      </ImageBackground>
        </View>
  );
}

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#630513',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 60,
          width: "100%"
        },
        tabBarShowLabel: false,
        showElevation: true
      }}>

      <Tab.Screen name="HomeScreen" 
      component={HomeScreen}  
      options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={home}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
        }} />

      <Tab.Screen name="Insert" component={HotelInsert}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={insert}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
        }}/>

      <Tab.Screen name="Search" component={HotelSearch}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={search}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
        }}/>
      <Tab.Screen name="Delete" component={HotelDelete}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={deleted}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
        }}/>

    
      <Tab.Screen name="HotelList" component={HotelList}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={list}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
              
        }}/>
        
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

