import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PostCard from './PostCard';

export default class PostList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      refreshing: false
    };
  }
  renderItem = ({ item }) => (
    <PostCard {...item} />
    );

  handleRefresh = () => {
    this.setState({refreshing: true});
    this.props.refresh();
  }

  stopRefresh = () => {
    this.setState({refreshing: false});
  }

  EmptyView = () => {
    return (
      <View style={styles.empty}>
        <Text style={{textAlign: 'center'}}>Ничего нет :(</Text>
      </View>
      );
  }

  render() {
    return (
      <FlatList data={this.props.posts} renderItem={this.renderItem}
      onRefresh={this.props.refresh} refreshing={this.state.refreshing}
      ListEmptyComponent={this.EmptyView} />
      );
  }
}

const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
        padding: 10,
        justifyContent: 'center',
    },
    empty: {
        flex: 1,
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});