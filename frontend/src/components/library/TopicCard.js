import { StyleSheet, View, ScrollView, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    block: {
        margin: 20,
        marginTop: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    article: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    image: {
        height: 200,
        width: 200,
    },
    imageGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    articleTitle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: '#FFFFFF',
        alignSelf: 'flex-start',
    }
})

const articleData = [
    {   'theme': 'Getting Pregnant',
        'article': [
            {'pic': require('./lib_pic1.jpg'), 'title': 'Planning for pregnancy'},
            {'pic': require('./lib_pic2.jpg'), 'title': 'Trying to conceive'},
    ]},
    {   'theme': 'Your Cycle',
        'article': [
            {'pic': require('./lib_pic1.jpg'), 'title': 'Health'},
            {'pic': require('./lib_pic2.jpg'), 'title': 'Sex'},
    ]},
    {   'theme': 'Health 360°',
        'article': [
            {'pic': require('./lib_pic1.jpg'), 'title': 'Diseases'},
            {'pic': require('./lib_pic2.jpg'), 'title': 'Symptoms'},
    ]},
    {   'theme': 'Pregnancy',
        'article': [
            {'pic': require('./lib_pic1.jpg'), 'title': 'Pregnancy health'},
            {'pic': require('./lib_pic2.jpg'), 'title': 'Pregnancy lifestyle'},
    ]},
    {   'theme': 'Being a Mom',
        'article': [
            {'pic': require('./lib_pic1.jpg'), 'title': 'Recovering from birth'},
            {'pic': require('./lib_pic2.jpg'), 'title': 'Adjusting to motherhood'},
    ]},
];

const TopicCard = () => {
    return (
        <>
        {articleData.map((obj) => {
            return (
                <View>
                    <View style={styles.block}>
                        <Text style={styles.title}>{obj.theme}</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {obj.article.map((art) => (
                            <View style={styles.article}>
                                <ImageBackground source={{uri: art.pic}} 
                                                 style={styles.image}
                                                 imageStyle={{ borderRadius: 20 }}>
                                    <LinearGradient colors={['#00000000', '#000000']} 
                                                    style={styles.imageGradient} />
                                </ImageBackground>
                                <Text style={styles.articleTitle}>{art.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )
        })}
        </>
    )
}

export { TopicCard };