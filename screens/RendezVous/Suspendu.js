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
import Icon0 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import CountDown from "react-native-countdown-component";
import moment from "moment";
import "moment/locale/fr";
import bg from "../../assets/images/tryb.png";
import logo from "../../assets/images/trylogo.png";
const { width: WIDTH } = Dimensions.get("window");

class Suspendu extends Component {
  state = {
    data: []
  };
  fetchData = async () => {
    const id = global.idUserCon

    const response = await fetch("http://192.168.1.107:3000/rendezvousPinned/"+id);
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
Les rendez-vous qui n'ont pas été acceptés
</Text>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  var dates = item.date;
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
                            Nom du docteur
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
                            Date du rendezvous
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
                            ça va expier
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
export default Suspendu;
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
    width: 128,
    height: 155,
    marginTop: 5
  }
});
