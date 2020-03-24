import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import {createBottomTabNavigator, createAppContainer } from "react-navigation";
import chatList from "./pages/chatList";
import friendList from "./pages/friendList";
import myProfile from "./pages/myProfile";
import statusList from "./pages/serviceList"
import {MenuProvider} from "react-native-popup-menu"

// You can import from local files
import OnGoing from "./components/OnGoing"

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <MenuProvider>
      <StatusBar hidden={true}/>
      <AppC/>
      </MenuProvider>
    );
  }
}

const getTabBarIcon=(navigation,focused)=>{
  const {routeName}=navigation.state;
  let path;
  if(routeName==="聊天" && focused==false ){
    path=require("./assets/chatN.png")
  }
  else if(routeName==="聊天" && focused){
    path=require("./assets/chatS.png")
  }
  else if(routeName==="通訊錄" && focused==false ){
    path=require("./assets/friendN.png")
  }
  else if(routeName==="通訊錄" && focused ){
    path=require("./assets/friendS.png")
  }
  else if(routeName==="發現" && focused==false ){
    path=require("./assets/statusN.png")
  }
  else if(routeName==="發現" && focused ){
    path=require("./assets/statusS.png")
  }
  else if(routeName==="我" && focused==false ){
    path=require("./assets/MyProfileN.png")
  }
  else if(routeName==="我" && focused){
    path=require("./assets/MyProfileS.png")
  }

  return <Image style={styles.icon} source={path}/>
}

const MainNavigator=createBottomTabNavigator({
  聊天:chatList,
  通訊錄:friendList,
  發現:statusList,
  我:myProfile,
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused})=>
      getTabBarIcon(navigation,focused)
  }),
  tabBarOptions:{
    activeTintColor:"green",
    inactiveTintColor:"black"
  }
  }
)

const AppC=createAppContainer(MainNavigator);

const styles=StyleSheet.create({
  icon:{
    height:24,
    width:24,
  }
})

