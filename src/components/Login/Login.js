import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';

export default class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      apiToken: '',
      loading: true,
    }

  }

  async loadToken() {
    try {
      const token = await AsyncStorage.getItem('@LocalStorage:apiToken');
      if (token !== null) {
        this.setState({ apiToken: token });
      } else {
        this.setState({ loading: false });
      }
    } catch (err) {
      console.log('AsyncStorage access error: ', err);
    }
  }

  componentWillMount() {
    this.loadToken()
  }

  render() {
    // Check if we have token, if so - go to main view
    if (this.state.apiToken) {
      Actions.home({ token: this.state.apiToken });
      return null;
    }
    if (!this.state.loading) {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                            <Image resizeMode="contain" style={styles.logo} source={require('../../images/logo.png')} />
                 </View>

                    <View style={styles.formContainer}>
                           <LoginForm />
                    </View>
        </KeyboardAvoidingView>
      );
    }

    // Loading, show splash logo
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.loginContainer}>
                          <Image resizeMode="contain" style={styles.logo} source={require('../../images/logo.png')} />
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
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});