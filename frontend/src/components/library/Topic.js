import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';
import { Article } from './Article';
import { NavBar } from '../NavBar';
import { topicData } from './libraryData';

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

const topicMenu = (topic, topicClick, artClick) => {
    return (
        <>
            <NavBar centerText=''
                leftText='Back' leftIcon='cheveron-left-s' leftIconOnPress={(event) => {topicClick('')}}
                rightText='Saved Articles' rightIcon='bookmark-s' rightIconOnPress={(event) => {}}
            />
            <ScrollView >
                <Image source={topicData[topic].topPic} style={styles.topImg} />
                <View style={styles.block}>
                    <Text style={styles.title}> {topic} </Text>
                </View>
                { topicData[topic].article.map((art, idx) => (
                    <Pressable key={idx} style={styles.article} onPress={() => {artClick(topic, art.id)}}>
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
                <Article articleData={topicData[art.topic].article[parseInt(art.id.split('-')[2], 10)]}
                         articleClick={artClick}/> : 
                topicMenu(topic, topicClick, artClick) }
                {console.log(parseInt(art.id.split('-')[2], 10))}
        </>
    )
}

export { Topic };