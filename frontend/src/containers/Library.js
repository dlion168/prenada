import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TopicCard } from '../components/library/TopicCard';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F9FAFB',
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        border: 0,
    },
})

const Library = () => {
    const [search, setSearch] = useState('');
    return(
        <>
            <View style={{ height: 104, backgroundColor: '#F87171' }} />
            <ScrollView style={styles.body}>
                <SearchBar value={search}
                           onChangeText={(search) => {setSearch(search)}}
                           placeholder='Search Articles, Keywords, and more' 
                           round={true} 
                           containerStyle={styles.searchBar}
                           inputContainerStyle={{backgroundColor: '#F2F2F2'}} />
                <TopicCard />
            </ScrollView>
        </>
    )
}
export default Library;