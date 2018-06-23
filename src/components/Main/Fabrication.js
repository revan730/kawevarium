import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';
import ToolBar from '../Common/ToolBar';
import { Actions } from 'react-native-router-flux';
import { listFabs, listLocations } from '../../helpers/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import reducer from '../../helpers/reducer';
import backend from '../../config/Backend';
import { loadToken } from '../../helpers/token';

export class FabricationsScreen extends Component {
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
      this.props.listFabs(token);
      this.props.listLocations(token);
    }
    else {
      Actions.login();
    }
  }

  refresh = () => {
    this.props.listFabs(this.state.token, this.state.location);
    if (this.list) {
      this.list.stopRefresh();
    }
  }

  locationSelect = (id) => {
    // Reload fabs with selected location
    this.setState({location: id});

    this.props.listFabs(this.state.token, id);
  }

  render() {
    const { fabs } = this.props;
    if (this.props.error) {
      return (
        <View style={styles.container}>
          <Text>{this.props.error}</Text>
        </View>)
    }
    if (this.props.loading || this.props.loadingLocs) {
      return (
        <View style={styles.container}>
          <Text>Загрузочка...</Text>
        </View>)
    }
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ToolBar type="fab" locs={this.props.locations}
        select={this.locationSelect} current={this.state.location} />
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
  let storedLocations = state.locations.map(loc => ({key: loc.id, ...loc }));

  return {
    fabs: storedFabs,
    locations: storedLocations,
    loading: state.loadingFabs,
    loadingLocs: state.loadingLocs,
    error: state.errorFabs
  };
};

const mapDispatchToProps = {
  listFabs,
  listLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(FabricationsScreen);