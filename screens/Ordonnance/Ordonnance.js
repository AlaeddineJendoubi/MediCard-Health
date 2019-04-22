import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground
} from "react-native";
import { Left, Right, Icon, Header, Card, CardItem, Body } from 'native-base'
import bg from "../../assets/images/c.jpg";
//import { Card } from 'react-native-elements';


class Ordonnance extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  renderItem = ({ item }) => {
    return (


      <View>


        <Card >
      
         <Header  style={{backgroundColor: "#87cefa"}}>
         <Text> Ordonnance de docteur : {item.fnmedecin} {item.lnmedecin}  </Text>
     
         </Header>
          <CardItem>
            <Body>
            <Text>
             
               Liste des medicaments : {item.medicaments}
                </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Text>  date : {item.dateconsulation} </Text>
          </CardItem>
        </Card>








      </View>
    )
  }










  componentDidMount() {
    // this.fetchData();
    const code = global.code;
    const url = "http://192.168.43.33:3000/users/ordonnances/" + code
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



  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="list" style={{
        fontSize: 24,
        color: tintColor
      }} />
    )
  }
  
  render() {
    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer}  >
      <View style={styles.container}>
    
      <Header style ={{backgroundColor : "#FFFFFF" }} >
          <Left style ={{top:10 , flex:1 }} >
            <Icon name ="menu"  onPress={() =>
                        this.props.navigation.openDrawer()} />
            </Left>
         
          </Header>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) =>
              index.toString()}
          />

        </View>
      
      </View>
      </ImageBackground>

    );
  }

}

export default Ordonnance;

const styles = StyleSheet.create({
  container: {

    flex: 1,}
    ,

  Backgroundcontainer :{
    flex : 1 ,
   
  },
})
