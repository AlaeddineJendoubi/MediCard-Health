import React, { Component } from 'react';
import { StyleSheet,
  ImageBackground, 
  TouchableOpacity,
   Dimensions, Icon , 
   Text,TextInput, View , 
   AsyncStorage ,
   Image} from 'react-native';
   import logo from '../../assets/images/trylogo.png'
   import bg from '../../assets/images/trybgg.png'


const {width : WIDTH} = Dimensions.get('window')

 class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      code: '' , 
      name: '' , }
  }

  //for the test comment this function 
/* 
 componentDidMount(){
    this._loadInitialState().done();
 }*/
 
  _loadInitialState = async () => {
      var value = await AsyncStorage.getItem('user');
      if (value !== null ){
        this.props.navigation.navigate('Accueil');
      }
  }
  
  render() {
    //const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer} > 
      <View style={styles.logoContainer}>
      <Image  source = {logo} style = {styles.logo}  />
       </View>
       <View>
         <TextInput 
         style = {styles.input } 
         placeholder  = {''}
         secureTextEntry = {true}
         underlineColorAndroid='transparent'
         keyboardType = 'numeric'
         onChangeText = {(code) => this.setState({code})}
       />

       </View>

       <TouchableOpacity
        style = {styles.btnLogin}
        onPress={this.login}>
       
       <Text style = {styles.text} >
                 Login 
       </Text>
       </TouchableOpacity>
     
       </ImageBackground>
    );
  }

  login = () => {
   // alert (this.state.code);
  fetch('http://192.168.43.33:3000/users' , {
    method: 'POST' ,
    headers: {
      'Accept' : 'application/json' ,
      'Content-Type' : 'application/json' ,

    } ,
    body : JSON.stringify({
      code : this.state.code ,
      name: this.state.name
    })
  })
      .then((response) => response.json())
      .then((res) => {

      

        if (res.success === true){
          AsyncStorage.setItem('user' , res.user)
          this.props.navigation.navigate('Accueil')
          global.code = this.state.code

        } else {
          alert(res.message);
        }
      }) .done();
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
    width:160,
    height:120 
  
  }, 
  input : {
  
    width : WIDTH - 55,
    height : 45 ,
    borderRadius: 25 ,
    fontSize : 16 ,
    paddingLeft : 45 ,
    backgroundColor: '#34e7e4',
    color: 'rgba(255,255, 255,0.7)',
    marginHorizontal: 25
  } , 

  btnLogin: {
    width : WIDTH - 55,
    height : 45 ,
    borderRadius: 25 ,
    backgroundColor: '#1e272e' ,
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
