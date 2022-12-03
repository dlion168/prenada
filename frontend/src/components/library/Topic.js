import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Article } from './Article';
import { NavBar } from '../NavBar';
import { Saved, toggleSubview } from './Saved';
import axios from '../../api';

const styles = StyleSheet.create({
    block: {
        margin: 20,
        marginTop: 30,
    },
    topImg: {
        height: 245, 
        width: 327,
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
        height: 75, 
        width: 75,
        borderRadius: 20,
    },
    cheveron: {
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
})

const TopicMenu = ({ topicData, topic, topicClick, artClick, savedHidden, setSavedHidden }) => {
    const cheveronRight = require('../../assets/icon/primary/cheveron-right.png');

    const getImgSrc = (pic) => {
        return pic.split('/').length > 1 ? 
            require(`../../assets/image/Topic/${pic.split('/')[3].split('.')[0]}.${pic.split('/')[3].split('.')[2]}`) :
            require(`../../assets/image/Topic/${pic}`)
    }
    // return (<></>)
    return (
        <>
            <NavBar centerText=''
                leftText='Back' leftIcon='cheveron-left-s' leftIconOnPress={(event) => {topicClick('')}}
                rightText='Saved Articles' rightIcon='bookmark-s' rightIconOnPress={(event) => {toggleSubview(savedHidden, setSavedHidden)}}
            />
            <ScrollView >
                <Image source={getImgSrc(topicData.topicPic)} style={styles.topImg} />
                <View style={styles.block}>
                    <Text style={styles.title}> {topicData.topic} </Text>
                </View>
                { topicData.article.map((art, idx) => (
                    <Pressable key={idx} style={styles.article} onPress={() => {artClick(topic, art.id)}}>
                        <Image source={getImgSrc(art.pic)} style={styles.artImg} />
                        <View style={styles.artDescribe}>
                            <Text style={{ color: 'red' }}> {art.tag} </Text>
                            <Text numberOfLines={2} > {art.summary} </Text>
                        </View>
                        <Image source={cheveronRight} style={styles.cheveron} />
                    </Pressable>
                ))}
            </ScrollView>
            <Saved toggleSubview={toggleSubview}
                   savedHidden={savedHidden}
                   setSavedHidden={setSavedHidden}/>
        </>
    )
}

const Topic = ({ topic, topicClick, art, artClick, savedHidden, setSavedHidden }) => {
    const [topicData, setTopicData] = useState([]);
    
    const getTopicData = async () => {
        const {
            data: { message, TopicData },
        } = await axios.get('/library/topic', {
            params: { topicName: topic }
        });
        console.log(message, TopicData);
        setTopicData(TopicData);
    }

    useEffect(() => {
        getTopicData();
    }, [])
    
    return (
        <>
            { art.topic.length > 0 ? 
                <Article articleData={topicData.article[art.id]}
                         articleClick={artClick} /> : 
                topicData.length === 0 ?
                    <View>
                        <Text style={{ padding: 50, fontSize: 20, alignSelf: 'center' }}> Loading Data... </Text>
                    </View> :
                    <TopicMenu topicData={topicData}
                               topic={topic}
                               topicClick={topicClick}
                               artClick={artClick}
                               savedHidden={savedHidden}
                               setSavedHidden={setSavedHidden} />
            }
        </>
    )
}

export { Topic };