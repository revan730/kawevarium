import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostCard extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.titleWant}>Чего нет: {this.props.lacks}</Text>
        <Text style={styles.title}>Что есть (хочу): {this.props.present}</Text>
        <View style={styles.row}>
          <Icon style={styles.icon} size={18} name="question"/>
          <Text style={styles.type}>{this.props.type}</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} size={18} name="home"/>
          <Text style={styles.type}>{this.props.author.location}</Text>
        </View>
        <View style={{
           borderBottomColor: 'black', 
           borderBottomWidth: 0.5,
           marginBottom: 5}}>
        </View>
        <View style={styles.rowContacts}>
          <View style={styles.row}>
            <Icon name="user" style={styles.icon}/>
            <Text>{this.props.author.name}</Text>
          </View>
          {this.props.author.telegram ? (<View style={styles.row}>
            <Icon name="telegram" style={styles.icon}/>
            <Text>{this.props.author.telegram} </Text>
          </View>) : null}
          {this.props.author.phone ? (<View style={styles.row}>
            <Icon name="phone" style={styles.icon}/>
            <Text>{this.props.author.phone}</Text>
          </View>) : null}
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 5,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    row: {
      flexDirection: 'row',
    },
    rowContacts: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    icon: {
      paddingRight: 5,
    },
    title: {
      color: '#4c8ef7',
      fontSize: 18,
      fontFamily: 'Roboto',
      paddingBottom: 5
    },
    titleWant: {
      color: '#ef3f0e',
      fontFamily: 'Roboto',
      fontSize: 18,
      paddingBottom: 5
    },
    type: {
      fontSize: 16,
      fontFamily: 'Roboto',
      paddingBottom: 5,
    },
});