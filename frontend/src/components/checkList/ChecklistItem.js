import { StyleSheet, Pressable, View, Text } from 'react-native';
import { ActionIcon } from '../ActionIcon';
import useCheckList from './hooks/useCheckList';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
    taskCard: {
    },
    taskCardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB', // gray/50
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    checkBoxContainer: {
        padding: 12,
    },
    checkBox: {
        width: 20,
        height: 20,
        margin: 6,
    },
    label: {
        // flex: 1,
        fontSize: 14,
        color: '#1F2937', // gray/800
    },
    iconContainer: {
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

});

const ChecklistItem = ({ id, checked, text, liked }) => {
    // let row= [];
    // let prevOpenedRow = null;
    // const closeRow = (index) => {
    //     console.log('closerow');
    //     if (prevOpenedRow && prevOpenedRow !== row[index]) {
    //       prevOpenedRow.close();
    //     }
    //     prevOpenedRow = row[index];
    //   };
    const { checkListData, setCheckListData, onDeleteHandler } = useCheckList()
    const renderRightActions = (progress, dragX) => {
        return (
          <View
            style={{
              margin: 0,
              alignContent: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
            }}>
            <Pressable color="red" onPress={()=>{onDeleteHandler(id)}}>
                <ActionIcon iconName={'archive-s'} size={20} />
            </Pressable>
          </View>
        );
      };

    return (
        <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX)
        }
        // onSwipeableOpen={() => closeRow(id)}
        // ref={(ref) => (row[id] = ref)}
        rightOpenValue={-100}>
            <View style={styles.taskCardFlex}>
                <View style={styles.iconContainer} >
                    <ActionIcon iconName={checked ? 'checkBox-t' : 'checkBox-f'}
                        onPress={() => {
                            let c = checkListData
                            c[id].checked = !c[id].checked 
                            setCheckListData(c)}} size={20} />
                </View>
                <Text style={styles.label} numberOfLines={1}>{text}</Text>
                <View style={styles.iconContainer} >
                    <ActionIcon iconName={liked ? 'heart-t' : 'heart-f'}
                        onPress={() => {
                            let c = checkListData
                            c[id].checked = !c[id].checked 
                            setCheckListData(c)}} size={20} />
                </View>
            </View>
        </Swipeable>
    );
};

export default ChecklistItem;