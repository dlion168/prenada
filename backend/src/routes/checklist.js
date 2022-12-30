import { Router } from "express";
import ChecklistItem from "../models/ChecklistItem";
import ChecklistPerWeek from '../models/ChecklistPerWeek';
import db from '../db';
import { dataInit } from '../upload'

db.connect();
if (process.env.MODE === 'Reset') {
  console.log('Reset Mode: reset the data')
  dataInit()
}

const getChecklistData= async () => {
  try {
    ext = await ChecklistPerWeek.find({});
    if (ext === undefined || ext.length === 0)
      return { message: 'Cannot find checklist Data', checklistData: [] }
    return { message: 'Get checklist Data successfully', 
             checklistData: ext }
  } catch(err) {throw new Error("Get or Reset checklist Data error: " + err);}
}

const getChecklistPerWeek = async (week) => {
  try {
    const checklists = await ChecklistPerWeek.find({ week: week }).populate('data');
    if (checklists === undefined)
      return { message: 'Cannot find the checklists', checklists: {} }
    return { message: 'Get the checklists successfully', 
            checklists: checklists[0] }
  } catch(err) {throw new Error("Get checklists error: " + err);}
}

const postChecklistPerWeek= async (updatedChecklist) => {
  try {
    ChecklistPerWeek.findOne({ week: updatedChecklist.week }, (err, doc) => {
        if (err)
          throw new Error("find articles error when postBookmark: " + err);
        if (doc) {
          doc.bookmark = bm.status;
          doc.save();
        }
      });
    return { message: 'Post the ChecklistPerWeek list successfully', returnItem: doc };
  } catch(err) {throw new Error("Post ChecklistPerWeek error: " + err);}
}
// Don't need delete ChecklistPerWeek

const putChecklistItem = async (_id) => {
  try {
    ChecklistItem.findOne({ _id:_id }, (err, doc) => {
        if (err)
          throw new Error("find checklist items error when post ChecklistItem: " + err);
        if (doc) {
          doc.checked = item.checked;
          doc.liked = item.liked;
          doc.text = item.text;
          doc.save();
        }
      });
    return { message: 'Modify ChecklistItem successfully', returnItem: doc };
  } catch(err) {throw new Error("Post ChecklistItem error: " + err);}
}

const postChecklistItem = async (item) => {
  try {
    item = await new ChecklistItem(item).save();
    return { message: 'Post ChecklistItem successfully', returnItem: item };
  } catch(err) {throw new Error("Post ChecklistItem error: " + err);}
}

const deleteChecklistItem = async (_id) => {
  try {
    ChecklistItem.deleteOne({ _id:_id }, (err, doc) => {
        if (err)
          throw new Error("delete checklist items error when deleting ChecklistItem: " + err);
      });
    return { message: 'Delete ChecklistItem successfully', returnID: _id };
  } catch(err) {throw new Error("Delete ChecklistItem error: " + err);}
}

const router = Router();
router.get('/', async (req, res) => {
  let result = await getChecklistData();
  res.status(200).send(result);
})
router.get('/week', async (req, res) => {
  let result = await getChecklistPerWeek(req.query.week);
  res.status(200).send(result);
})
// router.get('/bookmark', async (req, res) => {
//   let result = await getBookmark();
//   res.status(200).send(result);
// })
router.put('/item', async (req, res) => {
  console.log('update checklist item', req.query.id)
  let result = await putChecklistItem(req.query.id);
  res.status(200).send(result);
})
router.post('/item', async (req, res) => {
  console.log('add new checklist item', req.query.item)
  let result = await postChecklistItem(req.query.item);
  res.status(200).send(result);
})
// router.post('/bookmark/article', async (req, res) => {
//   let result = await postArtBM(req.query.id, req.query.status);
//   res.status(200).send(result);
// })
router.delete('/delItem', async (req, res) => {
  let result = await deleteChecklistItem(req.query.id);
  console.log('deleted id: ', result)
  res.status(200).send(result);
})

export default router;