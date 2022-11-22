import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native' 
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const ContactListItem = ({user}) => {
    const navigation = useNavigation();
    // console.log(user)
 return (
    <Pressable onPress={()=> {} } style={styles.container}>
       
        <Image 
            source={{uri:user.image}} 
            style={styles.image}
        />
        <View style={styles.content}>
            <View style={styles.row}>
                <Text numberOfLines={1} style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.row}>
                <Text numberOfLines={2} style={styles.subTitle}>
                    {user.status}
                </Text>
            </View>
        </View>

    </Pressable>
 );
};

export default ContactListItem;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 5,
      height: 70,
      alignItems: 'center',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
    },
    name: {
      fontWeight: 'bold',
    },
    subTitle: {
      color: 'gray',
    },
  });
