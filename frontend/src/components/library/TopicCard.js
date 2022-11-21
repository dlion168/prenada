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
            { 'pic': require('../../assets/image/Topic/5871-01_1006х755.jpg'), 
              'title': 'Planning for pregnancy' },
            { 'pic': require('../../assets/image/Topic/6864-pernatal vitamins1006x755.jpg'), 
              'title': 'Trying to conceive' },
            { 'pic': require('../../assets/image/Topic/6726-egg-retrieval-01_1006x755.jpg'), 
              'title': 'Trouble conceiving' },
    ]},
    {   'theme': 'Your Cycle',
        'topic': [
            { 'pic': require('../../assets/image/Topic/6969-birth control doctors appointment11006x755.jpg'), 
              'title': 'Health' },
            { 'pic': require('../../assets/image/Topic/Capture.png'), 
              'title': 'Sex' },
            { 'pic': require('../../assets/image/Topic/Capture (1).png'), 
              'title': 'Lifestyle' },
            { 'pic': require('../../assets/image/Topic/6267-peri8.jpg'), 
              'title': 'Menopause' },
            { 'pic': require('../../assets/image/Topic/Capture (2).png'), 
              'title': 'Puberty' },
    ]},
    {   'theme': 'Health 360°',
        'topic': [
            { 'pic': require('../../assets/image/Topic/Capture (3).png'), 
              'title': 'Diseases' },
            { 'pic': require('../../assets/image/Topic/Capture (4).png'), 
              'title': 'Symptoms' },
            { 'pic': require('../../assets/image/Topic/Capture (5).png'), 
              'title': 'Lifestyle' },
            { 'pic': require('../../assets/image/Topic/Capture (6).png'), 
              'title': 'Beauty' },
            { 'pic': require('../../assets/image/Topic/Capture (7).png'), 
              'title': 'Mental health' },
    ]},
    {   'theme': 'Pregnancy',
        'topic': [
            { 'pic': require('../../assets/image/Topic/6668-gestational-diabetes-01_1006x755.jpg'), 
              'title': 'Pregnancy health' },
            { 'pic': require('../../assets/image/Topic/7205-Pregnancy nutrition 02_1006x755.jpg'), 
              'title': 'Pregnancy lifestyle' },
            { 'pic': require('../../assets/image/Topic/Capture (8).png'), 
              'title': 'Pregnancy week by week' },
            { 'pic': require('../../assets/image/Topic/6879-hospital-bag-checklist-01_1006x755.jpg'), 
              'title': 'Nesting' },
            { 'pic': require('../../assets/image/Topic/Capture (9).png'), 
              'title': 'Giving birth' },
            { 'pic': require('../../assets/image/Topic/3712-Biblical names.jpg'), 
              'title': 'Choosing a name' },
    ]},
    {   'theme': 'Being a Mom',
        'topic': [
            { 'pic': require('../../assets/image/Topic/Capture (11).png'), 
              'title': 'Recovering from birth' },
            { 'pic': require('../../assets/image/Topic/Capture (10).png'), 
              'title': 'Adjusting to motherhood' },
            { 'pic': require('../../assets/image/Topic/6534-Best-breastfeeding-positions-01_1006x755.jpg'), 
              'title': 'Raising a baby' },
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
                                    <LinearGradient colors={['#00000000', '#323333']} 
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