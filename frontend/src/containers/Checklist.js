import ChecklistByTrimester from '../components/checkList/ChecklistByTrimester';
import { NavBar } from '../components/NavBar';
import { useState } from 'react';

const Checklist = () => {
    const [search, setSearch] = useState('');
    const [trimester, setTrimester] = useState(1)
    return (
        <>
            <NavBar centerText='Checklist' />
            <ChecklistByTrimester 
            search={search} 
            setSearch={setSearch} 
            trimester={trimester}
            setTrimester={setTrimester}></ChecklistByTrimester>
        </>
    )
    }
export default Checklist;