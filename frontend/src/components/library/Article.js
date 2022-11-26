import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';
import { NavBar } from '../NavBar';

const styles = StyleSheet.create({
    title: {
        margin: 20,
        display: 'flex',
    },
    summary: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
    },
    tag: {
        height: 30,
        width: 200,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#F87171',
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    tagText: {
        fontSize: 15,
        alignSelf: 'center',
    },
    reviewer: {
        height: 70,
        width: 500,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    reviewerImg: {
        height: 50,
        width: 50,
        margin: 10,
    },
    reviewerSummary: {
        margin: 10,
        display: 'flex',
    },
    articleImg: {
        margin: 20,
        height: 300,
        width: 300,
        borderRadius: 10,
        alignSelf: 'center',
    },
})

const Article = ({ articleData, articleClick }) => {
    return (
        <>
            <NavBar centerText=''
                leftText='Back' leftIcon='cheveron-left-s' leftIconOnPress={(event) => {articleClick('', '')}}
                rightText='Saved Articles' rightIcon='bookmark-s' rightIconOnPress={(event) => {}}
            />
            <ScrollView >
                <View style={styles.title}>
                    <Text style={styles.summary}> {articleData.summary} </Text>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}> {articleData.tag} </Text>
                    </View>
                </View>
                <View style={styles.reviewer}>
                    <Image style={styles.reviewerImg} source={require('../../assets/image/Reviewer/1476719_358210150989956_319087768_n.png')}/>
                    <View style={styles.reviewerSummary}>
                        <Text> Reviewed by </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> EBCOG </Text>
                        <Text> the European Board & College of Obstetrics and Gynaecology </Text>
                    </View>
                </View>
                <Image source={articleData.pic} style={styles.articleImg} />
                <Text> article content... </Text>
            </ScrollView>
        </>
    )
}

export { Article };