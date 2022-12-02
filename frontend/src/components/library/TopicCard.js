import { StyleSheet, View, ScrollView, Text, ImageBackground, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeData } from './libraryData';

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

const TopicCardSingle = ({ top, onPress }) =>
    <Pressable style={styles.topic} onPress={onPress}>
        <ImageBackground source={{uri: top.pic}} 
                         style={styles.image}
                         imageStyle={{ borderRadius: 20 }}>
            <LinearGradient colors={['#00000000', '#323333']} 
                            style={styles.imageGradient} />
        </ImageBackground>
        <Text style={styles.topicTitle}>{top.title}</Text>
    </Pressable>

const TopicCard = ({ topicClick }) => {
    return (
        <>
        {themeData.map((obj, idx) => {
            return (
                <View key={idx}>
                    <View style={styles.block}>
                        <Text style={styles.title}>{obj.theme}</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        {obj.topic.map((top, idx) =>
                            <TopicCardSingle key={idx}
                                             top={top}
                                             onPress={() => topicClick(top.title)} />
                        )}
                    </ScrollView>
                </View>
            )
        })}
        </>
    )
}

export { TopicCard, TopicCardSingle };