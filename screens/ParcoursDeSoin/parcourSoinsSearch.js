import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ListView,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
    Picker,
    AppRegistry,
    ActivityIndicator,
    Platform
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
  Form,

  DatePicker
} from "native-base";
import Icon0 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import CountDown from "react-native-countdown-component";
import moment from "moment";
import "moment/locale/fr";
import bg from "../../assets/images/tryb.png";
import logo from "../../assets/images/trylogo.png";
import Iconbtn from "@expo/vector-icons/Ionicons";
const { width: WIDTH } = Dimensions.get("window");

const ip = "192.168.1.107";


class ParcourSoinsSearch extends Component {
  constructor(props)
  {

    super(props);

    this.state = {

    isLoadingSpec: true,
    isLoadingDoc: true,

    PickerValueHolder : '',
    specilaite : '',
    idmedecin : '',
    medecin:'',
    chosenDate : new Date(),
}

   this.setDate = this.setDate.bind(this);
}
setDate(newDate) {
this.setState({ chosenDate: newDate })
  }



  fetchDocs = async () => {
    const api = "http://"+ip+":3000/medecinSpecialite/"+this.state.specilaite;
    const response = await fetch(api)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoadingDoc: false,
          dataSources: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });

  };
  fetchSpecs = async () => {
    const response = await fetch('http://192.168.1.107:3000/specilaite')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoadingSpec: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });

  };

  componentDidMount() {
this.state.specilaite = 'dentiste'
       this.fetchSpecs()
      // this.fetchDocs()

}
componentDidUpdate() {
  // Typical usage (don't forget to compare props):

    this.fetchDocs(this.props.specilaite);

}
addRendezVous = () => {
 const date = moment(this.state.date).format("YYYY/MM/DD");
  const { navigate } = this.props.navigation;
 const docSpec = toString(this.props.specilaite)
 const alertMsg = 'Le Docteur '+docSpec
 Alert.alert(
   'Votre demande a été soumise, vous serez notifié de son acceptation',
   alertMsg,
   [
     {text: 'Consulter mes demandes ', onPress: () => navigate('Suspendu', {idmedecin: 1}) },
     {
       text: 'Soumettre une autre demande',
       style: 'cancel',
     },

   ],
   {cancelable: false},
 );

 var details = {
     'idmedecin': parseInt(this.state.medecin),
     'idpatient': 1,
     'etat': 1,
     'date': date

 };

 var formBody = [];
 for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");

 fetch('http://192.168.1.107:3000/rendezvousinsert', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
   },
   body: formBody
 })
}



render() {

        if (this.state.isLoadingSpec||this.state.isLoadingDoc) {
          return (
            <View >
            <ActivityIndicator />
            </View>
          );
        }

return (
   <Container  style={{alignItems:"center"}}>
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
      <Icon1
    color='#FFFFFF'
        name="arrowleft"
      onPress={() => navigate("ParcoursDeSoin")}
      />
    </Left>
    <Body>
      <Title>Chercher un examen medicale </Title>

    </Body>
    <Right />
  </Header>
  <Form  style={{alignItems:"center"}}>
          <Image source={logo} style={styles.logo} />
        <Text   style={{
            fontFamily: "Ionicons",
            fontSize: 20,
            fontWeight: "bold",
            color: "#0c75b0",
            textAlign: "center",
            marginTop:35
          }}> votre rendez vous avec le docteur du spécialité  </Text>

          <Text   style={{
              fontFamily: "Ionicons",
              fontSize: 20,
              fontWeight: "bold",
              color: "#0c75b0",
              textAlign: "center"
            }}> A la date du</Text>
            <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2019, 4, 21)}
                maximumDate={new Date(2025, 12, 31)}
                locale={"fr"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="cliquez ici pour choisir une date"
                textStyle={{ fontFamily: "Ionicons",

                fontWeight: "bold",
                color: "#cf1d76",
                textAlign: "center" }}
                placeHolderTextStyle={{ color: "#D3D3D3" }}
                onDateChange={this.setDate,(date) => this.setState({date})}
                disabled={false}
                />
                <Text   style={{
                    fontFamily: "Ionicons",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#cf1d76",
                    textAlign: "center"
                  }}>
                  Date:  {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
              
  </Form>
  </Content>
  </ImageBackground>

</Container>
);

        }
}
export default ParcourSoinsSearch;


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
    marginTop: 5}
});
