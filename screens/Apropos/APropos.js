import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet ,
  Image,
  ImageBackground,
  ScrollView ,  Card

} from 'react-native';
import logo from "../../assets/images/trylogo.png";

import {Container, Header, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon, Content,Separator} from 'native-base'
import bg from "../../assets/images/trybgg.png";
class APropos extends Component {

  render() {
    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer}  >
     <ScrollView>
     <Header
       style={{
         marginTop: 35,
         backgroundColor: "#283593",
         borderWidth: 1,
         borderBottomColor: "white"
       }}
     >
       <Left>
         <Icon
           name="menu"
           onPress={() => this.props.navigation.openDrawer()}
         />
       </Left>
       <Body>
         <Title> Medicament :</Title>

       </Body>
       <Right >

       </Right>
     </Header>
     <View style={ styles.container}>

         <View style={styles.logoContainer}>

      <Text style = {{
        fontSize:22, fontWeight:'600' ,marginTop :200 }}>
       Votre dossier medical de poche
        </Text>
</View>
<View style={styles.logoContainer}>

















        <Text style = {{  fontSize:20, fontWeight:'500' ,margin :3 , textDecorationLine : 'underline' }}>
     Contact
        </Text>


        <Text style = {{  fontSize:20, fontWeight:'400' ,
     margin : 5 }}>
              Ariana,Tunis
        </Text>

        <Text style = {{  fontSize:20, fontWeight:'400' ,
    margin : 5 }}>
              mediCard@esprit.tn
        </Text>

        <Text style = {{  fontSize:20, fontWeight:'400',
   margin : 5  }}>
              +216 22 222 222
        </Text>

        <Text style = {{  fontSize:20, fontWeight:'500' ,margin :10, textDecorationLine : 'underline' }}>
     Equipe
        </Text>



        <View style = {{  flexDirection: 'row'  }} >
       <View >
       <Image style={styles.avatar}source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
       <Image style={styles.avatar}source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
       <Image style={styles.avatar}source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
       <Image style={styles.avatar}source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

       </View>

       <View  >
       <Text style = {styles.equipeText}>
         Yosra bouajaja
        </Text>
        <Text style = {styles.equipeText}>
             Wiem rebah
        </Text>
        <Text style = {styles.equipeText}>
            Ala eddine jendoubi
        </Text>
        <Text style = {styles.equipeText}>
             takwa hedhly
        </Text>

       </View>


       </View>



       </View>




     </View>
     </ScrollView>
    </ImageBackground>
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
    height:100

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:1,
  },
  equipeText:{
    fontSize:20,
    fontWeight:'400',
    marginTop : 3  ,
    height:50

  }  ,

  Backgroundcontainer :{
    flex : 1 ,

  },



})
