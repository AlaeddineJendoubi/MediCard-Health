import React, { Component } from 'react';
import { StyleSheet,ImageBackground, TouchableOpacity, Dimensions, Icon , Text,TextInput, View , Image,Button} from 'react-native';
import{Thumbnail} from 'native-base';
import logo from '../../assets/images/trylogo.png'
import bg from '../../assets/images/trybgg.png'


const {width : WIDTH} = Dimensions.get('window')

 class Login extends Component {
  //   onPress={() => this.props.navigation.navigate('Profil')}
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer} >
      <View style={styles.logoContainer}>

      <Image  source = {logo} style = {styles.logo}  />
       </View>
       <View>
         <TextInput
         style = {styles.input }
         placeholder  = {' Veuillez saisir votre identifiant '}
         placeholderTextColor = {'black'}
         underlineColorAndroid='transparent'
         keyboardType = 'email-address'
       />
       <TextInput
       style = {styles.input }
       placeholder  = {' Veuillez saisir votre mot de passe '}
       placeholderTextColor = {'black'}
       underlineColorAndroid='transparent'
       keyboardType = 'numeric'
     />

       </View>

      <TouchableOpacity style = {styles.btnLogin} onPress={() => navigate('Accueil', {name: 'Jane'})}>

       <Text style = {styles.text} >
                 Login
       </Text>
       </TouchableOpacity>


       </ImageBackground>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Backgroundcontainer :{
    flex : 1 ,
    width : null ,
    height : null ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  },

  logoContainer:{

    alignItems : 'center'
  },

  logo:{
    width:256,
    height:313

  },
  input : {

    width : WIDTH - 55,
    height : 45 ,
    borderRadius: 25 ,
    fontSize : 16 ,
    paddingLeft : 45 ,
    backgroundColor: '#126BA2',
    color: 'rgba(255,255, 255,0.7)',
    marginHorizontal: 25,
    marginTop :40
  } ,

  btnLogin: {
    width : WIDTH - 55,
    height : 45 ,
    borderRadius: 25 ,
    backgroundColor: '#CD1B75' ,
    justifyContent : 'center' ,
    marginTop : 30
  } ,
  text: {
    color : '#ecf0f1' ,
    fontSize : 22 ,
    fontWeight: 'bold' ,
    textAlign: 'center'
  }
});
export default Login;
