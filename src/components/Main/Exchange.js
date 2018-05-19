import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';
import ToolBar from '../Common/ToolBar';
import { Actions } from 'react-native-router-flux';
import { listExchanges, listLocations } from '../../helpers/reducer';
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
    this.state = {
      location: '',
      token: ''
    };
  }

  async componentDidMount() {
    const token = await loadToken();
    if (token) {
      this.setState({token});
      this.props.listExchanges(token);
      this.props.listLocations(token);
    }
    else Actions.login();
  }

  refresh = () => {
    this.props.listExchanges(this.state.token, this.state.location);
    if (this.list) {
      this.list.stopRefresh();
    }
  }

  locationSelect = (id) => {
    // Reload exchanges with selected location
    this.setState({location: id});

    this.props.listExchanges(this.state.token, id);
  }

  render() {
    const { exchanges } = this.props;
    if (this.props.error) {
      return (
        <View>
          <Text>{this.props.error}</Text>
        </View>)
    }
    if (this.props.loading || this.props.loadingLocs) {
      return (
        <View>
          <Text>Загрузочка...</Text>
        </View>)
    }
    return (
        <View>
          <ToolBar locs={this.props.locations} type="ex"
          select={this.locationSelect} current={this.state.location} />
          <PostList ref={component => this.list = component}
           posts={exchanges} refresh={this.refresh} />
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
  let storedLocations = state.locations.map(loc => ({key: loc.id, ...loc }));

  return {
    exchanges: storedExchanges,
    locations: storedLocations,
    loading: state.loadingEx,
    loadingLocs: state.loadingLocs,
    error: state.errorEx
  };
};

const mapDispatchToProps = {
  listExchanges,
  listLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeScreen);