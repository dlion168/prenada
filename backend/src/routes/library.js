import { Router } from "express";
import Theme from "../models/Theme";
import Article from '../models/Article';
import db from '../db';
import themeData from '../../themeData.json';
import articleData from '../../articleData.json';

db.connect();

const getThemeData = async () => {
  try {
    let ext = []; // reset data everytime, this will be removed after all done
    if (ext.length === 0) {
      console.log('Reset themeData');
      await Theme.deleteMany({});
      await Theme.insertMany(themeData);
    }

    // const ext = await Theme.find({});
    ext = await Theme.find({});
    if (ext === undefined || ext.length === 0)
      return { message: 'Cannot find themeData', themeData: [] }
    return { message: 'Get themeData successfully', 
             themeData: ext }
  } catch(err) {throw new Error("Get or Reset themeData error: " + err);}
}

const getArticleData = async (topicName) => {
  try {
    let ext = []; // reset data everytime, this will be removed after all done
    if (ext.length === 0) {
      console.log('Reset articleData');
      await Article.deleteMany({});
      await Article.insertMany(articleData);
    }

    // const ext = await Article.find({ topic: topicName });
    ext = await Article.find({ topic: topicName });
    if (ext === undefined || ext.length === 0)
      return { message: 'Cannot find target articleData', ArticleData: [] }
    return { message: 'Get articleData successfully', 
             ArticleData: ext }
  } catch(err) {throw new Error("Get or Reset articleData error: " + err);}
}

const getBookmark = async () => {
  try {
    const bookmark = await Article.find({ bookmark: true });
    if (bookmark === undefined || bookmark.length === 0)
      return { message: 'Cannot find the bookmark list', BM: [] }
    return { message: 'Get the bookmark list successfully', 
             BM: bookmark }
  } catch(err) {throw new Error("Get bookmarks error: " + err);}
}

const postBookmark = async (updateBM) => {
  try {
    updateBM.forEach(bm => {
      Article.findOne({ id: bm.id }, (err, doc) => {
        if (err)
          throw new Error("find articles error when postBookmark: " + err);
        if (doc) {
          doc.bookmark = bm.status;
          doc.save();
        }
      });
    });
    const bookmark = await Article.find({ bookmark: true });
    return { message: 'Post the bookmark list successfully', 
             BM: bookmark }
  } catch(err) {throw new Error("Post bookmarks error: " + err);}
}

const router = Router();
router.get('/', async (req, res) => {
  let result = await getThemeData();
  res.status(200).send(result);
})
router.get('/topic', async (req, res) => {
  let result = await getArticleData(req.query.topicName);
  res.status(200).send(result);
})
router.get('/bookmark', async (req, res) => {
  let result = await getBookmark();
  res.status(200).send(result);
})
router.post('/bookmark', async (req, res) => {
  console.log('updateBM', req.query.updateBM)
  let result = await postBookmark(req.query.updateBM);
  res.status(200).send(result);
})

export default router;