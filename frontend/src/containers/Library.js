import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Menu } from '../components/library/Menu';
import { Topic } from '../components/library/Topic';

const Library = () => {
    const [search, setSearch] = useState('');
    const [topic, setTopic] = useState('');
    const [article, setArticle] = useState({ topic: '', id: '' });
    const [savedHidden, setSavedHidden] = useState(true);

    const topicClick = (title) => {
        setTopic(title);
    }

    const articleClick = (topic, id) => {
        setArticle({ topic: topic, id: id });
    }

    return(
        <>
            { topic ? 
                <Topic topic={topic}
                       topicClick={topicClick}
                       art={article}
                       artClick={articleClick}
                       savedHidden={savedHidden}
                       setSavedHidden={setSavedHidden} /> : 
                <Menu search={search} 
                      setSearch={setSearch}
                      topicClick={topicClick}
                      savedHidden={savedHidden}
                      setSavedHidden={setSavedHidden} /> }
        </>
    )
}
export default Library;