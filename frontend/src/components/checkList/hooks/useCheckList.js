import { useState, createContext, useContext, useEffect } from "react";
const CheckListContext = createContext({
    checkListData: [],
    setCheckListData: ()=>{},
    onDeleteHandler: ()=>{},
   });
const ChecklistProvider = (props) =>{
    const [checkListData, setCheckListData] = useState([{
        'intro': 'When you’re gearing up for baby, there\'s a lot to do. This handy month-by-month pregnancy checklist walks you through the key tasks for every stage of the journey, from TTC to your first month with baby.',
        'title': 'TTC Checklist', 'data':[
        { 'checked': true, 'text': 'Start taking prenatal vitamins.', 'liked': true },
        { 'checked': false, 'text': 'Talk to relatives about your family medical history, including birth defects, miscarriages and genetic disorders', 'liked': true },
        { 'checked': false, 'text': 'Get a preconception checkup.', 'liked': false },
        { 'checked': false, 'text': 'Get a tetanus booster and German measles and chicken pox.', 'liked': false },
        { 'checked': false, 'text': 'See the dentist', 'liked': false },
        { 'checked': false, 'text': 'If you\'re self-employed, apply for a private disability policy', 'liked': false }
    ]},
    {
        'intro': 'Congratulations, mama - you\'re pregnant! You\'re probably overcome with joy and maybe a little anxious, too. Don\'t stress! Here\'s what you\'ll need to tackle during your first trimester:',
        'title': 'Week 1 of Pregnancy', 'data':[
        { 'checked': false, 'text': 'Start taking a prenatal vitamin that includes folic acid if you haven\'t already', 'liked': true },
        { 'checked': false, 'text': 'Write down the date of your last period or two', 'liked': true },
        { 'checked': false, 'text': 'With your partner, create a family health history, including any genetic or chromosomal disorders', 'liked': false },
        { 'checked': false, 'text': 'Quit smoking, and focus on having a healthy diet and lifestyle', 'liked': false }
    ]},
    ])
    
    const onDeleteHandler = (index) => {
        console.log(index);
        let a = checkListData;
        a.splice(index, 1);
        setCheckListData([...a]);
      };
    return <CheckListContext.Provider
        value={{ checkListData, setCheckListData, onDeleteHandler }}
        {...props}
    />
};
const useCheckList = () => useContext(CheckListContext);
export { useCheckList, ChecklistProvider };