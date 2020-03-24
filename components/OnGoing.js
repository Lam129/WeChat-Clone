import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class OnGoing extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.paragrah} >工程進行中</Text>
      <Image style={styles.logo} source={require("../assets/QQ icon.png")}>
      </Image>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  paragrah:{
    margin:24,
    marginTop:0,
    fontSize:14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo:{
    height: 128,
    width: 128,
  }
})