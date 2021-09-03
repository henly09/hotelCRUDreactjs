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
    ProgressViewIOSComponent
} from 'react-native';

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

    func_combined(){
        this.DeleteRecord();
        this.componentDidMount();
    };

/*------------------------------------------------------------------------------*/
    DeleteRecord=()=>
    {
        var StudentID=this.state.StudentID;

        if(StudentID==0)
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
            <Text style={styles.text}>ID#:{item.StudentID}, Name:{item.student_name}, Course:{item.student_course}</Text>
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
        <View style={styles.viewStyle}>
            <TextInput
                placeholder={"Enter Student ID#"}
                placeholderTextColor={"#ff0000"}
                keyboardType={"numeric"}
                style={styles.txtStyle}
                onChangeText={StudentID=>this.setState({StudentID})}
            />
            <Button
                title={"Delete Record"}
                onPress={() => this.func_combined()}
            />
            <SafeAreaView style={styles.container}>     
                   <FlatList
                      data={ this.state.dataSource }       
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />                
            </SafeAreaView>
        </View>
    );
    }
}
}

const styles=StyleSheet.create({

    viewStyle:
    {
        flex:1,
        padding:20,
        marginTop:20,
        top: '5%'
    },

    txtStyle:
    {

        borderBottomWidth:1,
        borderBottomColor:'red',
        marginBottom: 30,

    },
      
    container :{
        justifyContent: 'center',
        flex:1,
        alignItems:'flex-start',
        backgroundColor: '#F5FCFF',
        margin: 20,
        padding: 10,
        top: 5,
        },
         welcome:{
           fontSize: 20,
           textAlign: 'center',
           margin:10  
         },
        item:{
            padding: 5,
            borderBottomWidth:1,
            borderBottomColor: '#eee'
        },
        text:{
            fontSize: 12
        }



});

