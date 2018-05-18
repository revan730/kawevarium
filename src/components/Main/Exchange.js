import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';
import ToolBar from '../Common/ToolBar';
import { Actions } from 'react-native-router-flux';
import { listExchanges } from '../../helpers/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import reducer from '../../helpers/reducer';
import backend from '../../config/Backend';
import { loadToken } from '../../helpers/token';

class ExchangeScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const token = await loadToken();
    if (token) {
      this.props.listExchanges(token);
    }
    else Actions.login();
  }

  render() {
    const { exchanges } = this.props;
    if (this.props.error) {
      return (
        <View>
          <ToolBar />
          <Text>{this.props.error}</Text>
        </View>)
    }
    if (this.props.loading) {
      return (
        <View>
          <ToolBar />
          <Text>Loading</Text>
        </View>)
    }
    return (
        <View>
          <ToolBar />
          <PostList posts={exchanges} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
  let storedExchanges = state.exchanges.map(ex => ({ key: ex.id, ...ex }));
  return {
    exchanges: storedExchanges,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = {
  listExchanges
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeScreen);