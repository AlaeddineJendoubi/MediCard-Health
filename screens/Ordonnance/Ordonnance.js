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
import Icon0 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import bg from "../../assets/images/tryb.png";
import logo from "../../assets/images/trylogo.png";
import { createStackNavigator, createAppContainer } from "react-navigation";
const { width: WIDTH } = Dimensions.get("window");
import {Container, Header, CardItem , Card, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon, Content,Separator} from 'native-base'


class Ordonnances extends Component {
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

        <Card >

         <Header  style={{backgroundColor: "#87cefa" , width:310, height:40 , margin:10 , alignItems:'center' ,justifyContent : 'center'}}>

         <Text> Ordonnance de docteur : {item.fnmedecin} {item.lnmedecin}  </Text>

         </Header>
          <CardItem>

            <Body style={{alignItems:'center' ,justifyContent : 'center'}} >

          <Text>

             Liste des medicaments :
              {item.medicamments}
              </Text>




            </Body>
          </CardItem>
          <CardItem footer style={{alignItems:'center' ,justifyContent : 'center'}}>
          <Text>  date : {item.dateordonnance} </Text>
          </CardItem>
        </Card>









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

      <Header style ={{backgroundColor : "#FFFFFF" }}

        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      >

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

export default Ordonnances;

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
