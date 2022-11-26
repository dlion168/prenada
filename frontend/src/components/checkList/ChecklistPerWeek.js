import { View, StyleSheet, Pressable,  ScrollView, Text, FlatList} from 'react-native';
import { NavBar } from '../NavBar';
import ChecklistItem from './ChecklistItem'
import { useCheckList } from './hooks/useCheckList';
const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
    },
    intro: {
        fontSize: 14,
        paddingTop: 8,
        paddingBottom: 8,
    },
    pad: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    block: {
        margin: 24,
    },
})

const ChecklistPerWeek = (week) =>{
    const { checkListData } = useCheckList()
    week = week.week > -1 ? week.week : 0;
    const { intro, title, data } = checkListData[week]
    return(
    <View style = {styles.bg}>
        <NavBar centerText='Checklist' leftIcon='cheveron-left-s' 
            leftIconOnPress={() => {navigation.jumpTo('Home')}}/>
        <View style = {styles.block}>
        <Text style = {styles.intro}> { intro } </Text>
        <Text style = {styles.title}> { title } </Text>
        <FlatList 
        data = {data}
        renderItem = { (e) => {
            return (
            <View style={styles.pad} key={e.index}>
                <ChecklistItem idx={e.index} week={week} checked={e.item.checked} text={e.item.text} liked={e.item.liked}></ChecklistItem>
            </View>)}}
        keyExtractor={(item) => item.text}>
        </FlatList>
        </View>
    </View>
    )
}
export default ChecklistPerWeek
