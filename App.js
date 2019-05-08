import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button,
  ImageBackground
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation"; //React navigation imports
//Screen imports
import Consulter from "./screens/RendezVous/Consulter";
import Prendre from "./screens/RendezVous/Prendre";
import Historique from "./screens/RendezVous/Historique";
import FingerPrintReader from "./screens/FingerPrintReader/FingerPrintReader";
import Suspendu from "./screens/RendezVous/Suspendu";
import ParcoursDeSoin from "./screens/ParcoursDeSoin/ParcoursDeSoin";
import ParcourSoinsSearch from "./screens/ParcoursDeSoin/ParcourSoinsSearch";
import MedecinProfile from "./screens/MedecinProfile/MedecinProfile";
import Medicaments from "./screens/Medicaments/Medicaments";
import OrdonnanceByExamenmedicale from "./screens/OrdonnanceByExamenmedicale/OrdonnanceByExamenmedicale";
import Analyses from "./screens/Analyses/Analyses";
import Profil from "./screens/Profil/Profil";
import APropos from "./screens/Apropos/APropos";
import Accueil from "./screens/Accueil/Accueil";
import Ordonnance from "./screens/Ordonnance/Ordonnance";
import DetailsOrdo from "./screens/Ordonnance/DetailsOrdo";

import Login from "./screens/Login/Login";
//Used Component imports
import Icon from "@expo/vector-icons/Ionicons";
import { Icon0 } from "native-base";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import drawerBg from "./assets/images/tryb.png";
import { Permissions, Notifications } from 'expo';
export default class App extends React.Component {
  //Loading used fonts at the app start
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      coolveticarg: require("native-base/Fonts/coolveticarg.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    return <MyApp />; //returning our main app container Component
  }
}
//Creating the custom Drawer menu Component
const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground source={drawerBg} style={styles.Backgroundcontainer}>
      <Image
        source={require("./assets/images/logo.png")}
        style={{ height: 120, width: 120, borderRadius: 0, marginTop: 50 }}
      />
      <ScrollView style={{marginTop:150}}>
        <DrawerItems {...props} />
      </ScrollView>
    </ImageBackground>
  </SafeAreaView>
);
//Creating the tab container and customizing it
const RendezvousTabNavigator = createBottomTabNavigator(
  {
    Consulter: {
      screen: Consulter,
      navigationOptions: {
        tabBarLabel: "Consulter",
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="calendar-check-o" size={20} style={{ color: "red" }} />
        )
      }
    },
    Prendre: {
      screen: Prendre,
      navigationOptions: {
        tabBarLabel: "Ajouter",
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="calendar-plus-o" size={20} style={{ color: "red" }} />
        )
      }
    },
    Historique: {
      screen: Historique,
      navigationOptions: {
        tabBarLabel: "Historique",
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="calendar-times-o" size={20} style={{ color: "red" }} />
        )
      }
    },
    Suspendu: {
      screen: Suspendu,
      navigationOptions: {
        tabBarLabel: "Suspendu",
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="calendar-minus-o" size={20} style={{ color: "red" }} />
        )
      }
    }
  },
  {
    navigationOptions: {
      //Setting the navigation icon in the drawer
      drawerIcon: ({ tintColor }) => (
        <Icon0 name="folder" style={{ fontSize: 24, color: tintColor }} />
      )
    }
  }
);
const StackNavigator = createStackNavigator(
  //Creating a stack StackNavigator to NEST the tab navigator in it so it can be Nested inside the drawer Navigator
  {
    RendezvousTabNavigator: RendezvousTabNavigator,
    MedecinProfile:{
      screen:MedecinProfile

    },


  },
  {
    defaultNavigationOptions: ({ navigation }) => { //Default navigationOptions
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: "#283593",
          borderWidth: 1,
          borderBottomColor: "#cfdef7"
        }
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  //Creating the drawer navigator
  {
    Accueil: {
      screen: Accueil,
      navigationOptions: {
        title: "Accueil",
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-home" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    RendezVous: {
      screen: StackNavigator, //Returns the StackNavigator that has a tabnavigaotr nested in it
      navigationOptions: {
        title: "Rendez-vous",
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-calendar" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    ParcoursDeSoin: {
      screen: ParcoursDeSoin,
      navigationOptions: {
        title: "Examen medicale",
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-document" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    Analyses: {
      screen: Analyses,
      navigationOptions: {
        title: "Analyses",
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-medical" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    Ordonnance: {
      screen: Ordonnance,
      navigationOptions: {
        title: "Ordonnance",
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-medkit" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    Medicaments: {
      screen: Medicaments,
      navigationOptions: {
        title: "Medicaments",
        drawerIcon: ({ tintColor }) => (
          <Icon2
            name="pill"
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-man" style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    APropos: {
      screen: APropos,
      navigationOptions: {
        title: "A propos",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="md-analytics"
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {

        title: "Logout",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="md-log-out"
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    },






  },


  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width / 2,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  //Nesting the drawer navigator into our AppSwitchNavigator

  Login: { screen: Login },
  Accueil: { screen: AppDrawerNavigator },
  OrdonnanceByExamenmedicale:{
    screen:OrdonnanceByExamenmedicale
  },
    ParcourSoinsSearch:{
      screen: ParcourSoinsSearch
    },
    FingerPrintReader:{
      screen : FingerPrintReader
    },
    DetailsOrdo :{screen : DetailsOrdo}


});
const MyApp = createAppContainer(AppSwitchNavigator); //puting the AppSwitchNavigator into the appcontainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  Backgroundcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
