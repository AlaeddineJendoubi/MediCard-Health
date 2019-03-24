import React from 'react';
import { StyleSheet, Text,Image , View , SafeAreaView, ScrollView ,Dimensions , Button} from 'react-native';
import { createDrawerNavigator , createAppContainer,createStackNavigator ,createSwitchNavigator, createBottomTabNavigator, DrawerItems} from 'react-navigation'
import RendezVous from './screens/RendezVous/RendezVous'
import Consulter from './screens/RendezVous/Consulter'
import Prendre from './screens/RendezVous/Prendre'
import Historique from './screens/RendezVous/Historique'
import Icon from '@expo/vector-icons/Ionicons';
import { Icon0} from 'native-base'
import ParcoursDeSoin from './screens/ParcoursDeSoin/ParcoursDeSoin'
import MedecinProfile from'./screens/MedecinProfile/MedecinProfile'
import Analyses from './screens/Analyses/Analyses'
import Profil from './screens/Profil/Profil'
import APropos from './screens/Apropos/APropos';
import Accueil from './screens/Accueil/Accueil';
import Login from './screens/Login/Login';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
const {width} = Dimensions.get('window')
export default class App extends React.Component {
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
    return (
     <MyApp />

    );
  }
}


const CustomDrawerComponent = (props) => (

<SafeAreaView style={{ flex: 1 }}>
<View style= {{height:150 , backgroundColor:'white' ,
alignItems: 'center' , justifyContent: 'center'}}>
<Image source={require('./assets/images/logo.png')}
style={{ height: 120 , width: 120 , borderRadius: 0}}/>

</View>
<ScrollView>
  <DrawerItems {...props} />
</ScrollView>
</SafeAreaView>
)

const RendezvousTabNavigator = createBottomTabNavigator({
 Consulter,
  Prendre,
  Historique
},{
   navigationOptions:{
    drawerIcon: ({tintColor}) => (
      <Icon0 name = "folder" style ={{ fontSize : 24 ,
        color:tintColor}}/>
      )
  }
}
);
const StackNavigator = createStackNavigator({
  RendezvousTabNavigator:RendezvousTabNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  });

const AppDrawerNavigator = createDrawerNavigator({

  Accueil:{
    screen: Accueil,
    navigationOptions:{
      title:'Accueil',
      drawerIcon: ({tintColor}) => (
        <Icon name = "md-home" style ={{ fontSize : 24 ,
          color:tintColor}}/>
        )
    },
  },
  RendezVous:{
    screen: StackNavigator,
    navigationOptions:{
      title:'Rendez-vous',
      drawerIcon: ({tintColor}) => (
        <Icon name = "md-calendar" style ={{ fontSize : 24 ,
          color:tintColor}}/>
        )
    },
  },
  ParcoursDeSoin:{
    screen: ParcoursDeSoin,
    navigationOptions:{
      title:'Examen medicale',
      drawerIcon: ({tintColor}) => (
        <Icon name = "md-document" style ={{ fontSize : 24 ,
          color:tintColor}}/>
        )
    },
  },
  Analyses:{
    screen: Analyses,
    navigationOptions:{
      title:'Analyses',
      drawerIcon: ({tintColor}) => (
        <Icon name = "md-medical" style ={{ fontSize : 24 ,
          color:tintColor}}/>
        )
    },
  },



},{
contentComponent : CustomDrawerComponent ,
drawerWidth: width ,
contentOptions : {
  activeTintColor : 'orange'
}
}
)

const AppSwitchNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Accueil:{screen:AppDrawerNavigator},
})
const MyApp = createAppContainer (AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
