import { run } from "jest";
import React, {useState} from"react";
import{
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
}from'react-native'

import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";




const App=()=>{
  const [uri,setUri]=useState(DiceOne);
  const [uri1,setUri1]=useState(DiceTwo);
  const playButtonTapped=()=>{
    const rundomNumber=Math.floor(Math.random()*6)+1
    const rundomNumber1=Math.floor(Math.random()*6)+1
    switch(rundomNumber){
    case 1:
      setUri(DiceOne);
      break;
    case 2:
      setUri(DiceTwo);
      break;
    case 3:
      setUri(DiceThree);
      break;
    case 4:
      setUri(DiceFour);
      break;
    case 5:
      setUri(DiceFive);
      break;
    case 6:
      setUri(DiceSix);
      break                       
    }
    switch(rundomNumber1){
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break                       
      }
      
  }



  return(
  <>
  <StatusBar backgroundColor="#F2A365"/>
  <View style={styles.container}>
    <Image style={styles.image} source={uri}/>
    <Image style={styles.image} source={uri1}/>
    <TouchableOpacity onPress={playButtonTapped}>
      <Text style={styles.playgamebutton}>Play Game</Text>
    </TouchableOpacity>
  </View>
  </>);


};

export default App

const styles = StyleSheet.create({
  container :{
    flex :1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#222831"
  },
  image:{
    width:200,
    height:200,
  },
  playgamebutton:{
    fontSize:25,
    color:"#F2A365",
    borderColor:"#30475E",
    borderWidth:3,
    borderRadius: 5,
    fontWeight:"bold",
    paddingHorizontal:40,
    paddingVertical:10,
    marginTop:30,


  },
})