import * as React from "react";
import {Image, Text, TouchableHighlight, View, StyleSheet} from "react-native"

export default class ListItem extends React.Component{
  render(){
    return(
      <View style={styles.item} >
      <Image source={this.props.icon || require("../assets/FailedDownload.jpg") } style={styles.icon} />
      <Text style={styles.text} >{this.props.text || "朋友推薦信息" }</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  item:{
    flexDirection:"row",
    padding:4,
    height:48,
    alignItem:"center",
    paddingRight:16,
    marginLeft:16,
    borderBottomWidth:0.5,
    borderBttomColor:"#999999",
  },
  icon:{
    width:36,
    height:36,
  },
  text:{
    fontSize:16,
    marginLeft:10,
    color:"#000",
  }
})