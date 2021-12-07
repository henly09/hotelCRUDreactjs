import React, { Component } from 'react';
import bg from '../assets/bg.jpg';
import { Image,StyleSheet, FlatList, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
import hotel from '../assets/hotel.png';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import single from '../assets/thumbnail/single.png';
import double from '../assets/thumbnail/double.png';
import triple from '../assets/thumbnail/triple.png';
import quad from '../assets/thumbnail/quad.jpg';
import queen from '../assets/thumbnail/queen.png';
import king from '../assets/thumbnail/king.png';
import twin from '../assets/thumbnail/twin.png';

export default class HotelList extends Component {

    constructor()
    {
      super();
      this.state = { 
      isLoading: true,
      dataSource:[],
      isFetching:false
    }
    }

      componentDidMount = async() => {
        this.setState({ isLoading: true });
        try {  
         const responseJson = await fetch('http://10.0.2.2:80/Hotel/displayall.php')
         const json = await responseJson.json();
            this.setState({
              isLoading: false,
              dataSource: json
            })  
        } catch(error) { 
            console.log(error);
            this.setState({ isLoading: false });
        }
      }

      onRefresh() {
        this.setState({isFetching: true,},() => {this.componentDidMount();});
        this.setState({ isFetching: false })
    }
    
     _renderItem = ({ item }) => {
       
      thumbnail = item.room_type;
     
      const rooms = [
       single,
       double,
       triple,
       quad,
       queen,
       king,
       twin];
     
     var e;
     var thumbnail;
     
     if ( thumbnail == 'Single'){e=0;}
     if ( thumbnail == 'Double'){e=1;}
     if ( thumbnail == 'Triple'){e=2;}
     if ( thumbnail == 'Quad'){e=3;}
     if ( thumbnail == 'Queen'){e=4;}
     if ( thumbnail == 'King'){e=5;}
     if ( thumbnail == 'Twin'){e=6;}

      return (
      <TouchableOpacity onPress={() => alert(item.body)}>
            <View>
            <View style={styles.item}>
                <Text style={styles.text}>ID#:{item.customerID}, Name:{item.fullname},{"\n"}Reserve#:{item.reservID},{"\n"}Type:{item.room_type}</Text>
            </View>
            <Image style= {styles.thumbnail}source={rooms[e]}/>
            </View>
        </TouchableOpacity>
     );}

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
         height: 120,
         width: 120,
         position: 'absolute',
         alignSelf:'flex-end',
         right: 8,
         top: 39,
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
                          style={{padding: 10, width: '100%'}}
                          data={ this.state.dataSource }
                          onRefresh={() => this.onRefresh()}
                          refreshing={this.state.isFetching}         
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
                    top:160,
                    height: '68%',
                    width: '90%',
                    left: '5%',
                    },
                   
                item:{
                  borderBottomWidth:3,
                  borderBottomColor: '#eee',
                  width: '90%',
                  padding :10,
                  left: 50
                    },
                    
                text:{
                        fontSize: 15,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        fontStyle: "italic",
                    },
                
                thumbnail:{
                   resizeMode: 'center',
                   position: 'absolute',
                   height: 50, 
                   width: 50, 
                   top: 20,
                   backgroundColor:'#630513'
                }
                });