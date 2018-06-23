import React from 'react';
import { StyleSheet, Text, View, StatusBar, Picker, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class ToolBar extends React.Component {
  constructor(props){
    super(props);

    if (this.props.current) {
      this.state = {
        location: this.props.current
      };
    } else {
      this.state = {
        location: -1
      }
    }
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }

  changeLocation(id) {
    this.setState({location: id});
    this.props.select(id);
  }

  render() {
    return (
      <View style={styles.bar}>
        <View style={styles.row}>
          <Picker selectedValue={this.state.location}
           style={styles.picker} itemStyle={{ height: 20 }}
            onValueChange={(value, i) => this.changeLocation(value)}>
            <Picker.Item label='Все общаги' value={-1} key={0} />
            {this.props.locs.map((loc, i) => (
              <Picker.Item label={loc.name} value={loc.id}
              key={loc.id} />))}
          </Picker>
          <Text style={styles.addText} onLongPress={logout}
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