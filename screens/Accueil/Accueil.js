import React, { Component } from 'react';
import {  View,ImageBackground ,StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Subtitle } from 'native-base';
import bg from '../../assets/images/try.png'
import { Font } from 'expo';
class Accueil extends Component {

  render() {
      const {navigate} = this.props.navigation;
    return (

      <Container >
      <Header style={{marginTop:35}}>
        
          <Left >
               <Icon name ="menu"  onPress={() =>
              this.props.navigation.openDrawer()
              } />

        </Left>
        <Body>
          <Title>
            Bienvenue :
          </Title>
          <Subtitle>Alaeddine</Subtitle>
        </Body>
      </Header>
      <ImageBackground source={bg}  style={styles.Backgroundcontainer} >

             <Content style={{marginTop:35}}>
               <Text style={{ fontFamily: 'Ionicons',  textAlign: 'center',fontSize: 25 ,marginTop:35,marginHorizontal: 10}}>
                Bienvenue dans votre moniteur
                </Text>
                <Text style={{ fontFamily: 'Ionicons', textAlign: 'center', fontSize: 25 ,marginTop:10,marginHorizontal: 15}}>
                  de santé personnel MediCard
                </Text>
                <View style={{marginTop:40 , justifyContent:'center',alignItems:'center' }}>
                      <Text style={{ textAlign: 'center',fontWeight:'bold',marginTop:20,color:'red',fontSize:16}} >  Pour consulter ou bien prendre rendez-Vous clicker sur </Text>
                      <Text style={{ textAlign: 'center',fontWeight:'bold'}} >Rendez-Vous</Text>
                      <Button style={{width:400}} iconLeft light  onPress={() => navigate('Rendez-vous')}>
                      <Icon name='arrow-back' />
                        <Text>RendezVous</Text>
                      </Button>

                      <Text style={{ textAlign: 'center',fontWeight:'bold',marginTop:20,color:'red',fontSize:16}} >  Pour consulter votre Parcours de soin clicker sur </Text>
                      <Text style={{ textAlign: 'center',fontWeight:'bold'}} >Parcours de soin</Text>
                      <Button style={{width:400}} iconLeft light onPress={() => navigate('Examen medicale')} >
                      <Icon name='arrow-back' />
                        <Text>Parcours De Soin</Text>
                      </Button>

                      <Text style={{ textAlign: 'center',fontWeight:'bold',marginTop:20,color:'red',fontSize:16}} >  Pour consulter vos Analyses clicker sur </Text>
                      <Text style={{ textAlign: 'center',fontWeight:'bold'}} >Analyses</Text>
                      <Button style={{width:400}} iconLeft light onPress={() => navigate('Analyses') }>
                      <Icon name='arrow-back' />
                        <Text>Analyses</Text>
                      </Button>

                      <Text style={{ textAlign: 'center',fontWeight:'bold',marginTop:20,color:'red',fontSize:16}} >  Pour consultervotre Profil clicker sur </Text>
                      <Text style={{ textAlign: 'center',fontWeight:'bold'}} >Profil</Text>
                      <Button style={{width:400}} iconLeft light onPress={() => navigate('Profil')}>
                      <Icon name='arrow-back' />
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
      Backgroundcontainer :{
        flex : 1 ,
        width : null ,
        height : null ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
      }
    });
      export default Accueil;
