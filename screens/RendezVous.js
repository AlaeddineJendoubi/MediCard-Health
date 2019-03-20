import React, { Component } from "react";
import {View,StyleSheet,FlatList,ListView} from "react-native";
import {Container, Header, Left, Body, Right, Title, Subtitle,Icon ,Content, Footer, FooterTab, Button, Text,Badge , List , ListItem} from 'native-base'
import Icon0 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import CountDown from 'react-native-countdown-component';
import moment from 'moment';


class RendezVous extends Component{
  static navigationOptions ={
    drawerIcon: ({tintColor}) => (
      <Icon name = "folder" style ={{ fontSize : 24 ,
        color:tintColor}}/>
      )
  }
  state ={
    data:[]
  }
  fetchData= async()=>{
      const response = await fetch('http://192.168.1.107:3000/rendezvous/1');
      const rendezvous =await response.json();
      this.setState({data:rendezvous});
  }
  componentDidMount() {
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
                     Rendez-Vous :
                   </Title>
                   <Subtitle>User Name</Subtitle>
                 </Body>
               </Header>
               <Content >
                 <View style ={{ flex:1}}>
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
                            <Text>Nom du Docteur : Dr. {item.nom}</Text>
                          </Body>
                        </ListItem>
                        <ListItem icon>
                          <Left>
                            <Button style={{ backgroundColor: "white" }}>
                              <Icon1 active name="calendar" />
                            </Button>
                          </Left>
                          <Body>
                            <Text>Date du rendez-vous : {item.date}</Text>
                          </Body>
                        </ListItem>
                        <ListItem icon>
                          <Left>
                            <Button style={{ backgroundColor: "white" }}>
                              <Icon1 active name="calendar"/>
                            </Button>
                          </Left>
                          <Body>
                            <CountDown
                              until= {item.date}
                              timetoShow={('H', 'M', 'S')}
                              onFinish={() => alert('finished')}
                              onPress={() => alert('hello')}
                              size={10}
                            />
                        </Body>
                      </ListItem>
                    </View>
                  }
                />
              </View>
            </Content>
          </Container>
        );
      }
}
    export default RendezVous;
    const styles =StyleSheet.create({
      container : {
        flex: 1,
      }
    })
