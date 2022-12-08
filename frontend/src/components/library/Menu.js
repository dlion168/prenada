import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TopicCard } from './TopicCard';
import { NavBar } from '../NavBar';
import { Bookmark, toggleSubview } from './Bookmark';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        border: 0,
    },
})

const Menu = ({ search, setSearch, topicClick, bookmarkView, setBookmarkView, bookmark, setBookmark }) => {
    return (
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
                           inputContainerStyle={{backgroundColor: '#F9FAFB'}} />
                <TopicCard topicClick={topicClick}/>
            </ScrollView>
            <Bookmark bookmarkView={bookmarkView}
                      setBookmarkView={setBookmarkView}
                      bookmark={bookmark}
                      setBookmark={setBookmark} />
        </>
    )
}

export { Menu };