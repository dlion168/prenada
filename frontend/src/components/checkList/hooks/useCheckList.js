import { useState, createContext, useContext, useEffect } from "react";
const CheckListContext = createContext({
    checkListData: [],
    setCheckListData: ()=>{},
    onDeleteHandler: ()=>{},
});
const ChecklistProvider = (props) => {
    const [checkListData, setCheckListData] = useState([
        {
            intro: 'When you’re gearing up for baby, there\'s a lot to do. This handy month-by-month pregnancy checklist walks you through the key tasks for every stage of the journey, from TTC to your first month with baby.',
            title: 'TTC Checklist',
            data: [
                { 'checked': true, 'text': 'Start taking prenatal vitamins.', 'liked': true },
                { 'checked': true, 'text': 'Talk to relatives about your family medical history, including birth defects, miscarriages and genetic disorders', 'liked': true },
                { 'checked': false, 'text': 'Get a preconception checkup.', 'liked': false },
                { 'checked': false, 'text': 'Get a tetanus booster and German measles and chicken pox.', 'liked': false },
                { 'checked': false, 'text': 'See the dentist', 'liked': false },
                { 'checked': false, 'text': 'If you\'re self-employed, apply for a private disability policy', 'liked': false }
            ]
        },
        {
            intro: 'Congratulations, mama - you\'re pregnant! You\'re probably overcome with joy and maybe a little anxious, too. Don\'t stress! Here\'s what you\'ll need to tackle during your first trimester:',
            title: 'Week 1 of Pregnancy',
            data: [
                { 'checked': true, 'text': 'Start taking a prenatal vitamin that includes folic acid if you haven\'t already', 'liked': true },
                { 'checked': false, 'text': 'Write down the date of your last period or two', 'liked': true },
                { 'checked': false, 'text': 'With your partner, create a family health history, including any genetic or chromosomal disorders', 'liked': false },
                { 'checked': false, 'text': 'Quit smoking, and focus on having a healthy diet and lifestyle', 'liked': false }
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 2 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 3 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 4 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 5 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 6 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 7 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 8 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 9 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 10 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 11 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 12 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 13 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 14 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 15 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 16 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 17 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 18 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'Week 19 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 20 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 21 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 22 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 23 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 24 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 25 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 26 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 27 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 28 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 29 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 30 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 31 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 32 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 33 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 34 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 35 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 36 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 37 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 38 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 39 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
        {
            intro: 'intro text',
            title: 'week 40 of Pregnancy',
            data: [
                { 'checked': false, 'text': 'something to do', 'liked': false },
            ]
        },
    ])

    const onDeleteHandler = (week, idx) => {
        let a = checkListData;
        a[week].data.splice(idx, 1);
        setCheckListData([...a]);
    };
    return <CheckListContext.Provider
        value={{ checkListData, setCheckListData, onDeleteHandler }}
        {...props}
    />
};
const useCheckList = () => useContext(CheckListContext);
export { useCheckList, ChecklistProvider };