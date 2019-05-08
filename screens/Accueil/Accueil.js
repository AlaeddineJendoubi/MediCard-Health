import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ListView,
  ImageBackground,
  Dimensions,
  Image
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Icon,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Badge,
  List,
  ListItem,
  Separator
} from "native-base";
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon0 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import CountDown from "react-native-countdown-component";
import moment from "moment";
import "moment/locale/fr";
import bg from "../../assets/images/welcom.png";
import logo from "../../assets/images/meds.gif";
import Iconbtn from "@expo/vector-icons/Ionicons";
import { Permissions, Notifications } from 'expo';
const { width: WIDTH } = Dimensions.get("window");
const PUSH_ENDPOINT = 'http://192.168.1.107:3000/pushTokenSend';
const id = "1";
const ip = "192.168.1.107";
const api = "http://"+ip+":3000/getUserInformation/";
import {registerForPushNotificationsAsync} from  "../../screens/serv/index";




class Accueil extends Component {
  state = {
    data: [],
    catchUserId: '',
    userName :''
  };


  fetchData = async () => {
    const id = global.code
    const response = await fetch(api+id); //Api link
    const rendezvous = await response.json(); //fetching response into rendezvous
    this.setState({ data: rendezvous }); //Setting it into state
  };

  componentWillMount(){
    registerForPushNotificationsAsync();
  }

  componentDidMount() {
  //  const idpatient = global.idpatient ;
    this.fetchData();
  }

  render() {
    const { navigate } = this.props.navigation;
    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date = moment(today).format("MMMM D, YYYY");
    return (
      <Container>
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
            <Title>Bienvenue :</Title>
            <Subtitle>{this.state.userName}</Subtitle>
          </Body>
          <Right />
        </Header>
        <ImageBackground source={bg} style={styles.Backgroundcontainer}>
          <Content>

            <View
                          style={{
                            alignItems: "center",
                            marginTop: 5,
                            justifyContent: "center"
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              textAlign: "center",
                              fontSize: 25,
                              marginTop: 35,
                              fontWeight: "bold",
                              color: "#0c75b0"
                            }}
                          >
                            Bienvenue dans votre compagnon
                          </Text>
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
                            de santé personnel MediCard{" "}
                          </Text>
                          <Image source={logo} style={styles.logo} />

              <FlatList
                data={this.state.data} //Getting the data stored from the response in the state
                keyExtractor={(item, index) => index.toString()} //Key used to identify the data
                renderItem={(
                  { item } //Rendering items (expects a JSX Response wich is our FlatList)
                ) => {
                  var dates = item.date; //Getting the date from db and it will be humanized
                  var dateNow = date;
                  var s = dates - dateNow;
                  var idmedecin= item.idmedecin;
                   var tati = item.idpatient ;
                   global.idUserCon = item.idpatient
                  return (
                    <View style={{ flex: 1, color: "red", width: WIDTH }}>

                      <ListItem thumbnail>


                        <Body style={{ marginTop: 15 }}>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#cf1d76",
                              textAlign: "center"
                            }}
                          >
                            Pour consulter ou bien prendre rendez-Vous clicker sur

                          </Text>

                          <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "25%",
                  color: "#0c75b0",
                  marginTop: 15,
                  width: 170
                }}
                onPress={() => navigate("RendezVous")}
              >
                <Iconbtn
                  name="md-calendar"
                  style={{
                    fontSize: 24,
                    marginLeft: 5,
                    borderRadius: 25,
                    color: "white"
                  }}
                />
                <Text>Rendez-Vous</Text>
              </Button>
                        </Body>

                      </ListItem>
                      <ListItem thumbnail>


                        <Body style={{ marginTop: 15 }}>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#cf1d76",
                              textAlign: "center"
                            }}
                          >
                            Pour consulter vos examens medicaux clicker sur

                          </Text>

                          <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "25%",
                  color: "#0c75b0",
                  marginTop: 15,
                  width: 170
                }}
                onPress={() => navigate("ParcoursDeSoin")}
              >
                <Iconbtn
                  name="md-document"
                  style={{
                    fontSize: 24,
                    marginLeft: 5,
                    borderRadius: 25,
                    color: "white"
                  }}
                />
                <Text>Examen medicale</Text>
              </Button>
                        </Body>

                      </ListItem>
                      <ListItem thumbnail>


                        <Body style={{ marginTop: 15 }}>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#cf1d76",
                              textAlign: "center"
                            }}
                          >
                           Pour consulter vos analyses clicker sur

                          </Text>

                          <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "25%",
                  color: "#0c75b0",
                  marginTop: 15,
                  width: 170
                }}
                onPress={() => navigate("Analyses")}
              >
                <Iconbtn
                  name="md-medical"
                  style={{
                    fontSize: 24,
                    marginLeft: 5,
                    borderRadius: 25,
                    color: "white"
                  }}
                />
                <Text>analyses</Text>
              </Button>
                        </Body>

                      </ListItem>
                      <ListItem thumbnail>


                        <Body style={{ marginTop: 15 }}>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#cf1d76",
                              textAlign: "center"
                            }}
                          >
                        Pour consulter vos Ordonnances clicker sur

                          </Text>

                          <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "25%",
                  color: "#0c75b0",
                  marginTop: 15,
                  width: 170
                }}
                onPress={() => navigate("Ordonnance")}
              >
                <Iconbtn
                  name="md-medkit"
                  style={{
                    fontSize: 24,
                    marginLeft: 5,
                    borderRadius: 25,
                    color: "white"
                  }}
                />
                <Text>Ordonnances</Text>
              </Button>
                        </Body>

                      </ListItem>
                      <ListItem thumbnail>


                        <Body style={{ marginTop: 15 }}>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#cf1d76",
                              textAlign: "center"
                            }}
                          >
                            Pour consulter votre profiles clicker sur

                          </Text>

                          <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "25%",
                  color: "#0c75b0",
                  marginTop: 15,
                  width: 170
                }}
                onPress={() => navigate("Profil")}
              >
                <Iconbtn
                  name="ios-man"
                  style={{
                    fontSize: 24,
                    marginLeft: 5,
                    borderRadius: 25,
                    color: "white"
                  }}
                />
                <Text>Profile</Text>
              </Button>
                        </Body>

                      </ListItem>



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
export default Accueil;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Backgroundcontainer: {
    flex: 1,

    alignItems: "center"
  },
  logo: {
    justifyContent: "center",
    width: 300,
    height: 200,
    marginTop: 5
  }
});
