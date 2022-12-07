import { useState } from 'react';
import { Menu } from '../components/library/Menu';
import { Topic } from '../components/library/Topic';

const Library = () => {
    const [search, setSearch] = useState('');
    const [topic, setTopic] = useState({}); // { pic: , title:, ... }
    const [article, setArticle] = useState({}); // { topic: , title:, ...}
    const [bookmarkView, setBookmarkView] = useState(true);

    const topicClick = (top) => {
        setTopic(top);
    }

    const articleClick = (article) => {
        setArticle(article);
    }

    return(
        <>
            { Object.keys(topic).length > 0 ? 
                <Topic topic={topic}
                       topicClick={topicClick}
                       article={article}
                       articleClick={articleClick}
                       bookmarkView={bookmarkView}
                       setBookmarkView={setBookmarkView} /> : 
                <Menu search={search} 
                      setSearch={setSearch}
                      topicClick={topicClick}
                      bookmarkView={bookmarkView}
                      setBookmarkView={setBookmarkView} /> }
        </>
    )
}
export default Library;