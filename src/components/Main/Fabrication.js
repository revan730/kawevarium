import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';
import ToolBar from '../Common/ToolBar';

const posts = [
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик',
   location: 'Общага 6' },
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик',
   location: 'Общага 3' },
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик',
   location: 'Общага 19' },
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик',
   location: 'Общага 6' },
  { type: 'Хочу сделат жрат',
    lack: 'Дайте хоть шото',
    present: 'Сделаю любое хрючево',
    tg: '@povar228',
    phone: '0952281488',
    name: 'Димасик',
    location: 'Общага 6' },
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});