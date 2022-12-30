import { StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TopicCard } from './TopicCard';
import { NavBar } from '../NavBar';
import { Bookmark, toggleSubview } from './Bookmark';
import axios from '../../api';
import { Article } from './Article';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        border: 0,
    },
})

const Menu = ({ search, setSearch, topicClick, bookmarkView, setBookmarkView, 
                bookmark, setBookmark, article, articleClick }) => {
    const handleSearch = async (search) => {
        const { data: { message, artData } } = await axios.get('/library/search', {
            params: { search: search }
        });
        console.log(message, artData);

        if (Object.keys(artData).length > 0)
            articleClick(artData); // setArticle
        else {
            alert("Cannot find the article")
        }
        setSearch("");
    }
    
    return (
        <>
            { Object.keys(article).length > 0 ?
            <Article article={article}
                    articleClick={articleClick} /> :
            <>
                <NavBar centerText='Library'
                        rightIcon='bookmark-s'
                        rightIconOnPress={(event) => {toggleSubview(bookmarkView, setBookmarkView, [], setBookmark)}} />
                        {/* remember to add feature of bookmark after completing backend function */}
                <ScrollView style={styles.body}>
                    <SearchBar value={search}
                            onChangeText={(search) => {setSearch(search)}}
                            placeholder='Search Articles, Keywords, and more' 
                            round={true} 
                            containerStyle={styles.searchBar}
                            inputContainerStyle={{backgroundColor: '#F9FAFB'}}
                            onSubmitEditing={() => handleSearch(search)} />
                    <TopicCard topicClick={topicClick}/>
                </ScrollView>
                <Bookmark bookmarkView={bookmarkView}
                        setBookmarkView={setBookmarkView}
                        bookmark={bookmark}
                        setBookmark={setBookmark} />
            </>
            }
        </>
    )
}

export { Menu };