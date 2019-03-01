import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListView
} from "react-native";
import Icon0 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import {Container, Header, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon} from 'native-base'


class ParcoursDeSoin extends Component {

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name = "folder" style ={{ fontSize : 24 ,
      color:tintColor}}/>
    )
  }
  state = {
    data:[]
  }
  fetchData= async()=>{
    const response = await fetch('http://192.168.1.11:3000/parcoursoin');
    const parcoursoin =await response.json();
    this.setState({data:parcoursoin});
  }

  componentDidMount()
  {
    this.fetchData();
  }
  render() {
    return (
      <Container>
             <Header style={{marginTop:35}}>
               <Left>
                 <Left style ={{top:10 ,marginLeft:-50, flex:1}} >
                      <Icon name ="menu"  onPress={() =>
                     this.props.navigation.openDrawer()
                     } />
                  </Left>
               </Left>
               <Body>
                 <Title>
                   Parcours de Soin :
                 </Title>
                 <Subtitle>User Name</Subtitle>
               </Body>
               <Right>
                 <Button transparent>
              <Icon name='search' />
                </Button>
               </Right>
             </Header>


      <View style ={{ flex:1}}>

          <Text style={{backgroundColor: 'white',fontSize:20,marginLeft:10,marginRight:10,marginTop:20}}>La liste d'historique des maladies avec les date , les ordonnances et les docteurs : </Text>


         <FlatList

         data={this.state.data}

         keyExtractor={(item,index) => index.toString()}

         renderItem={({item}) =>




         <View style={{backgroundColor:'#e6e6e6',padding:10,margin:10}}>

           <ListItem icon>
              <Left>
                  <Button style={{ backgroundColor: "white" }}>
                      <Icon0 active name="doctor" />
                  </Button>
              </Left>
              <Body>
                  <Text>Nom du Docteur : {item.medecin}</Text>
              </Body>
          </ListItem>

          <ListItem icon>
              <Left>
                  <Button style={{ backgroundColor: "white" }}>
                      <Icon1 active name="medicinebox" />
                  </Button>
             </Left>
          <Body>
              <Text>Nom du maladie : {item.maladie}</Text>
          </Body>
         </ListItem>

         <ListItem icon>
            <Left>
                <Button style={{ backgroundColor: "white" }}>
                    <Icon2 active name="date-range" />
                </Button>
            </Left>
            <Body>
                <Text>Date du consultation : {item.date}</Text>
            </Body>
        </ListItem>

        <ListItem icon>
           <Left>
               <Button style={{ backgroundColor: "white" }}>
                   <Icon0 active name="note-text" />
               </Button>
           </Left>
           <Body>
               <Text>Ordonnances : {item.ordonnance}</Text>
           </Body>
       </ListItem>
           </View>



         }



         />
      </View>

</Container>

    );
  }

}

export default ParcoursDeSoin;

const styles =StyleSheet.create({
    container : {

      flex: 1,



    }
})
