import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './screens/Accueil'
import Login from './screens/Login'
import {createStackNavigator, createAppContainer} from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
     <MyApp />
    );
  }
}

const MainNavigator = createStackNavigator({

  Login: {screen: Login},
  Accueil: {screen: Accueil},
},

{
  mode: 'modal',
  headerMode: 'none',
}
);

const MyApp = createAppContainer(MainNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
