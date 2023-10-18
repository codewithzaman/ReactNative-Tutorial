import { View, Text,StyleSheet,FlatList } from 'react-native'
import React,{useState} from 'react'
import Header from './components/Header'
import { uuid } from 'uuidv4'

export default function App() {
  const [items,setItems] = useState([
    {id:uuid(),text:'Milk'},
    {id:uuid(),text:'Eggs'},
    {id:uuid(),text:'Bread'},
    {id:uuid(),text:'Juice'},
])
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList data={items}
      renderItem={({item})=>{
        <Text>{item.text}</Text>
      }}/>
    </View>
  )

}
const styles = StyleSheet.create({
  container :{
    flex:1,
    paddingTop:60,
    // justifyContent:'center',
    // alignItems:'center',
  },
  // text:{
  //   color:'darkslateblue',
  //   fontSize:30
  // }
})