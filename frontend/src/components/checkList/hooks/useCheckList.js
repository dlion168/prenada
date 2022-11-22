import { useState, useEffect } from "react";
const useCheckList= () =>{
    const [checkListData, setCheckListData] = useState([
        { 'checked': false, 'text': 'Start taking prenatal Vitamin', 'liked': true },
        { 'checked': false, 'text': 'Write down the date of your last period or two', 'liked': true },
        { 'checked': false, 'text': 'With your partner, create a family health history, including any genetic or chromosomal disorders', 'liked': false },
        { 'checked': false, 'text': 'Quit smoking, and focus on having a healthy diet and lifestyle', 'liked': false },
    ])
    const [trimester, setTrimester] = useState(1)
    
    const onDeleteHandler = (index) => {
        console.log(index);
        let a = checkListData;
        a.splice(index, 1);
        setCheckListData([...a]);
      };
    return { checkListData, setCheckListData, trimester, setTrimester, onDeleteHandler }
};

export default useCheckList;