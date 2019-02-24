import React, { Component } from "react";
import { StyleSheet, Text,Image , View , SafeAreaView, ScrollView ,Dimensions , Button} from 'react-native';
import { createDrawerNavigator , createAppContainer , DrawerItems} from 'react-navigation'
import RendezVous from './RendezVous'
import ParcoursDeSoin from './ParcoursDeSoin'
import Analyses from './Analyses'
import Profil from './Profil'
import APropos from './APropos';
const {width} = Dimensions.get('window')

class Accueil extends Component {
    
  render() {
    return (
        <MApp />
    );
  }

}
const CustomDrawerComponent = (props) => (

    <SafeAreaView style={{ flex: 1 }}>
    <View style= {{height:150 , backgroundColor:'white' , 
    alignItems: 'center' , justifyContent: 'center'}}>
    <Image source={require('../assets/wiem.png')} 
    style={{ height: 120 , width: 120 , borderRadius: 60 , marginTop : 50}}/>
    
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    </SafeAreaView>
    )
    const AppDrawerNavigator = createDrawerNavigator({
        'Rendez Vous' : RendezVous,
        'Parcours de soin': ParcoursDeSoin,
        'Analyses' : Analyses,
        'Profil' : Profil,
        'A Propos': APropos,
       
       }, {
       contentComponent : CustomDrawerComponent ,
       drawerWidth: width , 
       contentOptions : {
         activeTintColor : 'orange'
       }
       }
       )
       const MApp = createAppContainer (AppDrawerNavigator);



       const styles = StyleSheet.create({
         container: {
           flex: 1,
           backgroundColor: '#fff',
           alignItems: 'center',
           justifyContent: 'center',
         },
       });


export default Accueil;

