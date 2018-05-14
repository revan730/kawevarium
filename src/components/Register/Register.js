import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image,
 KeyboardAvoidingView, TouchableOpacity, ToastAndroid, Alert, Picker } from 'react-native';

import validate from '../../helpers/validationWrapper';
import validation from '../../helpers/validation';
import { Actions } from 'react-native-router-flux';

export default class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      validError: '',
      email: '',
      password: '',
      passwordConf: '',
      name: '',
      surname: '',
      tg: '',
      phone: '',
      location: '',
      locations: ''
    };
  }

  register = () => {
    // Register routine
    if (this.state.validError) {
      ToastAndroid.show(this.state.validError, ToastAndroid.SHORT);
    }

    // Validation OK

  };

  render() {
    return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.loginContainer}>
                          <Image resizeMode="contain" style={styles.logo} source={require('../../images/logo.png')} />
               </View>
                  <View style={styles.formContainer}>
                          <TextInput style = {styles.input} 
                                         autoCapitalize="none"
                                         onChangeText={value => this.setState({email: value.trim()})}
                                         onSubmitEditing={() => this.passwordInput.focus()} 
                                         autoCorrect={false} 
                                         onBlur={() => {
                                           this.setState({
                                             validError: validate('email', this.state.email)
                                            })
                                         }}
                                         keyboardType='email-address' 
                                         returnKeyType="next" 
                                         placeholder='Email' 
                                         placeholderTextColor='rgba(225,225,225,0.7)'/>

                          <TextInput style = {styles.input}   
                                        returnKeyType="next"
                                        ref={(input)=> this.passwordInput = input}
                                        onBlur={() => {
                                          this.setState({
                                            validError: validate('password', this.state.password)
                                           })
                                        }}
                                        onChangeText={value => this.setState({password: value.trim()})}
                                        onSubmitEditing={() => this.passwordConfInput.focus()}
                                        placeholder='Password' 
                                        placeholderTextColor='rgba(225,225,225,0.7)' 
                                        secureTextEntry/>

                          <TextInput style = {styles.input}   
                                        returnKeyType="next"
                                        onChangeText={value => this.setState({passwordConf: value.trim()})}
                                        ref={(input)=> this.passwordConfInput = input}
                                        onSubmitEditing={() => this.nameInput.focus()}
                                        placeholder='Repeat password' 
                                        placeholderTextColor='rgba(225,225,225,0.7)' 
                                        secureTextEntry/>

                         <TextInput style = {styles.input}   
                                       returnKeyType="next"
                                       onBlur={() => {
                                         this.setState({
                                           validError: validate('name', this.state.name)
                                          })
                                       }}
                                       onChangeText={value => this.setState({name: value.trim()})}
                                       ref={(input)=> this.nameInput = input}
                                       onSubmitEditing={() => this.surnameInput.focus()}
                                       placeholder='Name' 
                                       placeholderTextColor='rgba(225,225,225,0.7)'/>

                         <TextInput style = {styles.input}   
                                       returnKeyType="next"
                                       onBlur={() => {
                                         this.setState({
                                           validError: validate('surname', this.state.password)
                                          })
                                       }}
                                       onChangeText={value => this.setState({surname: value.trim()})}
                                       ref={(input)=> this.surnameInput = input}
                                       onSubmitEditing={() => this.tgInput.focus()}
                                       placeholder='Surname' 
                                       placeholderTextColor='rgba(225,225,225,0.7)'/>

                          <TextInput style = {styles.input}   
                                        returnKeyType="next"
                                        error={this.state.tgError}
                                        onChangeText={value => this.setState({tg: value.trim()})}
                                        ref={(input)=> this.tgInput = input}
                                        onSubmitEditing={() => this.phoneInput.focus()}
                                        placeholder='Telegram username (optional)' 
                                        placeholderTextColor='rgba(225,225,225,0.7)'/>

                          <TextInput style = {styles.input}   
                                        returnKeyType="go"
                                        error={this.state.phoneError}
                                        onChangeText={value => this.setState({phone: value.trim()})}
                                        ref={(input)=> this.phoneInput = input} 
                                        placeholder='Phone (optional)' 
                                        placeholderTextColor='rgba(225,225,225,0.7)'/>

                          <Picker style={styles.input}
                            selectedValue={this.state.location}
                            onValueChange={(value, i) => this.setState({location: value})}>
                            <Picker.Item label="KPI" value="KPI" />
                          </Picker>

                          <TouchableOpacity style={styles.buttonContainer} 
                                               onPress={this.register}>
                                       <Text  style={styles.buttonText}>REGISTER</Text>
                          </TouchableOpacity>
                  </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#2c3e50',
    },
    formContainer: {
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
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 75
    }
});