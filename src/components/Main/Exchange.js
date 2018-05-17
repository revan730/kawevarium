import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';
import ToolBar from '../Common/ToolBar';


const posts = [
  { type: 'Меняю хавчик на хавчик',
    lack: 'Дошик с курицей',
    present: 'Дошик с сыром',
    tg: '@povar228',
    phone: '0952281488',
    name: 'Димасик',
    location: 'Общага 6' },
  { type: 'Меняю хавчик на хавчик',
    lack: 'Дошик с курицей',
    present: 'Дошик с сыром',
    tg: '@povar228',
    phone: '0952281488',
    name: 'Димасик',
    location: 'Общага 6' },
  { type: 'Меняю хавчик на хавчик',
    lack: 'Дошик с курицей',
    present: 'Дошик с сыром',
    tg: '@povar228',
    phone: '0952281488',
    name: 'Димасик',
    location: 'Общага 3' },
  { type: 'Меняю хавчик на хавчик',
    lack: 'Дошик с курицей',
    present: 'Дошик с сыром',
    tg: '@povar228',
    phone: '0952281488',
    name: 'Димасик',
    location: 'Общага 19' }
]

export default class Login extends Component {
  render() {
    return (
      <View>
        <ToolBar />
        <PostList posts={posts} />
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