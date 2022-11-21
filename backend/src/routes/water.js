// Router-level middleware
import { Router } from "express";
import Water from "../models/Water";
import db from '../db';
import { dateToStr, strToDate } from '../util';

db.connect();

const deleteDB = async () => {
    try {
        await Water.deleteMany({});
        return "Database cleared";
    } catch (e) {
        return e;
    }
};

const saveWater = async (date, time, capacity) => {
    const oldWater = await Water.findOne({ date, time });
    try {
        if (oldWater) {
            oldWater.capacity = capacity;
            oldWater.save();
            return { message: `Updating`, water: oldWater };
        } else {
            const newScoreCard = new Water({ date, time, capacity });
            newScoreCard.save();
            return { message: `Adding `, water: newScoreCard };
        }
    } catch (e) { throw new Error("Save scoreCard error: " + e); }
};

const findWater = async (startDate, endDate) => {
    const waterData = await Water.aggregate([
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
                itemList: { $push: { time: "$time", capacity: "$capacity" } }
            }
        },
        {
            $addFields:
            {
                totalCapacity: { $sum: "$itemList.capacity" }
            }
        }
    ]);

    let data = [];
    let message = "";
    try {
        if (waterData.length > 0) {
            waterData.map((row) => {
                let item = row;
                item['date'] = dateToStr(row._id);
                data.push(item);
            });
        }
    } catch (e) { message = "Save scoreCard error: " + e; }
    return { data, message };
};

const router = Router();
router.delete("/water", async (_, res) => {
    res.json({ message: await deleteDB() })
});

router.post("/water", async (req, res) => {
    let date = req.body.date;
    let time = req.body.time;
    let capacity = req.body.capacity;

    let result = await saveWater(date, time, capacity);
    res.status(200).send(result);
});

router.get("/water", async (req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    console.log(startDate, endDate);
    let result = await findWater(startDate, endDate);
    res.status(200).send(result);
});

export default router;