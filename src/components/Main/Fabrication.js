import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';
import ToolBar from '../Common/ToolBar';
import { Actions } from 'react-native-router-flux';
import { listFabs } from '../../helpers/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import reducer from '../../helpers/reducer';
import backend from '../../config/Backend';
import { loadToken } from '../../helpers/token';

const posts = [
 { type: 'Хочу сделат жрат',
   lacks: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   author: {
    telegram: '@povar228',
    phone: '0952281488',
    name: 'Димасик',
    location: 'Общага 6'
   } },
]

export class FabricationsScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const token = await loadToken();
    if (token) {
      this.setState({token});
      this.props.listFabs(token);
    }
    else {
      Actions.login();
    }
  }

  refresh = () => {
    this.props.listFabs(this.state.token);
    if (this.list) {
      this.list.stopRefresh();
    }
  }

  render() {
    const { fabs } = this.props;
    if (this.props.error) {
      return (
        <View>
          <ToolBar type="fab" />
          <Text>{this.props.error}</Text>
        </View>)
    }
    if (this.props.loading) {
      return (
        <View>
          <ToolBar type="fab" />
          <Text>Loading</Text>
        </View>)
    }
    return (
      <View>
        <ToolBar type="fab" />
        <PostList ref={component => this.list = component}
         posts={fabs} refresh={this.refresh} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
  let storedFabs = state.fabs.map(fab => ({ key: fab.id, ...fab }));
  return {
    fabs: storedFabs,
    loading: state.loadingFabs,
    error: state.errorFabs
  };
};

const mapDispatchToProps = {
  listFabs
};

export default connect(mapStateToProps, mapDispatchToProps)(FabricationsScreen);