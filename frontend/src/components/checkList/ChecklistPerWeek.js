import { View, StyleSheet, Pressable,  ScrollView, Text, FlatList} from 'react-native';
import ChecklistItem from './ChecklistItem'
import useCheckList from './hooks/useCheckList';
const styles = StyleSheet.create({

})

const ChecklistPerWeek = (week) =>{
    const { checkListData} = useCheckList()
    const {intro, title, data} = checkListData[week]
    return(
    <>
        <Text style = {styles.intro}> { intro } </Text>
        <Text style = {styles.title}> { title } </Text>
        <FlatList 
        data = {data}
        renderItem = { (e, id) => { return (
            <ChecklistItem id={id} checked={e.checked} text={e.text} liked={e.liked}></ChecklistItem>)}}
        keyExtractor={(item) => item.text}>
        </FlatList>
    </>
    )
}
export default ChecklistPerWeek
