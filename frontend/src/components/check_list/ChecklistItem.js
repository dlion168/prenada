import { Text, View } from 'react-native';
import { CheckBox } from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    item: {
        marginHorizontal: 10,
        marginVertical: 7,
        paddingRight: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        color: '#000000',
        fontSize: 30,
        margin: 5,
    }
})
const ChecklistItem = ({checked, text, liked})=>{
    return( 
    <TouchableOpacity style={styles.item}>
        <CheckBox value={checked}></CheckBox>
        <Text style={styles.title}
              numberOfLines={1}>{text}</Text>
        <FontAwesome5
            name={heart}
            size={20}
            color={liked ? "#ff0000":"transparent"}/>
        {/* <TouchableOpacity
            style={styles.delete}>
            <FontAwesome5
                name={'trash'}
                size={25}
                color={'#ff3636'}
                />
        </TouchableOpacity> */}
    </TouchableOpacity>
    )
}
export default ChecklistItem;