import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Left , Right, Icon, Header } from 'native-base'


class Consulter extends Component {
   navigationOptions ={
    drawerIcon: ({tintColor}) => (
      <Icon name = "folder" style ={{ fontSize : 24 ,
        color:tintColor}}/>
      )
  }
  render(){
    return(
      <View style={{alignItems:'center',fontSize:50}}>
        <Text>
          this is consulter
        </Text>
      </View>
    );
  }
}
export default Consulter;
