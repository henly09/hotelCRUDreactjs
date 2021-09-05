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
    ImageBackground
} from 'react-native';
import school from '../assets/school.png';

export default class StudentDelete extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            StudentID:''
        }
        this.state = { 
            isLoading: true,
            dataSource:[]
          }
    }

/*------------------------------------------------------------------------------*/
    DeleteRecord=()=>
    {
        var StudentID=this.state.StudentID;

        if(StudentID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/Final_Proj/delete.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                StudentID:StudentID
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
     const responseJson = await fetch('http://10.0.2.2:80/Final_Proj/displayall.php')
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

 _renderItem = ({ item }) => (
     
    <TouchableOpacity onPress={() => alert(item.body)}>
        <View style={styles.item}>
            <Text style={styles.text}>ID#:{item.StudentID},     Name:{item.student_name},       Course:{item.student_course}</Text>
        </View>
    </TouchableOpacity>
 );

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
                title={"Delete Record"}
                onPress={() => this.DeleteRecord()}
            />
            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{padding: 10}}
                      data={ this.state.dataSource }       
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
        marginTop:100,
        marginBottom: 130,
        top: '2%',
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'black',
        marginBottom: 30,
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
            paddingBottom: 10,
            borderBottomWidth:2,
            borderBottomColor: '#eee',
        },

    text:{
            fontSize: 15
        }



});

