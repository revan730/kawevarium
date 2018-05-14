import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, 
  StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input} 
                       autoCapitalize="none" 
                       onSubmitEditing={() => this.passwordInput.focus()} 
                       autoCorrect={false} 
                       keyboardType='email-address' 
                       returnKeyType="next" 
                       placeholder='Email' 
                       placeholderTextColor='rgba(225,225,225,0.7)'/>

        <TextInput style = {styles.input}   
                      returnKeyType="go" 
                      ref={(input)=> this.passwordInput = input} 
                      placeholder='Password' 
                      placeholderTextColor='rgba(225,225,225,0.7)' 
                      secureTextEntry/>

        <TouchableOpacity style={styles.buttonContainer} 
                             onPress={onLoginButtonPress}>
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

const onLoginButtonPress = async () => {
  // Login routine
  try {
    await AsyncStorage.setItem('@LocalStorage:apiToken', 'something');
    Actions.home({ token: 'something' });
  } catch (err) {
    console.log('something went wrong on login: ', err);
  }
};

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