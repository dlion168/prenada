import { useEffect, useState } from 'react';
import { Menu } from '../components/library/Menu';
import { Topic } from '../components/library/Topic';

const Library = ({ route }) => {
    const [search, setSearch] = useState('');
    const [topic, setTopic] = useState({}); // { pic: , title:, ... }
    const [article, setArticle] = useState({}); // { topic: , title:, ...}
    
    const [bookmarkView, setBookmarkView] = useState(true);
    const [bookmark, setBookmark] = useState([]); // [...article]
    const [refresh, setRefresh] = useState(false);

    const topicClick = (top) => {
        setTopic(top);
    }

    const articleClick = (article) => {
        setArticle(article);
    }
    
    if (route?.params?.topicData !== undefined)
        useEffect(() => {
            setTopic(route.params.topicData);
        }, [route.params.topicData])

    // console.log('nav', route.params.topicData)
    return(
        <>
            { Object.keys(topic).length > 0 ? 
                <Topic refresh={refresh} 
                       setRefresh={setRefresh}
                       topic={topic}
                       topicClick={topicClick}
                       article={article}
                       articleClick={articleClick}
                       bookmarkView={bookmarkView}
                       setBookmarkView={setBookmarkView}
                       bookmark={bookmark}
                       setBookmark={setBookmark} /> : 
                <Menu refresh={refresh} 
                      setRefresh={setRefresh}
                      search={search} 
                      setSearch={setSearch}
                      topicClick={topicClick}
                      bookmarkView={bookmarkView}
                      setBookmarkView={setBookmarkView}
                      bookmark={bookmark}
                      setBookmark={setBookmark}
                      article={article}
                      articleClick={articleClick} /> }
        </>
    )
}
export default Library;