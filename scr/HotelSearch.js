import React, {Component } from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    Button, 
    TextInput,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import hotel from '../assets/hotel.png';
import bg from '../assets/bg.jpg';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HotelSearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            customerID:'',
            fullname:'',
            Type_:'',
            sex:'',
            date_of_birth:'',
            phone_num:'',
            email:'',
            address:'',
            room_num:'',
            room_type:'',
            no_of_occupants:'',
            reservID:'',
            arrival_date:'',
            departure_date:''
        };
    }

    SearchRecord=()=>{ 

        var customerID=this.state.customerID;

        if(customerID.length == 0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var SearchAPIURL="http://10.0.2.2:80/Hotel/search.php";

            var header={
                    'Accept':'application/json',
                    'Content-Type':'application/json'
            };

            var Data={
                customerID:customerID
            };

            fetch(
                SearchAPIURL,
                {
                    method:'POST',
                    headers:header,
                    body: JSON.stringify(Data)
                }
            )
            .then((response)=>response.json())
            .then((response)=>{
                this.setState({customerID:response[0].customerID});
                this.setState({fullname:response[0].fullname});
                this.setState({Type_:response[0].Type_});
                this.setState({sex:response[0].sex});
                this.setState({date_of_birth:response[0].date_of_birth});
                this.setState({phone_num:response[0].phone_num});
                this.setState({email:response[0].email});
                this.setState({address:response[0].address});
                this.setState({room_num:response[0].room_num});
                this.setState({room_type:response[0].room_type});
                this.setState({no_of_occupants:response[0].no_of_occupants});
                this.setState({reservID:response[0].reservID});
                this.setState({arrival_date:response[0].arrival_date});
                this.setState({departure_date:response[0].departure_date});
                
            })
            .catch((error)=>{
                alert("Error"+error);
            })
        }
    }

    UpdateRecord=()=>{

        var customerID = this.state.customerID;
        var fullname = this.state.fullname;
        var phone_num = this.state.phone_num;
        var address = this.state.address;
        var room_num = this.state.room_num;
        var room_type = this.state.room_type;
        var reservID = this.state.reservID;
        var arrival_date = this.state.arrival_date;
        var departure_date = this.state.departure_date;


        if(customerID == null)
        {
            console.log(customerID);
            Alert.alert("Update Info","Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/Hotel/update.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                customerID:customerID,
                fullname:fullname,
                phone_num:phone_num,
                address:address,
                room_num:room_num,
                room_type:room_type,
                reservID:reservID,
                arrival_date:arrival_date,
                departure_date:departure_date,
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
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })
        }
    }
    
    render()
    {
    return (
        <View>
                <ImageBackground 
                source={bg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

<Text style={{
        fontSize: 40,
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
      }}> HOTEL </Text> 

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
      }}> DATABASE SEARCH SYSTEM </Text>

         <Image 
         source= {hotel}
         style={{ 
         height: 120,
         width: 120,
         position: 'absolute',
         alignSelf:'flex-end',
         top: 30,
         resizeMode: 'center',
         }}/>


        <View style={styles.viewStyle}>

        <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput
                placeholder={"Enter Customer ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={{
                    borderBottomWidth:1,
                    borderBottomColor:'#ffffff',
                    backgroundColor: 'white',
                    paddingLeft: 7,
                    height: 37,
                    width: '70%',
                    borderRadius: 5
                }}
                onChangeText={customerID=>this.setState({customerID})}
            />

           <TouchableOpacity
                    onPress={this.SearchRecord}>
                    <Text style={styles.randombutton}>SEARCH</Text>
    </TouchableOpacity>
        </View>           

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Fullname:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.fullname}
            onChangeText={fullname=>this.setState({fullname})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Phone Number:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.phone_num}
            keyboardType={"numeric"}
            onChangeText={phone_num=>this.setState({phone_num})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Reservation ID:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.reservID}
            keyboardType={"numeric"}
            onChangeText={reservID=>this.setState({reservID})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Address:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.address}
            onChangeText={address=>this.setState({address})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Room Number:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.room_num}
            keyboardType={"numeric"}
            onChangeText={room_num=>this.setState({room_num})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Room Type</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.room_type}
            onChangeText={room_type=>this.setState({room_type})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Date of Arrival:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.arrival_date}
            keyboardType={"numeric"}
            onChangeText={arrival_date=>this.setState({arrival_date})}
            />

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Date of Departure:</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.departure_date}
            keyboardType={"numeric"}
            onChangeText={departure_date=>this.setState({departure_date})}
            />

            <Text style={{marginBottom: -10}}> </Text>

        <Button
                color="#6c0c1c"
                title={"Update"}
                onPress={this.UpdateRecord}
                style={styles.containerbutton}
            />

        </View>

        </ImageBackground>
        </View>
    )
    }
}

const styles=StyleSheet.create({

    containerbutton:
    {
        alignSelf: 'center',
        width: '50%'
    },

    viewStyle:
    {
        flex:1,
        padding:20,
        marginTop:20,
        top: '13%',
        
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 2,
        paddingLeft: 8,
        borderRadius: 5
    },

    randombutton:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
        marginBottom: 10,
        backgroundColor: '#6c0c1c',
        fontSize: 14.5,
        height: 38,
        textAlign: 'center',
        paddingTop: 8,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 3
    },
   



});