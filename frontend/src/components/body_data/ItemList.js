import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemListStyle: {
        alignItems: 'center',
        // paddingTop: 0,
        // paddingLeft: 16,
        gap: 16,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0,
        paddingLeft: 16,
        paddingRight: 16,
        width: 350,
        height: 48,
        backgroundColor: '#F9FAFB',
        borderRadius: 10,
        /* Inside auto layout */
        flex: 'none',
        order: 1,
        flexGrow: 0,
    },
    text: {
        fontWeight: 400,
        fontSize: 14,
        color: '#6B7280',
    }
})

const ItemList = ({ showList }) => {
    return (
        <View style={styles.itemListStyle} >
            {
                showList.map((obj, idx) => {
                    return (
                        <View style={styles.item} key={idx} >
                            <Text style={styles.text} >{obj.leftText}</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.text} >{obj.rightText}</Text>

                        </View>
                    );
                })
            }
        </View>
    );
}

export default ItemList;