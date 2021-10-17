import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import { 
    Text,
    View,  
    ActivityIndicator, 
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image
} from 'react-native';
import bg from '../assets/bg.jpg';
import single from '../assets/thumbnail/single.png';
import double from '../assets/thumbnail/double.png';
import triple from '../assets/thumbnail/triple.png';
import quad from '../assets/thumbnail/quad.jpg';
import queen from '../assets/thumbnail/queen.png';
import king from '../assets/thumbnail/king.png';
import twin from '../assets/thumbnail/twin.png';
import hotel from '../assets/hotel.png';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HotelDelete extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            customerID:''
        }
        this.state = { 
            isLoading: true,
            dataSource:[],
            isFetching:false
          }
    }

/*------------------------------------------------------------------------------*/
    DeleteRecord=()=>
    {
        var customerID=this.state.customerID;

        if(customerID==null)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/Hotel/delete.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                customerID:customerID
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                    this.componentDidMount();
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })

        }
    }
/*------------------------------------------------------------------------------*/

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

/*------------------------------------------------------------------------------*/
    render()
    {
        if (this.state.isLoading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator size="large" animating/>
              </View>
            )
          }
          else{
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
         height: 135,
         width: 135,
         position: 'absolute',
         alignSelf:'flex-end',
         right: 12,
         top: 20,
         resizeMode: 'center',
         }}/>
        <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 55,
        left: 8,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> HOTEL™ </Text> 

<Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 100,
        left: 13,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE LIST </Text>

                    
        <View style={styles.viewStyle}>
        <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly', top: 19}}>
            <TextInput
                placeholder={"Enter Customer ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle3}
                onChangeText={customerID=>this.setState({customerID})}
            />
        <TouchableOpacity
                    onPress={() => this.DeleteRecord()}>
                    <Text style={styles.button}>DELETE</Text>
    </TouchableOpacity>
        </View>
    
            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{padding: 10, width: '100%'}}
                      data={ this.state.dataSource }
                      onRefresh={() => this.onRefresh()}
                      refreshing={this.state.isFetching}        
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />                
            </SafeAreaView>

        </View>
        </ImageBackground>
        </View>
    );
    }
}
}

const styles=StyleSheet.create({

    viewStyle:
    {
        padding:20,
        top: '14%',
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'black',
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 10
    },
      
    container :{
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        paddingTop: 10,
        top: 5,
        paddingBottom: 10,
        textAlign: 'center',
        height: 500,
        width: '100%'
        },

    item:{
        borderBottomWidth:3,
        borderBottomColor: '#eee',
        width: '100%',
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
    },
    txtStyle3:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 245,
        marginRight: 5
    },
    button:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
        backgroundColor: '#630513',
        fontSize: 14,
        height: 48,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 3,
        paddingTop:14
    },



});

