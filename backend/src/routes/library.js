import { Router } from "express";
import Theme from "../models/Theme";
import Topic from '../models/Topic';
import db from '../db';
import themeData from '../../themeData.json';
import topicData from '../../topicData.json';

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

const getTopicData = async (topicName) => {
  // let ext = await Topic.findOne({ topic: topicName });
  let ext = {}; // reset data everytime, this will be removed after all done
  try {
    if (Object.keys(ext).length === 0) {
      console.log('Reset topicData');
      await Topic.deleteMany({});
      await Topic.insertMany(topicData);
    }
    
    ext = await Topic.findOne({ topic: topicName });
    if (Object.keys(ext).length === 0)
      return { message: 'Cannot find target topicData', TopicData: {} }
    return { message: 'Get topicData successfully', 
             TopicData: ext }
  } catch(err) {throw new Error("Get or Reset topicData error: " + err);}
  
}

const router = Router();
router.get('/', async (req, res) => {
  let result = await getThemeData();
  res.status(200).send(result);
})
router.get('/topic', async (req, res) => {
  let result = await getTopicData(req.query.topicName);
  res.status(200).send(result);
})

export default router;