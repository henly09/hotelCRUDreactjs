import React, { Component } from 'react';
import bg from '../assets/bg.jpg';
import { Image,StyleSheet, FlatList,Button, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
import hotel from '../assets/hotel.png';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HotelList extends Component {

    constructor()
    {
      super();
      this.state = { 
      isLoading: true,
      dataSource:[]
    }
    }

    componentDidMount() {
        return fetch('http://10.0.2.2:80/Hotel/displayall.php')
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
                <Text style={styles.text}>ID#:{item.customerID}, Name:{item.fullname}, Reserve#:{item.reservID}</Text>
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
                source={bg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

          <Image 
         source= {hotel}
         style={{ 
         height: 150,
         width: 150,
         position: 'absolute',
         alignSelf:'flex-end',
         right: 12,
         top: 20,
         resizeMode: 'center',
         }}/>

        <Text style={{
        fontSize: 50,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 55,
        left: 10,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> HOTEL </Text>         

        <Text style={{
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 110,
        left: 20,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE MANAGEMENT™</Text>


                <View style={styles.container}>     
                       <FlatList
                          data={ this.state.dataSource }         
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => index.toString()}
                        />                
                </View>
  <View style={{
  width: 100,
  height: 50,
  position: 'absolute',
  top: 670,
  left: 150,
}}>
      <Button
        color="#630513"
        title={"Refresh"}
        onPress={() => this.componentDidMount()}
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
                    alignItems:'flex-start',
                    backgroundColor: '#F5FCFF',
                    top:150,
                    height: '65%',
                    width: '90%',
                    left: '5%',
                    paddingLeft: 20,
                    paddingTop: 10,
                    paddingBottom: 10

                    },
                   
                item:{
                  paddingBottom: 5,
                  borderBottomWidth:2,
                  borderBottomColor: '#eee',
                    },
                    
                text:{
                        fontSize: 14,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        fontStyle: "italic",
                    }
                });