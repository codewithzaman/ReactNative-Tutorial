import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

export default function ListItems({item}) {
    
  return (
    <TouchableOpacity style={styles.listitems}>
        <View style={styles.listitemsview}>
        <Text style={styles.listitemstext}>{item.text}</Text>
        </View>
    </TouchableOpacity>
  )

}
// Header.defaultProps={
//     title:'Shopping List',
// }
const styles = StyleSheet.create({
  header :{
    height: 60,
    padding:15,
    backgroundColor:"darkslateblue"
  },
  text:{
    color:'#fff',
    fontSize:23,
    textAlign:'center'
  }
})