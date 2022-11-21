import {ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import Message from '../components/Message'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const ChatScreen = () => {
    const route = useRoute();
    const navigation  = useNavigation();

    useEffect(() => {
        navigation.setOptions({title:route.params.user})
    },[route.params.user]);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={164}  style={styles.bg}> 
        <ImageBackground source={bg} styles={styles.bg}>
            <FlatList  
                data={messages}  
                renderItem = {
                    ({item}) => <Message message={item} /> 
                }
                style ={styles.list}
                inverted
            />
            <InputBox/>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg:{
        flex:0.9,
    },
    list:{
        padding:10,
    },
    inputbox:{
    }
})