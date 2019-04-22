import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Left , Right, Icon, Header ,Body} from 'native-base'


class APropos extends Component {

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name = "ios-information-circle" style ={{ fontSize : 24 ,
      color:tintColor}}/>
    )
  }

  render() {
    return (

     <View style={ styles.container}>
             <Header style={{marginTop:35}}>
            <Left>
                 <Icon name ="menu"  onPress={() =>
                this.props.navigation.openDrawer()
                } />
             </Left>
             <Right>
             </Right>
             <Body>
             </Body>

         </Header>

     <View style ={{ flex:1, alignItems:'center',justifyContent:'center'}}>
           <Text> APropos </Text>
     </View>

     </View>

    );
  }

}

export default APropos;

const styles =StyleSheet.create({
    container : {

      flex: 1,



    }
})
