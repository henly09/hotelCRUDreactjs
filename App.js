// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalDropdown from 'react-native-modal-dropdown';

import StudentInsert from './scr/StudentInsert.js';
import StudentSearch from './scr/StudentSearch.js';
import StudentDelete from './scr/StudentDelete.js';
import StudentList from './scr/StudentList.js';
import dash from './assets/dash.png'


function HomeScreen({ navigation }) {


  const pages = ['Insert', 'Search','Delete', 'Student List']

  return (
    <View>
      <View> 
      <ModalDropdown 
        style={{
        top: 35,
        width: 100,
        right: 10,
        position: 'relative',
      }}
        options={pages}
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
        onSelect = {(e)=> navigation.navigate('Insert',pages[0])}
        onSelect = {(e)=> navigation.navigate('Search',pages[1])}
        onSelect = {(e)=> navigation.navigate('Delete',pages[2])}
        onSelect = {(e)=> navigation.navigate('StudentList',pages[3])}
        >

         <Image 
         source= {dash}
         style={{ 
         height: 80,
         width: 80,
         }}/>

        </ModalDropdown>
        </View>

      <Text style={{
        fontSize: 25,
        position: 'absolute',
        left: '26%',
        top: 300
      }}> HOMESCREEN </Text>

     
 
      <View style={{ flexDirection: 'row', top: '80%', justifyContent: 'space-evenly'  }}>

      <Button
        title={"Insert"}
        onPress={() => navigation.navigate('Insert')}
       
      />

      <Button
        title={"Search"}
        onPress={() => navigation.navigate('Search')}
       
      />

      <Button
        title={"Delete"}
        onPress={() => navigation.navigate('Delete')}
      />

      <Button
        title={"Student List"}
        onPress={() => navigation.navigate('StudentList')}
      />

      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options = {{
            headerShown: false
        }}
        />

        <Stack.Screen 
        name="Delete" 
        component={StudentDelete}
        options = {{
            headerShown: false
        }}
        />

         <Stack.Screen 
        name="Search" 
        component={StudentSearch}
        options = {{
            headerShown: false
        }}
        />

         <Stack.Screen 
        name="Insert" 
        component={StudentInsert}
        options = {{
            headerShown: false
        }}
        />

        <Stack.Screen 
        name="StudentList" 
        component={StudentList}
        options = {{
            headerShown: false
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

