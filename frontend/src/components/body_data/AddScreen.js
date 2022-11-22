import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
// import DatePicker from 'react-native-datepicker';
import SymptomSummary from './SymptomSummary';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF', 
        padding:10
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
    },
    img: {
        borderRadius: 30,
        height: 60,
        width: 60,
        backgroundColor: '#bae6fd',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
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
    updateButton: {
        borderRadius: 20,
        height: 40,
        paddingBottom:10
    }
})

const AddScreen = () => {
    const [date, setDate] = useState('09-10-2022');

    return (
        <ScrollView style={styles.body}>
            <View style={styles.item} >
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
            <View style={styles.buttonGroup} >
                <View style={styles.buttonItem} >
                    <Text style={styles.text} >Weight</Text>
                    <View style={styles.img}></View>
                </View>
                <View style={styles.buttonItem}>
                    <Text style={styles.text} >Sleep</Text>
                    <View style={styles.img}></View>
                </View>
                <View style={styles.buttonItem}>
                    <Text style={styles.text} >Water</Text>
                    <View style={styles.img}></View>
                    {/* <Image /> */}
                </View>
            </View>
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
            <SymptomSummary />
            <Button
                style={styles.updateButton}
                // onPress={onPressLearnMore}
                title="Update Your Day"
                color="#F87171"
                accessibilityLabel="Update Your Day"
            />
        </ScrollView>
    );
}

export default AddScreen;