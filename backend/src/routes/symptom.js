// Router-level middleware
import { Router } from "express";
import Symptom from "../models/Symptom";
import db from '../db';
import { dateToStr, strToDate } from '../util';

db.connect();

const deleteDB = async () => {
    try {
        await Symptom.deleteMany({});
        return "Database cleared";
    } catch (e) {
        return e;
    }
};

const saveSymptom = async (date, time, symptomName) => {
    const oldSymptom = await Symptom.findOne({ date, time });
    try {
        if (oldSymptom) {
            oldSymptom.symptomName = symptomName;
            oldSymptom.save();
            return { message: `Updating`, symptom: oldSymptom };
        } else {
            const newSymptom = new Symptom({ date: strToDate(date), time, symptomName });
            newSymptom.save();
            return { message: `Adding `, symptom: newSymptom };
        }
    } catch (e) { throw new Error("Save scoreCard error: " + e); }
};

const findSymptom = async (startDate, endDate) => {
    const symptomData = await Symptom.aggregate([
        {
            $sort: { date: -1, time: -1 }
        },
        {
            $match: {
                "date": {
                    $gte: strToDate(startDate),
                    $lte: strToDate(endDate)
                }
            }
        },
        {
            $group: {
                _id: "$date",
                itemList: { $push: { time: "$time", symptomName: "$symptomName" } },
            }
        },
    ]);

    let data = [];
    let message = "";
    try {
        if (symptomData.length > 0) {
            symptomData.map((row) => {
                let item = row;
                item['date'] = dateToStr(row._id);
                data.push(item);
            });
        }
    } catch (e) { message = "Save symptomData error: " + e; }
    return { data, message };
};

const router = Router();
router.delete("/", async (_, res) => {
    res.json({ message: await deleteDB() })
});

router.post("/", async (req, res) => {
    let date = req.body.date;
    let time = req.body.time;
    let symptomName = req.body.symptomName;

    let result = await saveSymptom(date, time, symptomName);
    res.status(200).send(result);
});

router.get("/", async (req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    console.log(startDate, endDate);
    let result = await findSymptom(startDate, endDate);
    res.status(200).send(result);
});

export default router;