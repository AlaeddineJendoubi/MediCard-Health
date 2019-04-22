import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Left , Right, Icon, Header } from 'native-base'


class Ordonnance extends Component {
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
          this is Ordonnance
        </Text>
      </View>
    );
  }
}
export default Ordonnance;
