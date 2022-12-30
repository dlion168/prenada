import { useState, createContext, useContext, useEffect } from "react";
import axios from '../../../api'
const CheckListContext = createContext({
    displayWeek: undefined,
    curWeek: undefined,
    setDisplayWeek: ()=>{},
    checkListData: [],
    setCheckListData: ()=>{},
    onDeleteHandler: ()=>{},
});
const ChecklistProvider = (props) => {
    const [checkListData, setCheckListData] = useState({intro:"", title:"", data:[]})
    const [curWeek, setCurWeek] = useState(2)
    const [displayWeek, setDisplayWeek] = useState(curWeek)
    const getChecklistByWeek = async (week, setfunc) => {
        const {
            data: { message, checklists },
        } = await axios.get('/checklist/week', {
            params: {week: week}
        });
        console.log(message, checklists);
        setfunc(checklists);
    }
    const deleteChecklistItem = async (_id) => {
        const {
            data: { message,  returnID },
        } = await axios.delete('/checklist/delItem', {
            params: {id: _id}
        });
        console.log(message, returnID);
    }
    const postChecklistItem = async (item) => {
        const {
            data: { message,  returnItem },
        } = await axios.delete('/checklist/delItem', {
            params: {item: item}
        });
        console.log(message, returnItem);
        // TODO: Update returned item in local
    }

    useEffect(() => {
        getChecklistByWeek(displayWeek, setCheckListData);
    }, [displayWeek])

    const onDeleteHandler = (_id) => {
        let deletedId = deleteChecklistItem(_id);
        let arrayId = checkListData.data.find(function(item, i){
            if(item._id === deletedId){
              return i
            }
          }); 
        let a = JSON.parse(JSON.stringify(checkListData))
        a.data.splice(arrayId, 1);
        setCheckListData(a);
    };

    return <CheckListContext.Provider
        value={{ displayWeek, curWeek, setDisplayWeek, checkListData, setCheckListData, onDeleteHandler }}
        {...props}
    />

};
const useCheckList = () => useContext(CheckListContext);
export { useCheckList, ChecklistProvider };