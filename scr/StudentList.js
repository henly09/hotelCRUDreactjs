import React, { Component } from 'react';
 
import { StyleSheet, FlatList, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';

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
                <View style={styles.container}>     
                       <FlatList
                          data={ this.state.dataSource }         
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => index.toString()}
                        />                
                </View>
                            
                    );
                  }
                }
                }
                 
                const styles = StyleSheet.create({
                 
                  container :{
                    justifyContent: 'center',
                    flex:1,
                    alignItems:'center',
                    backgroundColor: '#F5FCFF',
                    margin: 10,
                    padding: 10,
                    top: 50,
                    bottom: 50,
                    },
            
                welcome:{
                       fontSize: 20,
                       textAlign: 'center',
                       margin:10  
                     },
            
                item:{
                        padding: 5,
                        borderBottomWidth:1,
                        borderBottomColor: '#eee',
                    },
                    
                text:{
                        fontSize: 20
                    }
                });