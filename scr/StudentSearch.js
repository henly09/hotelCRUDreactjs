import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import { 
    StyleSheet, 
    Text,
    View, 
    SafeAreaView, 
    FlatList, 
    ActivityIndicator, 
    TextInput,
    Button,
    ImageBackground
} from 'react-native';
import school from '../assets/school.png';

export default class StudentSearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            StudentID:'',
            student_name:'',
            student_year:'',
            student_course:'',
            student_age:'',
            student_email:''
        };
    }

    SearchRecord=()=>
    {
        var StudentID=this.state.StudentID;

        if(StudentID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var SearchAPIURL="http://10.0.2.2:80/Final_Proj/search.php";

            var header={
                    'Accept':'application/json',
                    'Content-Type':'application/json'
            };

            var Data={
                StudentID:StudentID
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
                this.setState({StudentID:response[0].StudentID});
                this.setState({student_name:response[0].student_name});
                this.setState({student_year:response[0].student_year});
                this.setState({student_course:response[0].student_course});
                this.setState({student_age:response[0].student_age});
                this.setState({student_email:response[0].student_email});
            })
            .catch((error)=>{
                alert("Error"+error);
            })
        }
    }
    render()
    {
    return (
        <View>
                <ImageBackground 
                source={school} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

        <View style={styles.viewStyle}>

            <TextInput
                placeholder={"Enter Student ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle}
                onChangeText={StudentID=>this.setState({StudentID})}
            />
            <Button
                title={"Find Record"}
                onPress={this.SearchRecord}
            />

            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

            <TextInput
            style={styles.txtStyle}
            value={"Name: "+this.state.student_name}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Year: "+this.state.student_year}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Course: "+this.state.student_course}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Age: "+this.state.student_age}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Email: "+this.state.student_email}
            />


        </View>
        </ImageBackground>
        </View>
    )
    }
}

const styles=StyleSheet.create({

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
        padding: 10
    },
   



});