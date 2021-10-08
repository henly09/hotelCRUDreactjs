import React,{Component,useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, render } from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

export default function HotelInsert()
{
 //---------------------------------------------------------- BirthDate   
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textdate1, setTextdate1] = useState('yyyy-dd-mm');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
  
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getFullYear() + '-' + tempDate.getDate() + '-' + (tempDate.getMonth()+1);
        setDate_of_birth(fDate);
        setTextdate1(fDate)

        console.log('BirthDate:'+ fDate);
      }
  
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      }
//---------------------------------------------------------- Arrival Date

const [date2, setDate2] = useState(new Date());
const [mode2, setMode2] = useState('date');
const [show2, setShow2] = useState(false);
const [textdate2, setTextdate2] = useState('yyyy-dd-mm');

const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);

    let tempDate2 = new Date(currentDate);
    let fDate2 = tempDate2.getFullYear() + '-' + tempDate2.getDate() + '-' + (tempDate2.getMonth()+1);
    setArrival_date(fDate2);
    setTextdate2(fDate2)

    console.log('Arrival:'+ fDate2);
  }

  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  }
//---------------------------------------------------------- Departure Date
const [date3, setDate3] = useState(new Date());
const [mode3, setMode3] = useState('date');
const [show3, setShow3] = useState(false);
const [textdate3, setTextdate3] = useState('yyyy-dd-mm');

const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);

    let tempDate3 = new Date(currentDate);
    let fDate3 = tempDate3.getFullYear() + '-' + tempDate3.getDate() + '-' + (tempDate3.getMonth()+1);
    setDeparture_date(fDate3);
    setTextdate3(fDate3)

    console.log('Departure:'+ fDate3);
  }

  const showMode3 = (currentMode) => {
    setShow3(true);
    setMode3(currentMode);
  }
  //----------------------------------------------------------


    const [fullname1, setFullname] = useState('');
    const [Type_1, setType_] = useState('');
    const [sex1, setSex] = useState('');
    const [date_of_birth1, setDate_of_birth] = useState('');
    const [phone_num1, setPhone_num] = useState('');
    const [email1, setEmail] = useState('');
    const [address1, setAddress] = useState('');
    const [room_floor1, setRoom_floor] = useState();
    const [room_no1, setRoom_no] = useState('');
    const [room_type1, setRoom_type] = useState('');
    const [no_of_occupants1, setNo_of_occupants] = useState('');
    const [reservID1, setReservID] = useState(0);
    const [arrival_date1, setArrival_date] = useState('');
    const [departure_date1, setDeparture_date] = useState('');

    const [min, setMin] = useState(100000);
    const [max, setMax] = useState(900000);

    const handleClick = () => {
        setReservID(Math.floor(Math.random() * max) + min );
      };
   

    const InsertRecord=()=>
    {
        var fullname=fullname1;
        var Type_=Type_1;

        if (Type_ == 0){
            Type_ = "Walk-In"
        }
        if (Type_ == 1){
            Type_ = "Reservation"
        }

        var sex=sex1;

        if (sex == 0){
            sex = "Male"
        }
        if (sex == 1){
            sex = "Female"
        }
        if (sex == 2){
            sex = "Others.."
        }

        var date_of_birth=date_of_birth1;
        var phone_num=phone_num1;
        var email=email1;
        var address=address1;

        var room_floor = room_floor1;
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

        var room_no = room_no1;

        while (room_no+1 != count2){
            count2++;
                if(room_no+1 == count2){
                    room_no = "RoomNo: "+count2;
                    break;
                }
        }

        var room_num=room_floor+" "+room_no;
        var room_type=room_type1;

        if (room_type == 0){
            room_type = "Single"
        }
        if (room_type == 1){
            room_type = "Double"
        }
        if (room_type == 2){
            room_type = "Triple"
        }
        if (room_type == 3){
            room_type = "Quad"
        }
        if (room_type == 4){
            room_type = "Queen"
        }
        if (room_type == 5){
            room_type = "King"
        }
        if (room_type == 6){
            room_type = "Twin"
        }

        var no_of_occupants=no_of_occupants1;


        var reservID=reservID1;


        var arrival_date=arrival_date1;
        var departure_date=departure_date1;

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
                    onChangeText={fullname=>setFullname(fullname)}
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
        onSelect = {(Type_)=> setType_(Type_)}/>

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
        onSelect = {(sex)=> setSex(sex)}/>


<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={styles.txtStyle4}>
          <Button color="#6c0c1c" title='Date of Birth' onPress={() => showMode('date')}/>
      </View>
      {show && (
        <DateTimePicker
        testID = 'dateTimePicker'
        value={date}
        mode={mode}
        is24Hour={false}
        display='default'
        onChange={onChange}
        />
      )}
    <Text style={styles.txtStyle5}> {textdate1} </Text> 
</View>


                <TextInput
                    placeholder={"Phone Number"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType = 'numeric'
                    onChangeText={phone_num=>setPhone_num(phone_num)}
                />
                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={email=>setEmail(email)}
                />
                <TextInput
                    placeholder={"Address"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={address=>setAddress(address)}
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
        onSelect = {(room_floor)=> setRoom_floor(room_floor)}/>

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
        onSelect = {(room_no)=> setRoom_no(room_no)}/>
</View>

<ModalDropdown 
        style={styles.txtStyle}
        options={[
            "Single",
            "Double",
            "Triple",
            "Quad",
            "Queen",
            "King",
            "Twin",]}
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
        onSelect = {(room_type)=> setRoom_type(room_type)}/>

                <TextInput
                    placeholder={"No. of Occupants"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType={'numeric'}
                    onChangeText={no_of_occupants=>setNo_of_occupants(no_of_occupants)}
                />
                
 <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  
                <TextInput
                    value={''+parseInt(reservID1)}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle3}
                    keyboardType={'numeric'}
                    editable={false} 
                /> 
    <TouchableOpacity
                    onPress={handleClick}>
                    <Text style={styles.randombutton}>RANDOM NO.</Text>
    </TouchableOpacity>
  </View>

  <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={styles.txtStyle4}>
          <Button color="#6c0c1c" title='Date Of Arrival' onPress={() => showMode2('date')}/>
      </View>
      {show2 && (
        <DateTimePicker
        testID = 'dateTimePicker'
        value={date2}
        mode={mode2}
        is24Hour={false}
        display='default'
        onChange={onChange2}
        />
      )}
    <Text style={styles.txtStyle5}> {textdate2} </Text> 
</View>
                
<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={styles.txtStyle4}>
          <Button color="#6c0c1c" title='Date Of Departure' onPress={() => showMode3('date')}/>
      </View>
      {show3 && (
        <DateTimePicker
        testID = 'dateTimePicker'
        value={date3}
        mode={mode3}
        is24Hour={false}
        display='default'
        onChange={onChange3}
        />
      )}
    <Text style={styles.txtStyle5}> {textdate3} </Text> 
</View>

                <Button
                    color = '#6c0c1c'
                    title={"Save Record"}
                    onPress={InsertRecord}
                />

            </View>
            </ImageBackground>
            </View>
        )
    }

const styles=StyleSheet.create({

    ViewStyle:{
        padding: 20,
        top: '4%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    txtStyle2:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        width: 175,
        marginBottom: 10,
        backgroundColor: 'white',
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
    txtStyle3:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 245,
        marginRight: 5,
        borderRadius: 5
    },
    txtStyle4:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '50%',
        borderRadius: 5
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
        fontSize: 13,
        borderRadius: 5
        
    },
   
});