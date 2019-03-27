import React, { Component } from 'react';
import {  View,ImageBackground ,StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Subtitle } from 'native-base';
import bg from '../../assets/images/try.png'
import { Font } from 'expo';
class Consulter extends Component {

  render() {
      const {navigate} = this.props.navigation;
    return (

      <Container >

      <ImageBackground source={bg}  style={styles.Backgroundcontainer} >

             <Content style={{marginTop:35}}>
               <Text style={{ fontFamily: 'Ionicons',  textAlign: 'center',fontSize: 25 ,marginTop:35,marginHorizontal: 10}}>
                Bienvenue dans votre moniteur
                </Text>
                <Text style={{ fontFamily: 'Ionicons', textAlign: 'center', fontSize: 25 ,marginTop:10,marginHorizontal: 15}}>
                  de santé personnel MediCard
                </Text>
                <View style={{marginTop:40 , justifyContent:'center',alignItems:'center' }}>


                </View>
             </Content>
            
                </ImageBackground>
           </Container>

        );
      }
    }

    const styles = StyleSheet.create({
      Backgroundcontainer :{
        flex : 1 ,
        width : null ,
        height : null ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
      }
    });
      export default Consulter;
