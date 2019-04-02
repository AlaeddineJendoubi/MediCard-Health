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
  Form,
  Picker,
  DatePicker
} from "native-base";
import Icon0 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import CountDown from "react-native-countdown-component";
import moment from "moment";
import "moment/locale/fr";
import bg from "../../assets/images/tryb.png";
import logo from "../../assets/images/trylogo.png";
import Iconbtn from "@expo/vector-icons/Ionicons";
const { width: WIDTH } = Dimensions.get("window");

class Prendre extends Component {
  constructor(props) {
     super(props);
     this.state = {
       selected: "key2"
     };
     this.state = { chosenDate: new Date() };
   this.setDate = this.setDate.bind(this);
   }
   setDate(newDate) {
  this.setState({ chosenDate: newDate });
}
   onValueChange(value: string) {
     this.setState({
       selected: value
     });
   }

  render() {

    return (
      <Container  style={{alignItems:"center"}}>
        <ImageBackground source={bg} style={styles.Backgroundcontainer}>
          <Content>

          <Form  style={{alignItems:"center", marginTop:15}}>
            <Image source={logo} style={styles.logo} />
          <Text   style={{
              fontFamily: "Ionicons",
              fontSize: 20,
              fontWeight: "bold",
              color: "#0c75b0",
              textAlign: "center",
              marginTop:35
            }}> votre rendez vous avec le docteur du spécialité  </Text>
          <Picker
            mode="dialog"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: WIDTH }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
            itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ionicons", fontSize:17 }}


          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
          <Text   style={{
              fontFamily: "Ionicons",
              fontSize: 20,
              fontWeight: "bold",
              color: "#0c75b0",
              textAlign: "center"
            }}> Au nom du   </Text>
          <Picker
            mode="dialog"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: WIDTH }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
          <Text   style={{
              fontFamily: "Ionicons",
              fontSize: 20,
              fontWeight: "bold",
              color: "#0c75b0",
              textAlign: "center"
            }}> A la date du</Text>
          <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
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
              onDateChange={this.setDate}
              disabled={false}
              />
              <Text   style={{
                  fontFamily: "Ionicons",
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#cf1d76",
                  textAlign: "center"
                }}>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
              <Button
                style={{
                  justifyContent: "center",
                  marginHorizontal: "30%",
                  color: "#0c75b0",
                  marginTop: 30,
                  width: 170
                }}

              >
                <Iconbtn
                  name="md-checkbox"
                  style={{
                    fontSize: 24,
                    marginLeft: 5,
                    borderRadius: 25,
                    color: "white"
                  }}
                />
                <Text>envoyer</Text>
              </Button>
        </Form>


          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
export default Prendre;
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
