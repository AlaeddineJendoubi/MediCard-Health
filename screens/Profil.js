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
  Image
} from "react-native";



import {Container, Header, Left, Body, Right, Title, Subtitle ,Button , List , ListItem,Icon} from 'native-base'
//const {width : WIDTH} = Dimensions.get('window')
const { width } = Dimensions.get("window");
class Profil extends Component {





  
 
  fetchData= async()=>{
    const codeID = global.code
    const response = await fetch('http://192.168.1.4:3000/users/profil/'+codeID);
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
  //  const codeID = global.code 
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
      <View style={styles.container}>
      <View style={styles.header}>
        <Header style ={{backgroundColor : "#FFFFFF" }} >
          <Left style ={{top:10 , flex:1 }} >
            <Icon name ="menu"  onPress={() =>
                        this.props.navigation.openDrawer()} />
            </Left>
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
                  <Animated.View style={{position: "absolute",width: "50%",height: "100%",top: 0,left: 0,backgroundColor: "#34e7e4",borderRadius: 4,transform: [{translateX}]}}/>
                  <TouchableOpacity style={{flex: 1,justifyContent: "center",alignItems: "center",borderWidth: 1,borderColor: "#34e7e4",borderRadius: 4,borderRightWidth: 0,borderTopRightRadius: 0,borderBottomRightRadius: 0}}onLayout={event =>
                                      this.setState({xTabOne: event.nativeEvent.layout.x})}onPress={() =>
                                      this.setState({ active: 0 }, () =>
                                      this.handleSlide(xTabOne))}>
                    <Text style={{color: active === 0 ? "#fff" : "#34e7e4" ,  fontSize:18}}>
                                          Personal information                   
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1,justifyContent: "center",alignItems: "center",borderWidth: 1,borderColor: "#34e7e4",borderRadius: 4,borderLeftWidth: 0,borderTopLeftRadius: 0,borderBottomLeftRadius: 0}}onLayout={event =>
                                      this.setState({xTabTwo: event.nativeEvent.layout.x})}onPress={() =>
                                      this.setState({ active: 1 }, () =>
                                      this.handleSlide(xTabTwo))}>
                    <Text style={{color: active === 1 ? "#fff" : "#34e7e4" ,  fontSize:18}}>
                                          Etat physique                  
                    </Text>
                  </TouchableOpacity>
                </View>
                <ScrollView>
                  <Animated.View style={{justifyContent: "center",alignItems: "center",transform: [{translateX: translateXTabOne}]}}onLayout={event =>
                                      this.setState({translateY: event.nativeEvent.layout.height})}>
                    <View >
                      <FlatList showsVerticalScrollIndicator={true}data={this.state.data}keyExtractor={(item,index) =>
                        index.toString()}renderItem={({item}) =>
                        <View style={{ alignItems:'center' ,justifyContent : 'center' ,paddingTop: 30,borderRadius: 2 }}>
                          <Text style={styles.box }>
                            Date de Naissance :  {item.dateb}
                          </Text>
                          <Text style={styles.box }>
                            Etat civil :  {item.etat}
                          </Text>
                          <Text style={styles.box }>
                            Sexe :  {item.gender}
                          </Text>
                          <Text style={styles.box }>
                            D'origine :  {item.region}
                          </Text>
                          <Text style={styles.box }>
                            Num de tlf :{item.phone}
                          </Text>
                          <Text style={styles.box }>
                            Adresse Email : {item.email}
                          </Text>
                        </View>
                        }/>
                      </View>
                    </Animated.View>
                    <Animated.View style={{justifyContent: "center",alignItems: "center",transform: [{translateX: translateXTabTwo},{translateY: -translateY}]}}>
                      <FlatList showsVerticalScrollIndicator={true}data={this.state.data}keyExtractor={(item,index) =>
                        index.toString()}renderItem={({item}) =>
                        <View style={{ alignItems:'center' ,justifyContent : 'center' ,paddingTop: 30,borderRadius: 2 }}>
                          <Text style={styles.box }>
                            Height : {item.height}
                          </Text>
                          <Text style={styles.box }>
                            Weight: {item.weight}
                          </Text>
                          <Text style={styles.box }>
                            Tension: {item.tension}
                          </Text>
                          <Text  style={styles.box }>
                            sugar: {item.sugar}
                          </Text>
                        </View>
                        }/>
                      </Animated.View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
    


       
    );
  }
}
export default Profil;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#34e7e4",
  },
  
  headerContent:{
    padding:7,
    justifyContent: 'center',
    alignItems:'center'
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
    fontSize:10,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#FFFFFF",
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
    fontSize:18,
    padding:10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems:'center' ,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: .2,
    margin : 10 ,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
});




