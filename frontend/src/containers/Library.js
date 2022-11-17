import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Menu } from '../components/library/Menu';
import { Topic } from '../components/library/Topic';

const Library = () => {
    const [search, setSearch] = useState('');
    const [click, setClick] = useState(false);
    const [topic, setTopic] = useState('');

    const topicClick = (title) => {
        setTopic(title);
        setClick(true);
    }

    return(
        <>
            { click ? 
                <Topic topic={topic}
                       setClick={setClick}/*only for test*//> : 
                <Menu search={search} 
                      setSearch={setSearch}
                      topicClick={topicClick} /> }
        </>
    )
}
export default Library;