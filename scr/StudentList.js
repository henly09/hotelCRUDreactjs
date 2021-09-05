import React, { Component } from 'react';
import school from '../assets/school.png';
import { StyleSheet, FlatList, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';

export default class StudentList extends Component {

    constructor()
    {
      super();
      this.state = { 
      isLoading: true,
      dataSource:[]
    }
    }

    componentDidMount() {
        return fetch('http://10.0.2.2:80/Final_Proj/displayall.php')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson
            })  
          });
      }
    
     _renderItem = ({ item }) => (
         
        <TouchableOpacity onPress={() => alert(item.body)}>
            <View style={styles.item}>
                <Text style={styles.text}>ID#:{item.StudentID}, Name:{item.student_name}, Course:{item.student_course}</Text>
            </View>
        </TouchableOpacity>
     );

        render() {
 
            if (this.state.isLoading) {
              return (
                <View style={styles.container}>
                  <ActivityIndicator size="large" animating/>
                </View>
              )
            }
            else {
     
            return (
              <View>
                <ImageBackground 
                source={school} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

        <Text style={{
        fontSize: 50,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 70,
        left: 6.5,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> STUDENT </Text>         

        <Text style={{
        fontSize: 30,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 120,
        left: 10,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE </Text>
                <View style={styles.container}>     
                       <FlatList
                          style={{padding: 5}}
                          data={ this.state.dataSource }         
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => index.toString()}
                        />                
                </View>
                </ImageBackground>
                </View>
                            
                    );
                  }
                }
                }
                 
                const styles = StyleSheet.create({
                 
                  container :{
                    alignItems:'center',
                    backgroundColor: '#F5FCFF',
                    textAlign: 'center',
                    top:180,
                    height: '70%',
                    width: '90%',
                    left: '5%',
                    padding: 20

                    },
                   
                item:{
                  paddingBottom: 10,
                  borderBottomWidth:2,
                  borderBottomColor: '#eee',
                    },
                    
                text:{
                        fontSize: 15
                    }
                });