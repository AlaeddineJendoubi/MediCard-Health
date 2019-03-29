import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Subtitle
} from "native-base";
import bg from "../../assets/images/tryb.png";
import logo from "../../assets/images/trylogo.png";
import Iconbtn from "@expo/vector-icons/Ionicons";
import { Font } from "expo";
class Accueil extends Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Subtitle>Alaeddine</Subtitle>
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
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "#cf1d76",
                  fontSize: 16
                }}
              >
                {" "}
                Pour consulter ou bien prendre rendez-Vous clicker sur{" "}
              </Text>
              <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "30%",
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

              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "#cf1d76",
                  fontSize: 16
                }}
              >
                {" "}
                Pour consulter vos examens medicaux clicker sur{" "}
              </Text>
              <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "30%",
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

              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "#cf1d76",
                  fontSize: 16
                }}
              >
                {" "}
                Pour consulter vos analyses clicker sur{" "}
              </Text>
              <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "30%",
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

              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "#cf1d76",
                  fontSize: 16
                }}
              >
                {" "}
                Pour consulter vos analyses clicker sur{" "}
              </Text>
              <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "30%",
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

              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "#cf1d76",
                  fontSize: 16
                }}
              >
                {" "}
                Pour consulter votre profiles clicker sur{" "}
              </Text>
              <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "30%",
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
            </View>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Backgroundcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    justifyContent: "center",
    width: 128,
    height: 155,
    marginTop: 5
  }
});
export default Accueil;
