import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Left , Right, Icon, Header } from 'native-base'


class Prendre extends Component {
  static navigationOptions ={
    drawerIcon: ({tintColor}) => (
      <Icon name = "folder" style ={{ fontSize : 24 ,
        color:tintColor}}/>
      )
  }
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Text>
          this is prendre
        </Text>
      </View>
    );
  }
}
export default Prendre;
