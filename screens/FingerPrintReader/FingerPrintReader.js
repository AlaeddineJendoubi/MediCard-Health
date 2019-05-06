import React, { Component } from 'react';
import { StyleSheet,ImageBackground,    AsyncStorage , TouchableOpacity, Dimensions, Icon , Text,TextInput, View , Image,Button} from 'react-native';
import{Thumbnail} from 'native-base';
import logo from '../../assets/images/trylogo.png'
import bg from '../../assets/images/trybgg.png'
import { LocalAuthentication } from 'expo';

const {width : WIDTH} = Dimensions.get('window')
 class FingerPrintReader extends Component {
  //   onPress={() => this.props.navigation.navigate('Profil')}

  constructor(props){

  super(props);
  this.state = {
    code: '' ,
    idpatient : ''
     }
}
componentDidMount() {
  LocalAuthentication.hasHardwareAsync()
LocalAuthentication.supportedAuthenticationTypesAsync()
LocalAuthentication.isEnrolledAsync()
if(LocalAuthentication.authenticateAsync() == "success")
{
    login()
}


}

  render(){

    const {navigate} = this.props.navigation;

    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer} >
      <View style={styles.logoContainer}>

      <Image  source = {logo} style = {styles.logo}  />
       </View>
       <View>

     <TextInput style={styles.input}
            placeholder="Veuillez saisir votre Code"
            placeholderTextColor ={'black'}
             keyboardType = 'numeric'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(code) => this.setState({code})}
          keyboardShouldPersistTaps={true}/>
      </View>



      <TouchableOpacity style = {styles.btnLogin}
      onPress={this.login}>

       <Text style = {styles.text} >
                 Login
       </Text>
       </TouchableOpacity>


       </ImageBackground>
    );
  }
  nav =() =>{
    this.props.navigation.navigate('FingerPrintReader')
  }
  login = () => {


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
export default FingerPrintReader;
