import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler = (val)=>{
        setText(val)
    }
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='Add Todo...'
            onChangeText={(val)=> changeHandler(val)}
            value={text}
            />
            <Button onPress={()=> submitHandler(text)} title='Add Todo' color='#128BA7'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})