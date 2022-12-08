import React, { useState } from "react";
import {TextInput, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ActionIcon } from '../ActionIcon';
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      marginTop: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    taskCardFlex: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F9FAFB', // gray/50
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'space-between',
    },
    iconalign:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      margin: 12,
    },
    iconContainer: {
      padding: 12,
      display: 'flex',
      flexDirection: 'row',
    },
  });

const AddModal = ({modalVisible, setModalVisible}) => {
  const [text, onChangeText] = useState("");
  const [checked , setChecked] = useState(false);
  return (
    <Modal
    animationType = "slide"
    transparent = {true}
    visible = {modalVisible}
    onRequestClose={() => {
      setModalVisible(false);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.taskCardFlex}> 
          <ActionIcon size={20} padding={18} iconName={checked ? 'checkBox-t' : 'checkBox-f'}
                      onPress={(event) => {
                            setChecked(!checked);
                        }
                    } />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Add a Checklist"
          />
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(false)}
          >
            <FontAwesome5 name ="check" size={18} color='#E5E7EB' /* gray/200 */ solid />
          </Pressable>
        </View>
        <View style={styles.iconalign}>
          <View style={styles.iconContainer}><FontAwesome5 name ="calendar" size={18} color='#F87171' /* red/50 */ solid /></View>
          <View style={styles.iconContainer}><FontAwesome5 name ="map-marker-alt" size={18} color='#F87171' /* red/50 */ solid /></View>
          <View style={styles.iconContainer}><FontAwesome5 name ="sync-alt" size={18} color='#F87171' /* red/50 */ solid /></View>
          <View style={styles.iconContainer}><FontAwesome5 name ="pen" size={18} color='#F87171' /* red/50 */ solid /></View>
        </View>
      </View>
    </View>
  </Modal>)
}

export default AddModal
