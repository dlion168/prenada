import { View, StyleSheet, Pressable,  ScrollView, Text} from 'react-native';
import ChecklistByTrimester from '../components/checkList/ChecklistByTrimester';
const styles = StyleSheet.create({

})
const Checklist = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <ChecklistByTrimester search={search} setSearch={setSearch}></ChecklistByTrimester>
        </>
    )
    }
export default Checklist;