import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import PostList from '../Common/PostList';

const posts = [
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик' },
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик' },
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик' },
 { type: 'Хочу сделат жрат',
   lack: 'Дайте хоть шото',
   present: 'Сделаю любое хрючево',
   tg: '@povar228',
   phone: '0952281488',
   name: 'Димасик' },
  { type: 'Хочу сделат жрат',
    lack: 'Дайте хоть шото',
    present: 'Сделаю любое хрючево',
    tg: '@povar228',
    phone: '0952281488',
    name: 'Димасик' },
]

export default class Login extends Component {
  render() {
    return (
      <PostList posts={posts} />
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