// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalDropdown from 'react-native-modal-dropdown';

import StudentInsert from './scr/StudentInsert.js';
import StudentSearch from './scr/StudentSearch.js';
import StudentDelete from './scr/StudentDelete.js';
import StudentList from './scr/StudentList.js';


function HomeScreen({ navigation }) {
  return (
    <View >

      <Text style={{
        fontSize: 25,
        position: 'absolute',
        left: '26%',
        top: 225
      }}> HOMESCREEN </Text>

      <ModalDropdown 
        style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4f67ff',
        borderWidth: 4,
        width: 100,
        top: 150,
        left: '35%'}}
        options={['option 1', 'option 2']}
        defaultValue={"Dropdown"}
        />
 
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

function App() {
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

export default App;