import { View, StyleSheet, Pressable,  ScrollView, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import useCheckList from '../components/checkList/hooks/useCheckList'
import MonthSection from '../components/checkList/MonthSection';
import { NavBar } from '../components/NavBar';

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#ffffff',
    },
    btnGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:20,
        paddingBottom:20,
    },
    btn:{
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        paddingHorizontal: 4,
        paddingVertical: 8,
        borderStyle: 'solid',
        borderColor: '#f87171',
        borderWidth: 1,
        width: '20%',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Lato',
    },
    trimesterBtn:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
        color: '#f87171',
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        border: 0,
    },
})
const Checklist = ({ search, setSearch}) => {
    const {trimester, setTrimester} = useCheckList()
    return (
        <>
            <NavBar centerText='Checklist' />
            <ScrollView style={styles.body}>
                <SearchBar value={search}
                           onChangeText={(search) => {setSearch(search)}}
                           placeholder='Search Checklist, Keywords, and more' 
                           round={true} 
                           containerStyle={styles.searchBar}
                           inputContainerStyle={{backgroundColor: '#F2F2F2'}} />
                
                <View style={styles.btnGroup}>
                    <Pressable style={ trimester === 1 ? [styles.btn, {backgroundColor: '#f87171'}] : styles.btn} onPress = {() => setTrimester(1)}>
                        <Text style={ trimester === 1 ? [styles.trimesterBtn, {color: '#FFFFFF'}] : styles.trimesterBtn}>1st Trimester</Text>
                    </Pressable>
                    <Pressable style={ trimester === 2 ? [styles.btn, {backgroundColor: '#f87171'}] : styles.btn} onPress = {() => setTrimester(2)}>
                        <Text style={ trimester === 2 ? [styles.trimesterBtn, {color: '#FFFFFF'}] : styles.trimesterBtn}>2nd Trimester</Text>
                    </Pressable>
                    <Pressable style={trimester === 3 ? [styles.btn, {backgroundColor: '#f87171'}] : styles.btn} onPress = {() => setTrimester(3)}>
                        <Text style={ trimester === 3 ? [styles.trimesterBtn, {color: '#FFFFFF'}] : styles.trimesterBtn}>3rd Trimester</Text>
                    </Pressable>
                </View>
                <MonthSection></MonthSection>
            </ScrollView>
        </>
    )
    }
export default Checklist;