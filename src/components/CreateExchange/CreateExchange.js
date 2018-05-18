import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image,
 KeyboardAvoidingView, TouchableOpacity, ToastAndroid, Alert, Picker } from 'react-native';

import validate from '../../helpers/validationWrapper';
import validation from '../../helpers/validation';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import backend  from '../../config/Backend';
import { loadToken } from '../../helpers/token';

export default class CreateExchange extends Component {

  constructor(props) {
    super(props)

    this.state = {
      token: '',
      lacks: '',
      present: '',
      type: '',
      types: []
    };
  }

  loadTypes = async () => {
    try {
      const response = await axios.get(backend.exTypesUrl);
      console.log(response.data);
      this.setState({ types: response.data })

    } catch (err) {
      console.log('something went wrong on types load: ', err.response);
    }
  }

  register = async () => {
    try {
      const response = await axios.post(backend.exchangesUrl, {
        lacks: this.state.lacks,
        present: this.state.present,
        type: this.state.type
      }, {
        headers: {
          Authorization: `FICT ${this.state.token}`
        }
      });

      Actions.home();

    } catch (err) {
      if (err.response.status === 400) {
        ToastAndroid.show('Something is wrong, try again',
         ToastAndroid.SHORT);
      }
      console.log('something went wrong on post: ', err.response);
    }
  };

  async componentDidMount() {
    this.loadTypes();
    token = await loadToken();
    if (token) {
      this.setState({token});
    } else {
      Actions.login();
    } 
  }

  render() {
    return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                  <View style={styles.formContainer}>
                          <TextInput style = {styles.input}   
                                        returnKeyType="next"
                                        onChangeText={value => this.setState({lacks: value.trim()})}
                                        placeholder='Чего не хватает/что хочу' />

                          <TextInput style = {styles.input}   
                                        returnKeyType="go"
                                        onChangeText={value => this.setState({present: value.trim()})}
                                        ref={(input)=> this.passwordConfInput = input}
                                        placeholder='Что могу сделать/что есть' />

                          <Picker style={styles.input}
                            selectedValue={this.state.type}
                            onValueChange={(value, i) => this.setState({type: value})}>
                            {this.state.types.map((type, i) => (
                              <Picker.Item label={type} value={type}
                              key={i} />))}
                          </Picker>

                          <TouchableOpacity style={styles.buttonContainer} 
                                               onPress={this.register}>
                                       <Text  style={styles.buttonText}>Запостить</Text>
                          </TouchableOpacity>
                  </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1
    },
    formContainer: {
      padding: 20
    },
    input:{
        height: 40,
        marginBottom: 10,
        padding: 10,
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