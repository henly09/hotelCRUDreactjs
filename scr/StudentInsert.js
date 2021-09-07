import React,{Component} from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import school from '../assets/school.png';
import ModalDropdown from 'react-native-modal-dropdown';
import hcdclogo from '../assets/hcdclogo.png';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class StudentInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            student_name:'',
            student_year:'',
            student_course:'',
            student_age:'',
            student_email:''
        };
    }

    InsertRecord=()=>
    {
        var student_name=this.state.student_name;
        var student_year=this.state.student_year;

        if (student_year == 0){
            student_year = "1st Year"
        }
        if (student_year == 1){
            student_year = "2nd Year"
        }
        if (student_year == 2){
            student_year = "3rd Year"
        }
        if (student_year == 2){
            student_year = "4th Year"
        }
        if (student_year == 4){
            student_year = "5th Year"
        }

        var student_course=this.state.student_course;

        if (student_course == 0){
            student_course = "Bachelor of Science in Criminology(BSC)"
        }
        if (student_course == 1){
            student_course = "Bachelor of Library and Information Science(BLIS)"
        }
        if (student_course == 2){
            student_course = "Bachelor of Science in Computer Engineering(BSCE)"
        }
        if (student_course == 3){
            student_course = "Bachelor of Science in Electronics Engineering(BSEE)"
        }
        if (student_course == 4){
            student_course = "Bachelor of Science in Information Technology(BSIT)"
        }
        if (student_course == 5){
            student_course = "Bachelor of Science in Hospitality Management(BSHM)"
        }
        if (student_course == 6){
            student_course = "Bachelor of Science in Tourism Management(BSTM)"
        }
        if (student_course == 7){
            student_course = "Bachelor of Arts in Communication Specializing in Journalism and Broadcasting(BACS(JB))"
        }
        if (student_course == 8){
            student_course = "Bachelor of Arts in Communication Specializing in New Media Studies(BACS(NMS))"
        }
        if (student_course == 9){
            student_course = "Bachelor of Arts in Communication Specializing in Social Communications(BACS(SC))"
        }
        if (student_course == 10){
            student_course = "Bachelor of Arts in Economics(BAE)"
        }
        if (student_course == 11){
            student_course = "Bachelor of Arts in History(BAP)"
        }
        if (student_course == 12){
            student_course = "Bachelor of Arts in Philosophy(BSP)"
        }
        if (student_course == 13){
            student_course = "Bachelor of Science in Psychology(BSSW)"
        }
        if (student_course == 14){
            student_course = "Bachelor of Science in Marine Transportation(BSMT)"
        }
        if (student_course == 15){
            student_course = "Bachelor of Science in Accountancy(BSA)"
        }
        if (student_course == 16){
            student_course = "Bachelor of Science in Business Administration Major in Financial Management(BSBA(FM))"
        }
        if (student_course == 17){
            student_course = "Bachelor of Science in Business Administration Major in Human Resource Management(BSBA(HRM))"
        }
        if (student_course == 18){
            student_course = "Bachelor of Science in Business Administration Major in Marketing Management(BSBA(MM))"
        }
        if (student_course == 19){
            student_course = "Bachelor of Science in Customs Administration(BSCA)"
        }
        if (student_course == 20){
            student_course = "Bachelor of Science in Management Accounting(BSMA)"
        }
        if (student_course == 21){
            student_course = "Bachelor of Science in Real Estate Management(BSREM)"
        }
        if (student_course == 22){
            student_course = "Bachelor of Elementary Education(BEE)"
        }
        if (student_course == 23){
            student_course = "Bachelor of Physical Education(BPE)"
        }
        if (student_course == 24){
            student_course = "Bachelor of Secondary Education Major in English(BSE(E))"
        }
        if (student_course == 25){
            student_course = "Bachelor of Secondary Education Major in Filipino(BSE(F))"
        }
        if (student_course == 26){
            student_course = "Bachelor of Secondary Education Major in Mathematics(BSE(M))"
        }
        if (student_course == 27){
            student_course = "Bachelor of Secondary Education Major in Science(BSE(S))"
        }
        if (student_course == 28){
            student_course = "Bachelor of Secondary Education Major in Social Studies(BSE(SS))"
        }
        if (student_course == 29){
            student_course = "Bachelor of Secondary Education Major in Values Education with Catechetics(BSE(ValEd/wC))"
        }
        if (student_course == 30){
            student_course = "Bachelor of Special Needs Education Generalist(BSNEG)"
        }
       
        var student_age=this.state.student_age;
        var student_email=this.state.student_email;

        if(student_name.length==0 || student_year == null || student_course == null || student_age.length==0 || student_email.length ==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/Final_Proj/insert.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                student_name:student_name,
                student_year:student_year,
                student_course:student_course,
                student_age:student_age,
                student_email:student_email
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
                source={school} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

        <Image 
         source= {hcdclogo}
         style={{ 
         height: 180,
         width: 180,
         position: 'absolute',
         alignSelf:'center',
         top: 100,
         resizeMode: 'center',
         }}/>

            <View style={styles.ViewStyle}>
                
                <TextInput
                    placeholder={"Student Name"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={student_name=>this.setState({student_name})}
                />

    <ModalDropdown 
        style={styles.txtStyle}
        options={["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"]}
        defaultValue={"Student's Year"}
        textStyle={{
           fontSize: 15
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 100,
          width: '90%',
          marginTop: -45,
          marginLeft: -15,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(student_year)=> this.setState({student_year})}/>

    <ModalDropdown 
        style={styles.txtStyle}
        options={[
            "Bachelor of Science in Criminology(BSC)", 
            "Bachelor of Library and Information Science(BLIS)", 
            "Bachelor of Science in Computer Engineering(BSCE)", 
            "Bachelor of Science in Electronics Engineering(BSEE)", 
            "Bachelor of Science in Information Technology(BSIT)", 
            "Bachelor of Science in Hospitality Management(BSHM)", 
            "Bachelor of Science in Tourism Management(BSTM)", 
            "Bachelor of Arts in Communication Specializing in Journalism and Broadcasting(BACS(JB))",
            "Bachelor of Arts in Communication Specializing in New Media Studies(BACS(NMS))", 
            "Bachelor of Arts in Communication Specializing in Social Communications(BACS(SC))", 
            "Bachelor of Arts in Economics(BAE)", 
            "Bachelor of Arts in History(BAP)",
            "Bachelor of Arts in Philosophy(BSP)", 
            "Bachelor of Science in Psychology(BSSW)", 
            "Bachelor of Science in Marine Transportation(BSMT)", 
            "Bachelor of Science in Accountancy(BSA)",
            "Bachelor of Science in Business Administration Major in Financial Management(BSBA(FM))", 
            "Bachelor of Science in Business Administration Major in Human Resource Management(BSBA(HRM))", 
            "Bachelor of Science in Business Administration Major in Marketing Management(BSBA(MM))", 
            "Bachelor of Science in Customs Administration(BSCA)",
            "Bachelor of Science in Management Accounting(BSMA)", 
            "Bachelor of Science in Real Estate Management(BSREM)", 
            "Bachelor of Elementary Education(BEE)", 
            "Bachelor of Physical Education(BPE)",
            "Bachelor of Secondary Education Major in English(BSE(E))", 
            "Bachelor of Secondary Education Major in Filipino(BSE(F))", 
            "Bachelor of Secondary Education Major in Mathematics(BSE(M))", 
            "Bachelor of Secondary Education Major in Science(BSE(S))",
            "Bachelor of Secondary Education Major in Social Studies(BSE(SS))", 
            "Bachelor of Secondary Education Major in Values Education with Catechetics(BSE(ValEd/wC))",
            "Bachelor of Special Needs Education Generalist(BSNEG)"]}
        defaultValue={"Student's Course"}
        textStyle={{
           fontSize: 15
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 250,
          width: '90%',
          marginTop: -45,
          marginLeft: -15,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(student_course)=> this.setState({student_course})}/>

                 <TextInput
                    placeholder={"Student Age"}
                    placeholderTextColor={"black"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                    onChangeText={student_age=>this.setState({student_age})}
                />
                 <TextInput
                    placeholder={"Student's Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={student_email=>this.setState({student_email})}
                />

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
        top: '35%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 15,
        marginBottom: 10,
        backgroundColor: 'white',
    }


});