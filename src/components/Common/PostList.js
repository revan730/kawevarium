import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PostCard from './PostCard';

export default class PostList extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.list}>
      {this.props.posts.map((post, index) => (
        <PostCard key={index} {...post} />))}
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
        padding: 10,
        justifyContent: 'center',
    },

});