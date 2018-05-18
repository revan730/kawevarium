import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, 
  StyleSheet, Alert, AsyncStorage, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import backend  from '../../config/Backend';


export default class LoginForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    if (props.email) {
      this.state.email = props.email;
    }
  }

  onLoginButtonPress = async () => {
    // Login routine
    if (!this.state.email || !this.state.password) {
      ToastAndroid.show('Missing email or password', ToastAndroid.SHORT);
      return;
    }
    try {
      const response = await axios.post(backend.loginUrl, {
        email: this.state.email,
        password: this.state.password
      });

      const token = response.data.token;
      await AsyncStorage.setItem('@LocalStorage:apiToken', token);
      Actions.home({ token });
    } catch (err) {
      if (err.response.status === 400) {
        ToastAndroid.show('Wrong email or password', ToastAndroid.SHORT);
      }
      console.log('something went wrong on login: ', err.response);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input} 
                       autoCapitalize="none"
                       value={this.state.email}
                       onChangeText={value => this.setState({email: value.trim()})}
                       onSubmitEditing={() => this.passwordInput.focus()} 
                       autoCorrect={false} 
                       keyboardType='email-address' 
                       returnKeyType="next" 
                       placeholder='Email' 
                       placeholderTextColor='rgba(225,225,225,0.7)'/>

        <TextInput style = {styles.input}   
                      returnKeyType="go"
                      onChangeText={value => this.setState({password: value.trim()})}
                      ref={(input)=> this.passwordInput = input} 
                      placeholder='Password' 
                      placeholderTextColor='rgba(225,225,225,0.7)' 
                      secureTextEntry/>

        <TouchableOpacity style={styles.buttonContainer} 
                             onPress={this.onLoginButtonPress}>
                     <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} 
                             onPress={onSignButtonPress}>
                     <Text  style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const onSignButtonPress = () => {
  Actions.register();
};

const styles = StyleSheet.create({
   container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});