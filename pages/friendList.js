import * as React from "react"
import { Text, View, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import OnGoing from "../components/OnGoing"
import Header from "../components/Header"
import ListItem from "../components/ListItem"

export default class friendList extends React.Component{  
  constructor(props){
    super(props);
    this.state={
      freindListDetail:[
      {
        type:"category",
        icon:require("../assets/newFriend.png"),
        text:"朋友推薦信息",
      },
      {
        type:"mark",
        text:"超級好友",
      }
      ]
    }
  }

  render(){
    return (
      <View>
      <Header text="通訊錄"/>
      <View style={styles.friendList} >
      <FlatList
      data={this.state.freindListDetail}
      renderItem={({item})=>this.renderItem(item)}
      />
      </View>
      </View>
    )
  }

  renderItem(item){
    if(item.type==="mark"){
      return (
        <Text style={styles.markText} >{item.text}</Text>
      )
    }
    else if(item.type==="category"){
    return(
      <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>alert("hi")} >
      <ListItem icon={item.icon} text={item.text} />
      </TouchableHighlight>
    )
    }
  }

}

const styles=StyleSheet.create({
  friendList:{
    marginTop:53,
    flexDirection:"column",
  },
  markText:{
    height:24,
    paddingLeft:20,
    backgroundColor:"#DDDDDD"
  }
})

