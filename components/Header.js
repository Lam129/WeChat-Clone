import * as React from 'react'; 
import {View, StyleSheet, Dimensions,Text,Image,TouchableHighlight } from 'react-native';
import {Menu,MenuTrigger,MenuOptions,MenuOption,MenuProvider} from "react-native-popup-menu"

const {width}=Dimensions.get("window");

export default class Header extends React.Component{
  render(){
    return ( 
      <View style={styles.header}>
      <Text style={styles.headerTitle}>{this.props.text}</Text>
      <Image 
      resizeMode="contain"
      style={[styles.headerImageSize,styles.headerImageSearch]}
      source={require("../assets/searchW.png")}/>
      <Menu style={[styles.headerImageSize,styles.headerImageAdd]}>
      <MenuTrigger style={styles.headerImageSize} >
      <Image
      resizeMode="contain"
      source={require("../assets/addWpng.png")}
      style={styles.headerImageSize}
      />
      </MenuTrigger>
      <MenuOptions customStyles={optionStyles} >
      <MenuOption onSelect={()=>alert("新聊天")}>
      <View style={styles.menu} >
      <Image  style={styles.menuIcon} source={require("../assets/createChatW.png")} />
      <Text style={styles.menuText} >新聊天</Text>
      </View>
      </MenuOption>
      <MenuOption onSelect={()=>alert("新增朋友")} >
      <View style={styles.menu} >
      <Image style={styles.menuIcon} source={require("../assets/addFriendW.png")} />
      <Text style={styles.menuText} >新增朋友</Text>
      </View>
      </MenuOption>
      <MenuOption onSelect={()=>alert("掃描")} >
      <View style={styles.menu} >
      <Image style={styles.menuIcon} source={require("../assets/scanW.png")} />
      <Text style={styles.menuText} >掃描</Text>
      </View>
      </MenuOption>
      <MenuOption onSelect={()=>alert("QR Code 收款")} >
      <View style={styles.menu} >
      <Image style={styles.menuIcon} source={require("../assets/qrPaymentW.png")} />
      <Text style={styles.menuText} >QR Code 收款</Text>
      </View>
      </MenuOption>
      <MenuOption onSelect={()=>alert("幫助與收反饋")} >
      <View style={styles.menu} >
      <Image style={styles.menuIcon} source={require("../assets/help&feedbackW.png")} />
      <Text style={styles.menuText} >幫助與收反饋</Text>
      </View>
      </MenuOption>
      </MenuOptions>
      </Menu>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  header:{
    flex:0,
    height:50, 
    width: width,
    backgroundColor:"#373b3e",
    position:"absolute",
    alignItems:"center",
    paddingLeft:16,
    paddingRight:16,
    flexDirection:"row",
    overflow:"hidden",
  },
  headerTitle:{
    color:"#fff",
    fontSize:20,
  },
  headerImageSize:{
    width:30,
    heigth:50,
  },
  headerImageSearch:{
    position:"absolute",
    right:64,
  },
  headerImageAdd:{
    position:"absolute",
    right:16,
  },
  menu:{
    flexDirection:"row",
    alignItems:"center",
  },
  menuIcon:{
    width:20,
    height:20,
  },
  menuText:{
    color:"#fff",
    marginLeft:12,
  }
})

const optionStyles={
  optionsContainer:{
    marginTop:50,
    backgroundColor:"#373b3e",
  },
  optionsWrapper:{
    backgroundColor:"#373b3e",
  },
  optionWrapper:{
    backgroundColor:"#373b3e",
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:18,
  },
  optionTouchable:{
    underlayColor:"#373b3e",
    activeOpacity:50,
  },
  optionText:{
    color:"#fff",
  },
}