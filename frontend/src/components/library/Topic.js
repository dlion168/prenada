import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';
import { Article } from './Article';
import { NavBar } from '../NavBar';

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
        'topPic': require('../../assets/image/Topic/5871-01_1006х755.jpg'),
        'cheveronRight': require('../../assets/icon/primary/cheveron-right.png'),
        'article': [
            {   'id': 0,
                'pic': require('../../assets/image/Topic/5871-01_1006х755.jpg'),
                'tag': 'Preconception planning',
                'summary': 'COVID and fertility: Can coronavirus \n or COVID vaccines affect your ...' },
            {   'id': 1,
                'pic': require('../../assets/image/Topic/Capture (12).png'),
                'tag': 'Preconception planning',
                'summary': 'Genetic Inheritance: What Will Your \n Baby Look Like?' },
            {   'id': 2,
                'pic': require('../../assets/image/Topic/4085-A woman undergoing preconception counseling.jpg'),
                'tag': 'Preconception planning',
                'summary': '4 Reasons to Get Preconception \n Counseling: Dr. Kenneth K. Chen...' },
            {   'id': 3,
                'pic': require('../../assets/image/Topic/Capture (13).png'),
                'tag': 'Prepare your body for pregnancy',
                'summary': 'Pelvic Floor Therapy: Pelvic Floor \n Physical Exercises and Massage...' },
        ]
    },
    'Trying to conceive': {
        'topPic': require('../../assets/image/Topic/6864-pernatal vitamins1006x755.jpg'),
        'cheveronRight': require('../../assets/icon/primary/cheveron-right.png'),
        'article': [
            {   'id': 0,
                'pic': require('../../assets/image/Topic/6864-pernatal vitamins1006x755.jpg'),
                'tag': 'tag test',
                'summary': 'summary1' },
            {   'id': 1,
                'pic': require('../../assets/image/Topic/6864-pernatal vitamins1006x755.jpg'),
                'tag': 'tag test',
                'summary': 'summary2' },
            {   'id': 2,
                'pic': require('../../assets/image/Topic/6864-pernatal vitamins1006x755.jpg'),
                'tag': 'tag test',
                'summary': 'summary3' },
            {   'id': 3,
                'pic': require('../../assets/image/Topic/6864-pernatal vitamins1006x755.jpg'),
                'tag': 'tag test',
                'summary': 'summary4' },
        ]
    },
    
}

const topicMenu = (topic, topicClick, artClick) => {
    return (
        <>
            <NavBar centerText=''
                leftText='Back' leftIcon='cheveron-left-s' leftIconOnPress={(event) => {}}
                rightText='Saved Articles' rightIcon='bookmark-s' rightIconOnPress={(event) => {}}
            />
            <Pressable onPress={() => {topicClick('')}}><Text> go back to menu (only for test!) </Text></Pressable>
            <ScrollView >
                <Image source={topicData[topic].topPic} style={styles.topImg} />
                <View style={styles.block}>
                    <Text style={styles.title}> {topic} </Text>
                </View>
                { topicData[topic].article.map((art) => (
                    <Pressable style={styles.article} onPress={() => {artClick(topic, art.id)}}>
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

const Topic = ({ topic, topicClick, art, artClick }) => {
    return (
        <>
            { art.topic ? 
                <Article articleData={topicData[art.topic].article[art.id]}
                         articleClick={artClick}/> : 
                topicMenu(topic, topicClick, artClick) }
        </>
    )
}

export { Topic };