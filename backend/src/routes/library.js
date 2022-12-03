import { Router } from "express";
import Theme from "../models/Theme";
import Article from '../models/Article';
import db from '../db';
import themeData from '../../themeData.json';
import articleData from '../../articleData.json';

db.connect();

const getThemeData = async () => {
  // let ext = await Theme.find({});
  let ext = []; // reset data everytime, this will be removed after all done
  try {
    if (ext.length === 0) {
      console.log('Reset themeData');
      await Theme.deleteMany({});
      await Theme.insertMany(themeData);
    }
    ext = await Theme.find({});
    return { message: 'Get themeData successfully', 
             themeData: ext }
  } catch(err) {throw new Error("Get or Reset themeData error: " + err);}
  
}

const getArticleData = async (topicName) => {
  // let ext = await Article.findOne({ topic: topicName });
  let ext = []; // reset data everytime, this will be removed after all done
  try {
    if (ext.length === 0) {
      console.log('Reset articleData');
      await Article.deleteMany({});
      await Article.insertMany(articleData);
    }

    ext = await Article.find({ topic: topicName });
    if (Object.keys(ext).length === 0)
      return { message: 'Cannot find target articleData', ArticleData: [] }
    return { message: 'Get articleData successfully', 
             ArticleData: ext }
  } catch(err) {throw new Error("Get or Reset articleData error: " + err);}
  
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

export default router;