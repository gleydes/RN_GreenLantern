import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'

export default function App() {

  const [isActive, setisActive] = useState(false)


  function handleSymbol(){
    setisActive((oldValue:boolean) =>{
      return !oldValue
    })

  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      {/* comentário
      <Text 
        style={{
          color:'blue', 
          backgroundColor:'red', 
          fontSize:30
        }}
      >
       Simone Vieira Mendes</Text>
      <View style={{backgroundColor:'purple'}}>
        <Text style={styles2.titleStyle}>Oiee Gaelll!!</Text>
        <Text style={styles2.titleStyle}>Oiee Gleydes</Text>
      </View>
       */}
       <TouchableOpacity onPress={()=>{handleSymbol()}}>
       <Image source={ isActive ? symbolOn : symbolOff }></Image>
       </TouchableOpacity>

    </View>
  );
}

const styles2 = StyleSheet.create({
  titleStyle:{
    fontSize:35,
    color:'#f1f1f1'
  }
})

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:{
    flex:1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
