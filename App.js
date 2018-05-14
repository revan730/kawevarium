import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Main from './src/components/Main/Main';
import Fabrication from './src/components/Main/Fabrication';
import Exchange from './src/components/Main/Exchange';


class TabIcon extends React.Component {
  render() {
    const color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} initial='true'
          hideNavBar title="Login"/>
          <Scene key="register" component={Register} hideNavBar
           title="Register"/>
          <Scene key="home" type={ActionConst.RESET}>
             <Scene key="tabbar" tabs={true} showLabel={true} tabBarPosition="bottom" tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
               <Scene key="fabricationTab" iconName="cubes" title="Fabrication" hideNavBar icon={TabIcon} component={Fabrication}/>
               <Scene key="exchangeTab" iconName="handshake-o" title="Exchange" hideNavBar icon={TabIcon} component={Exchange}/>
             </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('App', () => App);