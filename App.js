import React from 'react';
import { StyleSheet, Text,Image , View , SafeAreaView, ScrollView ,Dimensions , Button} from 'react-native';
import { createDrawerNavigator , createAppContainer , DrawerItems} from 'react-navigation'
import RendezVous from './screens/RendezVous'
import ParcoursDeSoin from './screens/ParcoursDeSoin'
import Analyses from './screens/Analyses'
import Profil from './screens/Profil'
import APropos from './screens/APropos';

const {width} = Dimensions.get('window')
export default class App extends React.Component {
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
<Image source={require('./assets/wiem.png')} 
style={{ height: 120 , width: 120 , borderRadius: 60}}/>

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

const MyApp = createAppContainer (AppDrawerNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
