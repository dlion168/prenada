import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TopicCard } from './TopicCard';
import { NavBar } from '../NavBar';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F9FAFB',
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        border: 0,
    },
})

const Menu = ({ search, setSearch, topicClick }) => {
    return (
        <>
            <NavBar centerText='Library'
                    rightIcon='bookmark-s'
                    rightIconOnPress={(event) => {}} />
                    {/* remember to add feature of bookmark after completing backend function */}
            <ScrollView style={styles.body}>
                <SearchBar value={search}
                           onChangeText={(search) => {setSearch(search)}}
                           placeholder='Search Articles, Keywords, and more' 
                           round={true} 
                           containerStyle={styles.searchBar}
                           inputContainerStyle={{backgroundColor: '#F2F2F2'}} />
                <TopicCard topicClick={topicClick}/>
            </ScrollView>
        </>
    )
}

export { Menu };