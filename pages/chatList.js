 import * as React from 'react'; 
import {View, StyleSheet, Dimensions,Text, TouchableHighlight,FlatList } from 'react-native';
import Header from "../components/Header";
import ChatItem from "../components/ChatItem";

export default class chatList extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      msgDetails:[
        {msgNum:3,speaker:"清潔龍阿德",msg:"唔好睇我咁Man...",date:"Today",icon:require("../assets/CartonIcon/Ah Tak.png"),fullMsg:"唔好睇我咁Man，平日鍾意打掃地方，保持環境清潔。"}
      ]
    }
  }

  render(){
    return ( 
      <View>
      <Header text="WeChat(88)" />
      <View style={styles.messageList} >
      <FlatList
      data={this.state.msgDetails}
      renderItem={({item})=>this.renderItem(item)}
      />
      </View>
      </View>    
    )
  }

  renderItem(item){
    return(
      <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>alert(item.fullMsg)}> 
      <ChatItem msgNum={item.msgNum} speaker={item.speaker} msg={item.msg} date={item.date} icon={item.icon} />
      </TouchableHighlight>
    )
  }

}

const styles=StyleSheet.create({
  messageList:{
    marginTop:44,
    flexDirection:"column",
  }
})
 
