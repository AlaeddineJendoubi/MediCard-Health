import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet , 
  Image} from 'react-native';
  import logo from '../assets/logo.png'
import {Left , Right, Icon, Header } from 'native-base'


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
          <Header style ={{backgroundColor : "#FFFFFF" }} >
            <Left style ={{top:10 , flex:1 }} >
                 <Icon name ="menu"  onPress={() =>
                this.props.navigation.openDrawer()
                } />
             </Left>
         </Header>

         <View style={styles.logoContainer}>
      <Image  source = {logo} style = {styles.logo}  />
       </View>

      
     </View>

    );
  }

}

export default APropos;

const styles =StyleSheet.create({
    container : {

      flex: 1,  }

      ,

  logoContainer:{
   
    alignItems : 'center'
    , marginTop : 20
  } ,

  logo:{
    width:160,
    height:120 
  
  }

  

})
