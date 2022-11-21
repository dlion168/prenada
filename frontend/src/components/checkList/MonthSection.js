import useCheckList from './hooks/useCheckList';
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';
import MonthItem from './MonthItem'
const styles = StyleSheet.create({
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 24,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})
const checkByMonth=[
    {'title': 'Getting Pregnant', 'elements': ['TTC Checklist'], } , 
    {'title': 'Month 1', 'elements': [1,2,3,4].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 2', 'elements': [5,6,7,8].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 3', 'elements': [9,10,11,12,13].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 4', 'elements': [14,15,16,17].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 5', 'elements': [18,19,20,21,22].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 6', 'elements': [23,24,25,26,27].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 7', 'elements': [28,29,30,31].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 8', 'elements': [32,33,34,35].map((i)=>`Week ${i} of Pregnancy`),} , 
    {'title': 'Month 9', 'elements': [36,37,38,39,40].map((i)=>`Week ${i} of Pregnancy`),}
    ]
const MonthSection = () =>{
    const { trimester } = useCheckList();
    const renderOneMonth = ({item})=>{
        return(
        <>
            <View style={styles.titleRow} >
                <Text style={styles.title} >{item.title}</Text>
            </View>
            <FlatList
            data = {item.elements}
            renderItem = {(e) => {
                return <MonthItem text={e.item} status={'past'}></MonthItem>
            }}
            keyExtractor={(item) => item}>
            </FlatList>
        </>)
    }
    return (
        <FlatList
            data = { trimester === 1 ? checkByMonth.slice(0,4) : trimester === 2 ? checkByMonth.slice(4,7) : checkByMonth.slice(7,10)}
            renderItem = {renderOneMonth}
            keyExtractor={(item) => item.title.charAt(item.title.length - 1)}
        >
        </FlatList>
    )
};

export default MonthSection;