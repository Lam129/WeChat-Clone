import * as React from "react";
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import Header from "../components/Header";
import ListItem from "../components/ListItem";

export default class serviceList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      serviceListDetails:[
        {
         type:"item",
         icon:require("../assets/ic_friend_circle.png"),
         text:"朋友圈",
        },
        {
         type:"space", 
        },
        {
         type:"item",
         icon:require("../assets/ic_scan_blue.png"),
         text:"掃描",
        },
        {
         type:"item",
         icon:require("../assets/ic_shake_blue.png"),
         text:"搖一搖",
        }
      ]
    }
  }

  render(){
    return ( 
      <View>
      <Header text="發現"/>
      <View style={styles.serviceList} >
      <FlatList
      data={this.state.serviceListDetails}
      renderItem={({item})=>this.renderItem(item)}
      />
      </View>
      </View>
    )
  }

  renderItem(item){
    if(item.type==="space"){
      return(
        <View style={{height:12, backgroundColor:"#DDDDDD"}} />
      )
    }
    else if(item.type==="item"){
      return(
        <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>alert("hi")} >
        <ListItem icon={item.icon} text={item.text}/>
        </TouchableHighlight>
      )
    }
  }

}

const styles=StyleSheet.create({
  serviceList:{
    marginTop:56,
  }
})