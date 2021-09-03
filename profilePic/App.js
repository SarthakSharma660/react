import React,{useState} from 'react';
import{
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
}from 'react-native'
import {RNCamera} from 'react-native-camera'
const PendingView=()=>(
  <View style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }}>
      <Text style={{
      fontSize:32,
      color:"red",
    }}>
      Loading...</Text> 
  </View>

)
const App=()=>{
  const [image,setImage]=useState(null)
  const takePicture=async (camera)=>{
    try {
      const option={quality:0.9,base64:false }
      const data=await camera.takePictureAsync(option)
      setImage(data.uri)
    } catch (error) {
      console.warn(error)      
    }
  }
  return(
    <View style={styles.container}>
    {image  ?(
      <View style={styles.preview}>
        <Text style={styles.camtext}>Here is the new profile pic</Text>
        <Image style={styles.clicked} source={{uri : image,width:'100%', height:'80%'}} />
        <Button
        title="Click new Image"
        onPress={()=>{
          setImage(null)
        }}
        ></Button>
      </View>
      ) :(
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title : "Permission to use camera",
        message :"longer text to use camera",
        buttonPositive:"OK",
        buttonNegative:"Cancle"
      }}
      androidRecordAudioPermissionOptions={{
        title : "Permission to use audio",
        message :"longer text to use audio",
        buttonPositive:"OK",
        buttonNegative:"Cancle"
      }}

      >
        {({camera,status})=>{
          if (status!=='READY') return <PendingView/>
          return(
          <View 
            style={{
              flex:0,
              flexDirection:'row',
              justifyContent:"center"
            }}
          >
            <TouchableOpacity
            style={styles.capture}
            onPress={()=>takePicture(camera)}
            >
              <Text>SNAP</Text>
            </TouchableOpacity>
          </View>
        )
        }}
      </RNCamera>
    )}
    </View>
  )
}

export default App;
const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column",
    backgroundColor:"#0A79DF"

  },
  preview:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-around"
  },
  capture:{
    flex:0,
    backgroundColor:"orange",
    padding:20,
    alignSelf:"center"
  },
  camtext:{
    backgroundColor:"#3498DB",
    color:"#FFF",
    marginBottom : 10,
    width:"100%",
    textAlign:"center",
    paddingVertical:20,
    fontSize:20

  },
  clicked:{
    width:300,
    height:300,
    borderRadius:150,
  }
})