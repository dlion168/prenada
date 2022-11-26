import ChecklistByTrimester from '../components/checkList/ChecklistByTrimester';
import ChecklistPerWeek from '../components/checkList/ChecklistPerWeek';
import { useState } from 'react';

const Checklist = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [trimester, setTrimester] = useState(1);
    const [viewWeek, setViewWeek] = useState(-1);
    return (
        <>
            { (viewWeek < 0 ) ? 
            <ChecklistByTrimester 
                search={search} 
                setSearch={setSearch} 
                trimester={trimester}
                setTrimester={setTrimester}
                navigation = {navigation}
                setViewWeek = {setViewWeek}>
            </ChecklistByTrimester>:
            <ChecklistPerWeek week={viewWeek}>
            </ChecklistPerWeek>
            }
        </>
    )
    }
export default Checklist;