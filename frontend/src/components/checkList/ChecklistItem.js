import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { ActionIcon } from '../ActionIcon';
import { useCheckList } from './hooks/useCheckList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
    taskCardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB', // gray/50
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    checkBox: {
        width: 20,
        height: 20,
        margin: 6,
    },
    label: {
        flex: 1,
        fontSize: 14,
        color: '#1F2937', // gray/800
    },
    deleteBox: {
        backgroundColor: '#F87171',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
});

const ChecklistItem = ({ week, _id, checked, text, liked }) => {
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
    const putChecklistItem = async (_id) => {
        const {
            data: { message, returnItem },
        } = await axios.put('/checklist/item', {
            params: {id: _id}
        });

        let arrayId = checkListData.data.find(function(item, i){
            if(item._id === _id){
              return i
            }
          });
        
          a = JSON.parse(JSON.stringify(checkListData))
          a.data[arrayId] = returnItem 
          console.log(message, a);
          setCheckListData(a);
    }
    return (
        <Swipeable
            renderRightActions={() =>
                <View style={styles.deleteBox}>
                    <ActionIcon iconName={'trash-s'} size={20} padding={18} onPress={() => onDeleteHandler(_id)} />
                </View>
            }
            // onSwipeableOpen={() => closeRow(idx)}
            // ref={(ref) => (row[idx] = ref)}
            rightOpenValue={-100}>
            <View style={styles.taskCardFlex}>
                <ActionIcon size={20} padding={18} iconName={checked ? 'checkBox-t' : 'checkBox-f'}
                    onPress={(event) => {
                        putChecklistItem(_id)
                    }
                } />
                <Text
                    style={checked ?
                        [styles.label, { color:'grey', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }] :
                        styles.label
                    }
                    numberOfLines={1}
                >{text}</Text>
                <ActionIcon size={20} padding={18} iconName={liked ? 'heart-t' : 'heart-f'}
                    onPress={() => {
                        putChecklistItem(_id)
                        onDeleteHandler       }
                } />
            </View>
        </Swipeable>
    );
};

export default ChecklistItem;