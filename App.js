import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      {/* <ChatScreen /> */}
      {/* <ChatListItem chat={chat} boolean='true'/> */}
      {/* <ChatListItem/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical:50,
  },
});
