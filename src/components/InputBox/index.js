import { View, TextInput, StyleSheet } from 'react-native'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');
    const onSend = () => {
        console.warn('sending message')
        setNewMessage(''); 
    }
  return (
    <SafeAreaView edges={['bottom']} style = {styles.container} >
        <AntDesign name = 'plus' size ={20} color = "royalblue" />
        <TextInput value = {newMessage} onChangeText={setNewMessage} style={styles.input} placeholderTextColor='lightgray' placeholder='type here!!!' />
        <MaterialIcons onPress = {onSend} name='send' size = {16} color = 'white' style={styles.send} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container:{
        // alignSelf:'flex-end',
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        paddingHorizontal:10,
        alignItems:'center'
    },
    input:{
        flex:1,
        backgroundColor:'white',
        borderRadius:50,
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal:10,
    
        borderColor:'lightgray',
        borderWidth:StyleSheet.hairlineWidth,
    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,
        overflow:'hidden'
    }
})

export default InputBox