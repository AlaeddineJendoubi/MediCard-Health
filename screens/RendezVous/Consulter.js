import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ListView,
  ImageBackground,
  Dimensions
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
  ListItem
} from "native-base";
import Icon0 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import CountDown from "react-native-countdown-component";
import moment from "moment";
import "moment/locale/fr";
import bg from "../../assets/images/tryb.png";
const { width: WIDTH } = Dimensions.get("window");

class Consulter extends Component {
  state = {
    data: []
  };
  fetchData = async () => {
    const response = await fetch("http://192.168.1.4:3000/rendezvousValider/1"); //Api link
    const rendezvous = await response.json(); //fetching response into rendezvous
    this.setState({ data: rendezvous }); //Setting it into state
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date = moment(today).format("MMMM D, YYYY");
    return (
      <Container>
        <ImageBackground source={bg} style={styles.Backgroundcontainer}>
          <Content>
            <View style={{ flex: 1 }}>
              <FlatList
                data={this.state.data} //Getting the data stored from the response in the state
                keyExtractor={(item, index) => index.toString()} //Key used to identify the data
                renderItem={(
                  { item } //Rendering items (expects a JSX Response wich is our FlatList)
                ) => {
                  var dates = item.date; //Getting the date from db and it will be humanized
                  var dateNow = date;
                  var s = dates - dateNow;

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
                            Votre rendez-vous avec
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
                            Dr. {item.lnmedecin} {item.fnmedecin}
                          </Text>
                        </Body>
                      </ListItem>
                      <ListItem thumbnail>
                        <Left>
                          <Icon0
                            active
                            name="calendar-clock"
                            style={{ fontSize: 24, justifyContent: "center" }}
                          />
                        </Left>
                        <Body>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#0c75b0",
                              textAlign: "center"
                            }}
                          >
                            à la date du
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
                            {moment(dates)
                              .locale("fr")
                              .format("LLLL")}
                          </Text>
                        </Body>
                      </ListItem>
                      <ListItem thumbnail>
                        <Left>
                          <Icon0
                            active
                            name="calendar-remove"
                            style={{ fontSize: 24, justifyContent: "center" }}
                          />
                        </Left>
                        <Body>
                          <Text
                            style={{
                              fontFamily: "Ionicons",
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#0c75b0",
                              textAlign: "center"
                            }}
                          >
                            ça va expirer
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
                            {moment(dates)
                              .locale("fr")
                              .fromNow()}
                          </Text>
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
export default Consulter;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Backgroundcontainer: {
    flex: 1,

    alignItems: "center"
  }
});
