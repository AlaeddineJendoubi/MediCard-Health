import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions ,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground
} from "react-native";


import {Container, Header, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon} from 'native-base'
import bg from "../../assets/images/c.jpg";
const { width } = Dimensions.get("window");
class Profil extends Component {

  fetchData= async()=>{
    const codeID = global.code
    const response = await fetch('http://192.168.1.107:3001/users/profil/'+codeID);
    const p =await response.json();
    this.setState({data:p});
  }

  state = {
    data:[]
  }
  componentDidMount()
  {
    this.fetchData();
  }

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name = "person" style ={{ fontSize : 24 ,
      color:tintColor}}/>
    )
  }

  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000
};

handleSlide = type => {
    let {
        active,
        xTabOne,
        xTabTwo,
        translateX,
        translateXTabOne,
        translateXTabTwo
    } = this.state;
    Animated.spring(translateX, {
        toValue: type,
        duration: 100
    }).start();
    if (active === 0) {
        Animated.parallel([
            Animated.spring(translateXTabOne, {
                toValue: 0,
                duration: 100
            }).start(),
            Animated.spring(translateXTabTwo, {
                toValue: width,
                duration: 100
            }).start()
        ]);
    } else {
        Animated.parallel([
            Animated.spring(translateXTabOne, {
                toValue: -width,
                duration: 100
            }).start(),
            Animated.spring(translateXTabTwo, {
                toValue: 0,
                duration: 100
            }).start()
        ]);
    }
};


  render() {
   const { navigate } = this.props.navigation ;
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
  } = this.state;
    return (
      <ImageBackground source={bg}  style={styles.Backgroundcontainer}  >
      <View style={styles.container}>
      <View style={styles.header}>
      <Header
        style={{
          marginTop: 35,
          backgroundColor: "#283593",
          borderWidth: 1,
          borderBottomColor: "white"
        }}
      >
        <Left>
          <Icon
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </Left>
        <Body>
          <Title>Profil :</Title>

        </Body>
        <Right />
      </Header>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <FlatList data={this.state.data}keyExtractor={(item,index) =>
                           index.toString()}renderItem={({item}) =>
              <View style={{alignItems:'center' ,justifyContent : 'center' }}>
                <Text style={styles.name}>
                                   {item.fname} {item.lname}
                </Text>
              </View>
                           }/>
            </View>
          </View>
          <View style={styles.body}>
            <View style={{ flex: 1 }}>
              <View style={{width: "90%",marginLeft: "auto",marginRight: "auto"}}>
                <View style={{flexDirection: "row",marginTop: 10,marginBottom: 5,height: 40,position: "relative"}}>
                  <Animated.View style={{position: "absolute",width: "50%",height: "100%",top: 0,left: 0,backgroundColor: "#283593",borderRadius: 4,transform: [{translateX}]}}/>
                  <TouchableOpacity style={{flex: 1,justifyContent: "center",alignItems: "center",borderWidth: 1,borderColor: "#283593",borderRadius: 4,borderRightWidth: 0,borderTopRightRadius: 0,borderBottomRightRadius: 0}}onLayout={event =>
                                      this.setState({xTabOne: event.nativeEvent.layout.x})}onPress={() =>
                                      this.setState({ active: 0 }, () =>
                                      this.handleSlide(xTabOne))}>
                    <Text style={{color: active === 0 ? "#fff" : "#283593" ,  fontSize:15}}>
                                          Personal information
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1,justifyContent: "center",alignItems: "center",borderWidth: 1,borderColor: "#283593",borderRadius: 4,borderLeftWidth: 0,borderTopLeftRadius: 0,borderBottomLeftRadius: 0}}onLayout={event =>
                                      this.setState({xTabTwo: event.nativeEvent.layout.x})}onPress={() =>
                                      this.setState({ active: 1 }, () =>
                                      this.handleSlide(xTabTwo))}>
                    <Text style={{color: active === 1 ? "#fff" : "#283593" ,  fontSize:15}}>
                                          Etat physique
                    </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView>
                  <Animated.View style={{transform: [{translateX: translateXTabOne}]}}onLayout={event =>
                                      this.setState({translateY: event.nativeEvent.layout.height})}>
                    <View style={styles.box }>
                      <FlatList showsVerticalScrollIndicator={true}data={this.state.data}keyExtractor={(item,index) =>
                        index.toString()}renderItem={({item}) =>
                        <View style={{  borderRadius: 2 }}>
                          <Text style={{  fontWeight : '500'}}>
                            Date de Naissance
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            Etat civil
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            Sexe
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            D'origine
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            Num de tlf
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            Adresse Email
                          </Text>
                        </View>
                        }/>
<FlatList showsVerticalScrollIndicator={true}data={this.state.data}keyExtractor={(item,index) =>
                        index.toString()}renderItem={({item}) =>
                        <View style={{  borderRadius: 2  }}>
                          <Text >
                             {item.dateb}
                          </Text>
                          <Text>
                             {item.etat}
                          </Text>
                          <Text >
                          {item.gender}
                          </Text>
                          <Text >
                             {item.region}
                          </Text>
                          <Text >
                          {item.phone}
                          </Text>
                          <Text >
                           {item.email}
                          </Text>
                        </View>
                        }/>

                      </View>
                    </Animated.View>
                    <Animated.View style={{justifyContent: "center",alignItems: "center",transform: [{translateX: translateXTabTwo},{translateY: -translateY}]}}>
                    <View style={styles.box }>
                      <FlatList showsVerticalScrollIndicator={true}data={this.state.data}keyExtractor={(item,index) =>
                        index.toString()}renderItem={({item}) =>
                        <View  style={{  borderRadius: 2 ,  justifyContent: 'center', alignItems:'center'  }}>
                          <Text style={{  fontWeight : '500'}}>
                            Height
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            Weight
                          </Text>
                          <Text style={{  fontWeight : '500'}}>
                            Tension
                          </Text>
                          <Text style={{  fontWeight : '500'}} >
                            sugar
                          </Text>
                        </View>
                        }/>
              <FlatList showsVerticalScrollIndicator={true}data={this.state.data}keyExtractor={(item,index) =>
                        index.toString()}renderItem={({item}) =>
                        <View  style={{  borderRadius: 2 ,  justifyContent: 'center', alignItems:'center' }}>
                          <Text>
                           {item.height}
                          </Text>
                          <Text >
                           {item.weight}
                          </Text>
                          <Text >
                            {item.tension}
                          </Text>
                          <Text  >
                           {item.sugar}
                          </Text>
                        </View>
                        }/>
                        </View>
                      </Animated.View>
                    </ScrollView>
                  </View>

                </View>
              </View>
            </View>

            </ImageBackground>

    );
  }

}
export default Profil;
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#283593",
  },

  headerContent:{
    padding:7,
    justifyContent: 'center',
    alignItems:'center'
  }  ,
  Backgroundcontainer :{
    flex : 1 ,

  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:1,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:15,
    color:"#FFFFFF",
    fontWeight:'600',
    justifyContent: "center",
    alignItems: "center"
  },
  body:{

    height:500,

    marginTop: 10
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  box: {
    flex: 1,
    marginTop : 20 ,
    margin : 10 ,
    fontSize:15,
    fontWeight:'600',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
});
