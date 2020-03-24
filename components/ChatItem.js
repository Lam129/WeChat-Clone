import * as React from 'react';
import { View, Text, Image, Dimensions, TouchableHighlight,StyleSheet } from 'react-native'

export default class ChatItem extends React.Component{
  render () {
    return (
      <View style={styles.item} >
      <View style={styles.headBox} >
      <Image style={styles.headIcon} source={ this.props.icon || require("../assets/QQ icon.png")} />
      <Text style={styles.msgNum} >{this.props.msgNum || "4"}</Text>
      </View>
      <View style={styles.msgBox} >
      <Text style={styles.speaker} >
      {this.props.speaker || "腾讯新闻"}
      </Text>
      <Text style={styles.msg} >{this.props.msg || "今天吃什么..."}</Text>
      </View>
      <Text style={styles.date} >{this.props.date || "昨天"}</Text>
      </View>
    )
  }
} 

const {width}=Dimensions.get("window");

const styles=StyleSheet.create({
  item:{
    height:64,
    padding:8,
    flexDirection:"row",
    borderBottomWidth:0.5,
    borderBttomColor:"#999999",
  },
  headBox:{
    width:50,
    marginRight:8,
    position:"relative",
    alignItem:"center",
    justifyContent:"center",
  },
  headIcon:{
    width:48,
    height:48,
  },
  msgNum:{
    backgroundColor:"red",
    width:14,
    height:14,
    borderRadius:7,
    color:"#fff",
    textAlign:"center",
    fontSize:10,
    position:"absolute",
    right:0,
    top:0,
  },
  msgBox:{
    width:width-50-8-50,
    flexDirection:"column",
    justifyContent:"space-around",
  },
  speaker:{
    fontSize:16,
    color:"#000",
    marginTop:4,
  },
  msg:{
    fontSize:14,
    color:"#999999"
  },
  date:{
    marginTop:4,
    fontSize:12,
    color:"#999999",
  }
 })
