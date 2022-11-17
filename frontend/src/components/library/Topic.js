import { useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';
import { SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
    block: {
        margin: 20,
        marginTop: 30,
    },
    topImg: {
        height: 400, 
        width: 400,
        borderRadius: 20,
        alignSelf: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    article: {
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    artDescribe: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    artImg: {
        height: 100, 
        width: 100,
        borderRadius: 20,
    },
    cheveron: {
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
})

const topicData = {
    'Planning for pregnancy': {
        'topPic': require('./lib_pic1.jpg'),
        'topicTheme': 'Planning for pregnancy',
        'cheveronRight': require('../../assets/icon/primary/cheveron-right.png'),
        'article': [
            {   'pic': require('./lib_pic1.jpg'),
                'tag': 'Preconception planning',
                'summary': 'COVID and fertility: Can coronavirus \n or COVID vaccines affect your ...' },
            {   'pic': require('./lib_pic2.jpg'),
                'tag': 'Preconception planning',
                'summary': 'Genetic Inheritance: What Will Your \n Baby Look Like?' },
            {   'pic': require('./lib_pic1.jpg'),
                'tag': 'Preconception planning',
                'summary': '4 Reasons to Get Preconception \n Counseling: Dr. Kenneth K. Chen...' },
            {   'pic': require('./lib_pic2.jpg'),
                'tag': 'Prepare your body for pregnancy',
                'summary': 'Pelvic Floor Therapy: Pelvic Floor \n Physical Exercises and Massage...' },
        ]
    },
    'Trying to conceive': {
        'topPic': require('./lib_pic2.jpg'),
        'topicTheme': 'Trying to conceive',
        'cheveronRight': require('../../assets/icon/primary/cheveron-right.png'),
        'article': [
            {   'pic': require('./lib_pic1.jpg'),
                'tag': 'tag test',
                'summary': 'summary1' },
            {   'pic': require('./lib_pic2.jpg'),
                'tag': 'tag test',
                'summary': 'summary2' },
            {   'pic': require('./lib_pic1.jpg'),
                'tag': 'tag test',
                'summary': 'summary3' },
            {   'pic': require('./lib_pic2.jpg'),
                'tag': 'tag test',
                'summary': 'summary4' },
        ]
    },
    
}

const Topic = ({ topic, setClick/*only for test*/ }) => {
    return (
        <>
            <View style={{ height: 104, backgroundColor: '#F87171' }} />
            <Pressable onPress={() => {setClick(false)}}><Text> go back button (only for test!) </Text></Pressable>
            <ScrollView >
                <Image source={topicData[topic].topPic} style={styles.topImg} />
                <View style={styles.block}>
                    <Text style={styles.title}> {topicData[topic].topicTheme} </Text>
                </View>
                { topicData[topic].article.map((art) => (
                    <Pressable style={styles.article}>
                        <Image source={art.pic} style={styles.artImg} />
                        <View style={styles.artDescribe}>
                            <Text style={{ color: 'red' }}> {art.tag} </Text>
                            <Text numberOfLines={2} > {art.summary} </Text>
                        </View>
                        <Image source={topicData[topic].cheveronRight} style={styles.cheveron} />
                    </Pressable>
                ))}
            </ScrollView>
        </>
    )
}

export { Topic };