import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Button } from 'react-native';
import SymptomSummary from './SymptomSummary';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        margin: 24,
        backgroundColor: '#F9FAFB',
        borderRadius: 10,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        margin: 24,
        justifyContent: 'center'
    },
    img: {
        borderRadius: 30,
        height: 60,
        width: 60,
        backgroundColor: '#bae6fd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 400,
        fontSize: 14,
        color: '#6B7280',
        paddingRight: 5
    },
    buttonItem: {
        alignItems: 'center'
    },
    addButton: {
        fontSize: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlign: 'right'
    },
    updateButton: {
        borderRadius: 20,
        height: 40,
        paddingBottom: 10
    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
    },
})

// const initialState = {
//     date: '09-10-2022',
//     weight: 1,
//     sleep: 2,
//     water: 3,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case "add":
//             return {
//                 date: '09-10-2022',
//                 weight: 0,
//                 sleep: 0,
//                 water: 0
//             };
//         case "setDate":
//             return { ...state, date: action.payload };
//         case "setWeight":
//             console.log(action.payload)
//             return { ...state, weight: action.payload };
//         case "setSleep":
//             return { ...state, sleep: action.payload };
//         case "setWater":
//             return { ...state, water: action.payload };
//         default:
//             throw new Error();
//     }
// }

const AddScreen = () => {
    const initSymptoms = [
        { 'symptomName': 'Cramps', 'choose': false },
        { 'symptomName': 'Tender breasts', 'choose': false },
        { 'symptomName': 'Headache', 'choose': false },
    ];
    const [date, setDate] = useState('09-10-2022');
    const [weight, setWeight] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [water, setWater] = useState(0);
    const [symptoms, setSymptoms] = useState(initSymptoms);
    // const [open, setOpen] = useState(false);

    const handleSymptomClick = (symptomName) => {
        let newSymptoms = symptoms;
        newSymptoms.map((obj, idx) => {
            if (obj['symptomName'] == symptomName)
                obj['choose'] = !obj['choose']
        });
        setSymptoms(newSymptoms);
    };

    const saveForm = () => {
        console.log(date, weight, sleep, water, symptoms);
        // const {
        //     data: { data, message },
        // } = await axios.get('/water', {
        //     params: {
        //         startDate: "20221024",
        //         endDate: "20221026",
        //     },
        // });
        // console.log(data)
        // setWaterDetail(data);
    };

    return (
        <ScrollView style={styles.body}>
            <View style={styles.item} name="datePicker" >
                <View>
                    <Text style={{ fontSize: 16, color: "#F87171" }} >Octobor 24, 2022</Text>
                    <Text style={styles.text} >Week 1</Text>
                </View>
                <View style={{ flex: 1 }} />
                <Text style={styles.text} >Change</Text>
                <FontAwesome5
                    name='chevron-right'
                    size={12}
                    color='#6B7280'
                    solid
                />
            </View>
            <View style={styles.buttonGroup} name='itemGroup' >
                <View style={styles.buttonItem} >
                    <Text style={styles.text} >Weight</Text>
                    <View style={styles.img}>
                        <Image
                            source={require('../../assets/image/BodyData/Chart increasing.png')}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.buttonItem}>
                    <Text style={styles.text} >Sleep</Text>
                    <View style={styles.img}>
                        <Image
                            source={require('../../assets/image/BodyData/Bed.png')}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.buttonItem}>
                    <Text style={styles.text} >Water</Text>
                    <View style={styles.img}>
                        <Image
                            source={require('../../assets/image/BodyData/Potable water.png')}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
            <View >
                <View style={styles.inputView}>
                    <Text>Date</Text>
                    <TextInput
                        style={styles.input}
                        value={date}
                        placeholder="useless placeholder"
                        keyboardType="string"
                        onChangeText={(value) => setDate(value)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text>Weight</Text>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        onChangeText={(value) => setWeight(value)}
                    />
                    <Text>kg</Text>
                </View>
                <View style={styles.inputView}>
                    <Text>Sleep</Text>
                    <TextInput
                        style={styles.input}
                        value={sleep}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        onChangeText={(value) => setSleep(value)}
                    />
                    <Text>hr</Text>
                </View>
                <View style={styles.inputView}>
                    <Text>Water</Text>
                    <TextInput
                        style={styles.input}
                        value={water}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        onChangeText={(value) => setWater(value)}
                    />
                    <Text>ml</Text>
                </View>
            </View>
            {/* <Tooltip 
            ModalComponent={Modal}
                popover={
                    <Text>Tooltip info goes here too. Find tooltip everywhere</Text>
                }
                containerStyle={{ width: 200, height: 60 }}
                visible={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }} /> */}

            {/* <View style={styles.container}>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2022"
                    maxDate="01-01-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    // customStyles={{
                    //     dateIcon: {
                    //         //display: 'none',
                    //         position: 'absolute',
                    //         left: 0,
                    //         top: 4,
                    //         marginLeft: 0,
                    //     },
                    //     dateInput: {
                    //         marginLeft: 36,
                    //     },
                    // }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                />
            </View> */}
            <SymptomSummary
                addMode={true}
                handleSymptomClick={handleSymptomClick}
                symptoms={symptoms} />
            <Button
                style={styles.updateButton}
                onPress={saveForm}
                // onClick={() => dispatch({ type: "increment" })}
                title="Update Your Day"
                color="#F87171"
                accessibilityLabel="Update Your Day"
            />
        </ScrollView>
    );
}

export default AddScreen;