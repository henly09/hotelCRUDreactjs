import React,{Component,useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, render } from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

export default class HotelInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
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
            departure_date:'',
            random: 0,
            date:'',
            date2:'',
            date3:''
        };

    }

    min = 100000;
    max = 999999;

    handleClick = () => {
        this.setState({random: this.min + (Math.random() * (this.max - this.min))});
      };
   

    InsertRecord=()=>
    {
        var fullname=this.state.fullname;
        var Type_=this.state.Type_;

        if (Type_ == 0){
            Type_ = "Walk-In"
        }
        if (Type_ == 1){
            Type_ = "Reservation"
        }

        var sex=this.state.sex;

        if (sex == 0){
            sex = "Male"
        }
        if (sex == 1){
            sex = "Female"
        }
        if (sex == 2){
            sex = "Others.."
        }

        var date_of_birth=this.state.date3;
        var phone_num=this.state.phone_num;
        var email=this.state.email;
        var address=this.state.address;

        var room_floor = this.state.room_floor;
        var count1 = 0;
        var count2 = 0;
        var a;

        while (room_floor+1 != count1){
            count1++;
                if(room_floor+1 == count1){
                    if (count1 == 1){
                        a = "st";
                    }
                    if (count1 == 2){
                        a = "nd";
                    }
                    if (count1 == 3){
                        a = "rd";
                    }
                    if (count1 >= 4) {
                        a ="th";
                    }
                    room_floor = "FloorNo: "+count1+a+"/";
                    break;
                }  
        }

        var room_no = this.state.room_no;

        while (room_no+1 != count2){
            count2++;
                if(room_no+1 == count2){
                    room_no = "RoomNo: "+count2;
                    break;
                }
        }

        var room_num=room_floor+" "+room_no;
        var room_type=this.state.room_type;

        if (room_type == 0){
            room_type = "Single: A room assigned to one person."
        }
        if (room_type == 1){
            room_type = "Double: A room assigned to two people."
        }
        if (room_type == 2){
            room_type = "Triple: A room assigned to three people."
        }
        if (room_type == 3){
            room_type = "Quad: A room assigned to four people."
        }
        if (room_type == 4){
            room_type = "Queen: A room with a queen-sized bed."
        }
        if (room_type == 5){
            room_type = "King: A room with a king-sized bed."
        }
        if (room_type == 6){
            room_type = "Twin: A room with two beds."
        }

        var no_of_occupants=this.state.no_of_occupants;


        var reservID=this.state.random;


        var arrival_date=this.state.date;
        var departure_date=this.state.date2;

        if(
        fullname.length == 0 || 
        Type_ == 0 || 
        sex.length == 0 || 
        date_of_birth.length== 0 || 
        phone_num.length == 0 ||
        email.length == 0 ||
        address.length == 0 ||
        room_num.length == 0 ||
        room_type.length == 0 ||
        no_of_occupants.length == 0 ||
        reservID.length == 0 ||
        arrival_date.length == 0 ||
        departure_date.length == 0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/Hotel/insert.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                fullname:fullname,
                Type_:Type_,
                sex:sex,
                date_of_birth:date_of_birth,
                phone_num:phone_num,
                email:email,
                address:address,
                room_num:room_num,
                room_type:room_type,
                no_of_occupants:no_of_occupants,
                reservID:reservID,
                arrival_date:arrival_date,
                departure_date:departure_date
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
       
        return(

            <View>

                <ImageBackground 
                source={bg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

            <View style={styles.ViewStyle}>
                
                <TextInput
                    placeholder={"Fullname"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={fullname=>this.setState({fullname})}
                />

    <ModalDropdown 
        style={styles.txtStyle}
        options={["Walk-In", "Reservation"]}
        defaultValue={"Walk-In or Reservation                                                    V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 80,
          width: '90%',
          marginTop: -57,
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(Type_)=> this.setState({Type_})}/>

    <ModalDropdown 
        style={styles.txtStyle}
        options={["Male","Female","Others.."]}
        defaultValue={"Sex                                                                                    V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 110,
          width: '90%',
          marginTop: -57,
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(sex)=> this.setState({sex})}/>

<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  <Text style={styles.txtStyle5}> Birthday: </Text> 
  <DatePicker
        style={styles.txtStyle4}
        date={this.state.date3}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1950-05-01"
        maxDate="2999-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date3) => {this.setState({date3: date3})}}
        
      />
</View>
                <TextInput
                    placeholder={"Phone Number"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType = 'numeric'
                    onChangeText={phone_num=>this.setState({phone_num})}
                />
                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={email=>this.setState({email})}
                />
                <TextInput
                    placeholder={"Address"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={address=>this.setState({address})}
                />
<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>

<ModalDropdown 
        style={styles.txtStyle2}
        options={["1st/","2nd/","3rd/","4th/","5th","6th/","7th/","8th/","9th/","10th/"]}
        defaultValue={"Room Floor#                    V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
            height: 250,
            width: '45%',
            marginTop: -58,
            marginLeft: -5,
            paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(room_floor)=> this.setState({room_floor})}/>

<ModalDropdown 
        style={styles.txtStyle2}
        options={[
            "1","2","3","4","5","6","7","8","9","10",
            "11","12","13","14","15","16","17","18","19","20",
            "21","22","23","24","25","26","27","28","29","30",
            "31","32","33","34","35","36","37","38","39","40",
            "41","42","43","44","45","46","47","48","49","50",
            "51","52","53","54","55","56","57","58","59","60",
            "61","62","63","64","65","66","67","68","69","70",
            "71","72","73","74","75","76","77","78","79","80",
            "81","82","83","84","85","86","87","88","89","90",
            "91","92","93","94","95","96","97","98","99","100",]}
        defaultValue={"Room No.                       V"}
        textStyle={{
           fontSize: 15
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 250,
          width: '45%',
          marginTop: -58,
          marginRight: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(room_no)=> this.setState({room_no})}/>
</View>

<ModalDropdown 
        style={styles.txtStyle}
        options={[
            "Single: A room assigned to one person.",
            "Double: A room assigned to two people.",
            "Triple: A room assigned to three people.",
            "Quad: A room assigned to four people.",
            "Queen: A room with a queen-sized bed.",
            "King: A room with a king-sized bed.",
            "Twin: A room with two bed.",]}
        defaultValue={"Type of Room                                                                  V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 250,
          width: '90%',
          marginTop: '-14.5%',
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(room_type)=> this.setState({room_type})}/>

                <TextInput
                    placeholder={"No. of Occupants"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType={'numeric'}
                    onChangeText={no_of_occupants=>this.setState({no_of_occupants})}
                />
 <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  
                <TextInput
                    value={''+parseInt(this.state.random)}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle3}
                    keyboardType={'numeric'}
                    editable={false} 
                /> 
    <TouchableOpacity
                    onPress={this.handleClick}>
                    <Text style={styles.randombutton}>RANDOM NO.</Text>
    </TouchableOpacity>
  </View>

  <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  <Text style={styles.txtStyle5}> Date of Arrival: </Text> 
  <DatePicker
        style={styles.txtStyle4}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1950-05-01"
        maxDate="2999-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
        useNativeDriver= {true}
      />
</View>
                
<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  <Text style={styles.txtStyle5}> Date of Departure: </Text> 
  <DatePicker
        style={styles.txtStyle4}
        date={this.state.date2}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1950-05-01"
        maxDate="2999-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date2) => {this.setState({date2: date2})}}
        useNativeDriver= {true}
      />
</View>

                <Button
                    title={"Save Record"}
                    onPress={this.InsertRecord}
                />

            </View>
            </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    ViewStyle:{
        flex:1,
        padding: 20,
        marginTop:10,
        top: '5%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    txtStyle2:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        width: 175,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    randombutton:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
        marginBottom: 10,
        backgroundColor: '#2494f4',
        fontSize: 14.5,
        height: 38,
        textAlign: 'center',
        paddingTop: 8,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 3    
    },
    txtStyle3:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 245,
        marginRight: 5
    },
    txtStyle4:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
        padding: 0,
        width: '59%',
        backgroundColor: 'white',
        
    },

    txtStyle5:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 11,
        marginBottom: 10,
        width: '39%',
        backgroundColor: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 13
        
    },
   
});