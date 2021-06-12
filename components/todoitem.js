import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Todoitem({item,pressHandler}){
 return(
     <TouchableOpacity onPress={()=>pressHandler(item.key)}>
         <Text style={styles.item}>{item.text}</Text>
     </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderRadius:10,
        borderStyle:'dashed',
        borderWidth:1,
        backgroundColor:'#3CD4EA'
    }
})