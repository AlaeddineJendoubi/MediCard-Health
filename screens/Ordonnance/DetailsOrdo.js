import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListView,
  Alert,
  ImageBackground,
  Dimensions,
  Image ,
    ScrollView
} from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
const { width: WIDTH } = Dimensions.get("window");
import {Container, Header, CardItem , Card, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon, Content,Separator} from 'native-base'


class DetailsOrdo extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  renderItem = ({ item }) => {

    return (

      <ScrollView>
      <View style={styles.cardContent} >

        <List  >

         <Header  style={{backgroundColor: "#283593" , width:310, height:40 , margin:10 , alignItems:'center' ,justifyContent : 'center'}}>

         <Text     style={{
               fontFamily: "Ionicons",
               fontSize: 15,
               color: "#FFFFFF",
               textAlign: "center"
             }}
             > Ordonnance de docteur : {" "} {" "} {" "} {" "} {" "} {" "} {" "} {" "} {item.fnmedecin} {item.lnmedecin} {" "}  </Text>

         </Header>
          <ListItem  onPress={() => navigate("DetailsOrdo")}
>

            <Body style={{alignItems:'center' ,justifyContent : 'center'}} >

          <Text>


            Medicaments :   {item.medicamments}
              </Text>




            </Body>
          </ListItem>
          <ListItem footer style={{alignItems:'center' ,justifyContent : 'center'}}>
          <Text>  date : {item.dateordonnance} </Text>
          </ListItem>
        </List>









      </View>
      </ScrollView>
    )
  }










  componentDidMount() {
    // this.fetchData();
    const code = global.code;
    const url = "http://192.168.1.107:3001/users/ordonnances/" + code
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }



 /* static navigationOptions = {

    drawerIcon: ({ tintColor }) => (
      <Icon name="list" style={{
        fontSize: 24,
        color: tintColor
      }} />
    )
  }*/

  render() {
    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer}  >
      <View style={styles.container}>



      </View>
      </ImageBackground>

    );
  }

}

export default DetailsOrdo;

const styles = StyleSheet.create({
  container: {
  marginBottom : 45 ,
    flex: 1,}
    ,

  Backgroundcontainer :{
    flex : 1 ,

  },  cardContent: {
    margin:10,

  },
  box: {

    marginTop : 20 ,
    margin : 5 ,
    fontSize:15,
    fontWeight:'600',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:3
  },

})
