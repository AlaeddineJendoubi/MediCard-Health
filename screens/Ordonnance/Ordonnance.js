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
  Image
} from "react-native";
import Icon0 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import bg from "../../assets/images/tryb.png";
import logo from "../../assets/images/trylogo.png";
import { createStackNavigator, createAppContainer } from "react-navigation";
const { width: WIDTH } = Dimensions.get("window");
import {Container, Header, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon, Content,Separator} from 'native-base'


class Ordonnance extends Component {

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name = "folder" style ={{ fontSize : 24 ,
      color:tintColor}}/>
    )
  }
  state = {
    data:[]
  }
  fetchData= async()=>{
    const response = await fetch('http://192.168.1.107:3000/GetOrdonnance/2');
    const parcoursoin =await response.json();
    this.setState({data:parcoursoin});
  }

  componentDidMount()
  {
    this.fetchData();
  }
  render() {
const { navigate } = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={bg} style={styles.Backgroundcontainer}>
          <Content>
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
              <Title>Examen medicale :</Title>

            </Body>
            <Right />
          </Header>
            <View style={{ flex: 1 ,alignItems:"center"}}>
  <Image source={logo} style={styles.logo} />
  <Text
  style={{
    fontFamily: "Ionicons",
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
    color: "#0c75b0"
  }}
  >
  Listes des examens medicaux
  </Text>
              <FlatList
                data={this.state.data} //Getting the data stored from the response in the state
                keyExtractor={(item, index) => index.toString()} //Key used to identify the data
                renderItem={(
                  { item } //Rendering items (expects a JSX Response wich is our FlatList)
                ) => {
                  var dates = item.dateconsulation; //Getting the date from db and it will be humanized


                  return (
                    <View style={{ flex: 1, color: "red", width: WIDTH }}>

                      <ListItem thumbnail>
                        <Left style={{ marginTop: 15 }}>
                          <Icon0
                            active
                            name="doctor"
                            style={{ fontSize: 24, justifyContent: "center" }}
                          />
                        </Left>

                        <Body style={{ marginTop: 15 }}>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#0c75b0",
                              textAlign: "center"
                            }}
                          >
                            Date d'Ordonnance :
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 15,
                              fontWeight: "bold",
                              color: "#cf1d76",
                              textAlign: "center"
                            }}
                          >
                             {item.dateordonnance}
                          </Text>
                        </Body>
                        <Right style={{ marginTop: 15 }}>

                        </Right>
                      </ListItem>

                      <Separator bordered>

         </Separator>
                    </View>
                  );
                }}
              />
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }

}

export default Ordonnance;

const styles =StyleSheet.create({
    container : {

      flex: 1,



    },
    Backgroundcontainer: {
      flex: 1,

      alignItems: "center"
    },
    logo: {
      justifyContent: "center",
      width: 128,
      height: 155,
      marginTop: 5
    }
})
