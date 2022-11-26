import { View, StyleSheet, Pressable,  ScrollView, Text} from 'react-native';
import ChecklistByTrimester from '../components/checkList/ChecklistByTrimester';
import { SearchBar } from 'react-native-elements';
import { useCheckList } from '../components/checkList/hooks/useCheckList'
import MonthSection from '../components/checkList/MonthSection';
import { NavBar } from '../components/NavBar';

const styles = StyleSheet.create({

})
const Checklist = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <ChecklistByTrimester search={search} setSearch={setSearch}></ChecklistByTrimester>
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