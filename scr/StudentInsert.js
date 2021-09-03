import React,{Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
        var student_course=this.state.student_course;
        var student_age=this.state.student_age;
        var student_email=this.state.student_email;

        if(student_name.length==0 || student_year.length==0 || student_course.length==0 || student_age.length==0 || student_email.length ==0)
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
            <View style={styles.ViewStyle}>
                <TextInput
                    placeholder={"Student Name"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                    onChangeText={student_name=>this.setState({student_name})}
                />
                 <TextInput
                    placeholder={"Student Year"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                    onChangeText={student_year=>this.setState({student_year})}
                />
                 <TextInput
                    placeholder={"Student's Course"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                    onChangeText={student_course=>this.setState({student_course})}
                />
                 <TextInput
                    placeholder={"Student Age"}
                    placeholderTextColor={"#FF0000"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                    onChangeText={student_age=>this.setState({student_age})}
                />
                 <TextInput
                    placeholder={"Student's Email"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                    onChangeText={student_email=>this.setState({student_email})}
                />

                <Button
                    title={"Save Record"}
                    onPress={this.InsertRecord}
                />

            </View>
        )
    }
}

const styles=StyleSheet.create({

    ViewStyle:{
        flex:1,
        padding: 20,
        marginTop:10,
        top: '25%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20
    }


});