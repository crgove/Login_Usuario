import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            userF: '',
            passwordF: '',
            mostrar: false,
            mensaje: ''
        }
    }

    guardarUser=(user)=>{
        this.setState({userF: user});
    }

    guardarPassword=(pass)=>{
        this.setState({passwordF: pass})
    }

    comprobarPassword =()=>{

        this.setState({mostrar: true});

        if(this.state.passwordF === '1234'){
            //Alert.alert('ESTAS DENTRO')
            this.setState({mensaje: 'ESTAS DENTRO'})
        } else if( this.state.passwordF !== '1234' && this.state.passwordF !== ''){
            //Alert.alert('NO PUEDES ENTRAR!!');
            this.setState({mensaje: 'NO PUEDES ENTRAR'})
        } else if(this.state.passwordF === ''){
            //Alert.alert('TU PASSWORD????');
            this.setState({mensaje: 'TU PASSWORD???'})
        }
    }


    //UNA FORMA
    /*render(){
        return(
            <View>
                <TextInput placeholder="USER" onChangeText={this.guardarUser} />
                <TextInput placeholder="PASSWORD" onChangeText={this.guardarPassword}/>
                <View style={{alignItems: 'center',backgroundColor: '#DDDDDD',padding: 10}}>
                    <TouchableOpacity
                        onPress={this.onPress}
                    />
                    <Text>LOGIN</Text>
                </View>
                <View>
                    {
                        this.state.passwordF === '1234'
                        ?
                        <Text>ESTAS DENTRO!!!</Text>
                        :
                        this.state.passwordF !== '1234' && this.state.passwordF !== ''
                        ?
                        <Text>NO PUEDES ENTRAR</Text>
                        :
                        <Text></Text>
                    }
                </View>
            </View>
        )
    }*/

    //OTRA FORMA
    /*render(){
        return(
            <View>
                <TextInput placeholder="USER" onChangeText={this.guardarUser} />
                <TextInput placeholder="PASSWORD" onChangeText={this.guardarPassword}/>
                <View style={{alignItems: 'center',backgroundColor: '#DDDDDD',padding: 10}}>
                    <Button title="LOGIN"
                        onPress={this.comprobarPassword}
                    />
                </View>
            </View>
        )
    }*/


    render(){
        return(
            <View>
                {
                    this.state.mostrar === false 
                    ?
                    <View>
                        <TextInput placeholder="USER" onChangeText={this.guardarUser} />
                        <TextInput placeholder="PASSWORD" onChangeText={this.guardarPassword}/>
                        <View style={{alignItems: 'center',backgroundColor: '#DDDDDD',padding: 10}}>
                            <Button title="LOGIN"
                                onPress={this.comprobarPassword}
                            />
                        </View>
                    </View>
                    : 
                    <View>
                        <Text>{this.state.mensaje}</Text>
                    </View>
                    
                }
                
            </View>
        )
    }
}

