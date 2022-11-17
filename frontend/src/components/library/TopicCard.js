import { StyleSheet, View, ScrollView, Text, ImageBackground, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    block: {
        margin: 20,
        marginTop: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    topic: {
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
    topicTitle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: '#FFFFFF',
        alignSelf: 'flex-start',
    }
})

const themeData = [
    {   'theme': 'Getting Pregnant',
        'topic': [
            { 'pic': require('./lib_pic1.jpg'), 'title': 'Planning for pregnancy' },
            { 'pic': require('./lib_pic2.jpg'), 'title': 'Trying to conceive' },
    ]},
    {   'theme': 'Your Cycle',
        'topic': [
            { 'pic': require('./lib_pic1.jpg'), 'title': 'Health' },
            { 'pic': require('./lib_pic2.jpg'), 'title': 'Sex' },
    ]},
    {   'theme': 'Health 360°',
        'topic': [
            { 'pic': require('./lib_pic1.jpg'), 'title': 'Diseases' },
            { 'pic': require('./lib_pic2.jpg'), 'title': 'Symptoms' },
    ]},
    {   'theme': 'Pregnancy',
        'topic': [
            { 'pic': require('./lib_pic1.jpg'), 'title': 'Pregnancy health' },
            { 'pic': require('./lib_pic2.jpg'), 'title': 'Pregnancy lifestyle' },
    ]},
    {   'theme': 'Being a Mom',
        'topic': [
            { 'pic': require('./lib_pic1.jpg'), 'title': 'Recovering from birth' },
            { 'pic': require('./lib_pic2.jpg'), 'title': 'Adjusting to motherhood' },
    ]},
];

const TopicCard = ({ topicClick }) => {
    return (
        <>
        {themeData.map((obj) => {
            return (
                <View>
                    <View style={styles.block}>
                        <Text style={styles.title}>{obj.theme}</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        { obj.topic.map((top) => (
                            <Pressable style={styles.topic} onPress={() => {topicClick(top.title)}}>
                                <ImageBackground source={{uri: top.pic}} 
                                                 style={styles.image}
                                                 imageStyle={{ borderRadius: 20 }}>
                                    <LinearGradient colors={['#00000000', '#000000']} 
                                                    style={styles.imageGradient} />
                                </ImageBackground>
                                <Text style={styles.topicTitle}>{top.title}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            )
        })}
        </>
    )
}

export { TopicCard };