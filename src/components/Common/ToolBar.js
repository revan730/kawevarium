import React from 'react';
import { StyleSheet, Text, View, StatusBar, Picker, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class ToolBar extends React.Component {
  componentWillMount() {
    StatusBar.setBarStyle('dark-content');
  }

  render() {
    return (
      <View style={styles.bar}>
        <View style={styles.row}>
          <Picker style={styles.picker} itemStyle={{ height: 20 }}
            onValueChange={(value, i) => this.setState({location: value})}>
            <Picker.Item value="Home" label="Моя общага" />
            <Picker.Item value="All" label="Все общаги" />
          </Picker>
          <Text style={styles.addText}
          onPress={this.props.type === 'fab' ? Actions.createFabrication : Actions.createExchange}>
          Добавить</Text>
        </View>
      </View>
      );
  }
}

const logout = async () => {
  try {
    AsyncStorage.removeItem('@LocalStorage:apiToken');
    Actions.login();
  } catch (err) {
    console.log('something went wrong:', err);
  }
} 

const styles = StyleSheet.create({
    bar: {
        height: 60,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'space-between',
    },
    row: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    picker: {
      height: 20,
      width: 200
    },
    addText: {
      fontSize: 18,
      fontFamily: 'Roboto',
      color: '#4c8ef7',
      marginRight: 5
    }
});