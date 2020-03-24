import * as React from "react"
import { Text, View, StyleSheet, Image, Dimensions, FlatList,TouchableHighlight } from 'react-native';
import ListItem from "../components/ListItem";

export default class myProfile extends React.Component{

  constructor(props){
    super(props);
    this.state={
      profileList:[
        {
          icon:require("../assets/ic_wechatPay.png"),
          text:"WeChat Pay",
        },
        {
          icon:require("../assets/ic_collection1.png"),
          text:"收藏",
        },
        {
          icon:require("../assets/ic_photo_blue1.png"),
          text:"相册",
        },
        {
          icon:require("../assets/ic_card_pack1.png"),
          text:"卡包",
        },
        {
          icon:require("../assets/ic_emo_yellow.png"),
          text:"表情",
        },
        {
          icon:require("../assets/ic_setting_blue.png"),
          text:"设置",
        }
      ]
    }
  }


  render(){
    return ( 
      <View style={styles.container}>

      <View style={styles.space} />

      <View style={styles.info} >

      <View style={styles.iconBox}>
      <Image style={styles.icon} source={require("../assets/MyIcon.jpeg")} />
      </View>
      
      <View style={styles.infoTextBox} >
      <Text style={styles.infoName} >關灝林</Text>
      <Text style={{fontSize:14}} >"WeChat ID : SHA-256"</Text>
      </View>

      <View style={styles.qrCodeBox} >
      <Image style={styles.qrCode} source={require("../assets/ic_qr_code.png")} />
      </View>

      </View>

      <View style={styles.space} />

      <View style={styles.profileListItems} >
      <FlatList
      data={this.state.profileList}
      renderItem={({item})=>this.renderItem(item)}
      />
      </View>

      </View>
    )
  }

  renderItem(item){
    return(
      <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>alert("hi")} >
      <ListItem icon={item.icon} text={item.text}/>
      </TouchableHighlight> 
    )
  }

}

const {width}=Dimensions.get("window");

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  space:{
    backgroundColor:"#DDDDDD",
    height:16,
  },
  info:{
    height:76,
    backgroundColor:"#fff",
    flexDirection:"row",
  },
  iconBox:{
    alignItems:"center",
    justifyContent:"center",
    width:100,
  },
  icon:{
    width:64,
    height:64,
  },
  infoTextBox:{
    justifyContent:"center",
    width:width-100-80,
  },
  infoName:{
    fontSize:18,
    color:"#000",
    marginBottom:4,
  },
  qrCodeBox:{
    width:80,
    justifyContent:"center",
    alignItems:"center",
  },
  qrCode:{
    width:20,
    height:20,
  },
  profileListItems:{
    flexDirection:"column",
    marginTop:3,
  }
})