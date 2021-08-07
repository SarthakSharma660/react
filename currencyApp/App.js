import React,{useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
}from "react-native";

import SnackBar from 'react-native-snackbar';

const currencyPerRupee={
  DOLLAR:0.014,
  EURO:0.012,
  POUND : 0.011,
  RUBEL :0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004
}

const App=()=>{
  const [inputValue,setInputValue]=useState(0);
  const [resultValue,setResultValue]=useState(0);
  const buttonPressed = (currency) => {
    if(!inputValue){
      return SnackBar.show({
        text: 'Please enter some value',
        backgroundColor: "#EA7773",
        textColor:"#000000",
      });
      }

     let result= parseFloat(inputValue)*currencyPerRupee[currency];
     setResultValue(result.toFixed(2)); 
  };
  return(
    <>
     <ScrollView backgroundColor="#1b262c"
      keyboardShouldPersistTaps={"handled"}
      contentInsetAdjustmentBehavior={"automatic"}
>
      <SafeAreaView style={styles.container}>
         <View style={styles.resultContainer}>
           <Text style={styles.resultValue} >{resultValue}</Text>
         </View>
         <View style={styles.inputContainer}>
           <TextInput 
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Value"
            placeholderTextColor="#c1c1c1"
            value={inputValue}
            onChangeText={(inputValue)=>setInputValue(inputValue)}></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency)=>(
            <TouchableOpacity
            onPress={()=>{buttonPressed(currency)}}
            key={currency}
            style={styles.converterButton}
            >
              <Text style={styles.converterButtonText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </SafeAreaView>
    </ScrollView>
    </>
  );
};

export default App;

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#1b262c",
    },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    alignItems:"center",
    borderWidth:2,
  },
  resultValue:{
    fontSize:30,
    color:"#FFF",
    fontWeight:"bold",
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#bbe1fa",
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#FFFF",
    fontWeight:"bold",
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    margin:10,
  },
  converterButtonText:{
    color:"#FFF",
    fontSize:15,
    fontWeight:"bold"
  },
  converterButton:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:12,
    marginRight:12,
    height:100,
    width:("30.3%"),
    borderColor:"#bbe1fa",
    borderWidth:3,
    backgroundColor:"#0f4c75"
  },
})