import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ListView,
} from 'react-native';
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

const { width: WIDTH } = Dimensions.get("window");
import Icon0 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";

const ip = "192.168.1.107";
class MedecinProfile extends Component {

   constructor(props)
   {
     super(props)
     this.state = {
       idmedecin : ''
 }
 const { navigation } = this.props;
 this.state.idmedecin = navigation.getParam('idmedecin');

   }
   fetchData = async () => {

    const api = "http://"+ip+":3000/medecin/"+this.state.idmedecin;
     const response = await fetch(api); //Api link
     const rendezvous = await response.json(); //fetching response into rendezvous
     this.setState({ data: rendezvous }); //Setting it into state
   };

     componentDidMount() {
       this.fetchData();
     }

  render() {

    return (

      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

            <FlatList style ={{ marginTop:70}}
              data={this.state.data} //Getting the data stored from the response in the state
              keyExtractor={(item, index) => index.toString()} //Key used to identify the data
              renderItem={(
                { item } //Rendering items (expects a JSX Response wich is our FlatList)
              ) => {

                //var idmedecin= item.idmedecin;

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
                          Nom du Docteur :
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
                      <Right style={{ marginTop: 15 }}>
                      <Icon1
                        active
                        name="angle-double-right"
                        style={{ fontSize: 24, justifyContent: "center",opacity:0 }}

                      />
                      </Right>
                    </ListItem>
                    <ListItem thumbnail>
                      <Left>
                        <Icon0
                          active
                          name="gender-male-female"
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
                          Sexe :
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
                          {item.gendermedecin}
                        </Text>
                      </Body>
                      <Right style={{ marginTop: 15 }}>
                      <Icon0
                        active
                        name="calendar-clock"
                        style={{ fontSize: 24, justifyContent: "center" ,opacity:0}}
                      />
                      </Right>
                    </ListItem>
                    <ListItem thumbnail>
                      <Left>
                        <Icon0
                          active
                          name="medical-bag"
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
                          Spécialité :
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
                          {item.specialitemedecin}
                        </Text>
                      </Body>
                      <Right style={{ marginTop: 15 }}>
                      <Icon0
                        active
                        name="calendar-remove"
                        style={{ fontSize: 24, justifyContent: "center" ,opacity:0}}
                      />
                      </Right>
                    </ListItem>
                    <ListItem thumbnail>
                      <Left>
                        <Icon0
                          active
                          name="email-outline"
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
                          Email Adress :
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
                          {item.emailmedecin}
                        </Text>
                      </Body>
                      <Right style={{ marginTop: 15 }}>
                      <Icon0
                        active
                        name="calendar-remove"
                        style={{ fontSize: 24, justifyContent: "center" ,opacity:0}}
                      />
                      </Right>
                    </ListItem>
                    <ListItem thumbnail>
                      <Left>
                        <Icon0
                          active
                          name="phone"
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
                          numéro :
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
                          {item.phonemedecin}
                        </Text>
                      </Body>
                      <Right style={{ marginTop: 15 }}>
                      <Icon0
                        active
                        name="calendar-remove"
                        style={{ fontSize: 24, justifyContent: "center" ,opacity:0}}
                      />
                      </Right>
                    </ListItem>
                    <ListItem thumbnail>
                      <Left>
                        <Icon0
                          active
                          name="home-modern"
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
                          Adresse :
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
                          {item.addrmedecin}
                        </Text>
                      </Body>
                      <Right style={{ marginTop: 15 }}>
                      <Icon0
                        active
                        name="google-maps"
                        style={{ fontSize: 24, justifyContent: "center" }}
                      />
                      </Right>
                    </ListItem>

                  </View>
                );
              }}
            />

            </View>

    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
export default MedecinProfile;
