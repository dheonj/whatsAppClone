import {ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import Message from '../components/Message'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox'

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={40}  style={styles.bg}> 
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
        flex:1,
    },
    list:{
        padding:10,
    }
})