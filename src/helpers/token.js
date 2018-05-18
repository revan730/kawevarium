import {AsyncStorage} from 'react-native';

module.exports.loadToken = async function loadToken() {
  try {
    const token = await AsyncStorage.getItem('@LocalStorage:apiToken');
    if (token !== null) {
      return token
    } else {
      return null;
    }
  } catch (err) {
    console.log('AsyncStorage access error: ', err);
    return null;
  }
}