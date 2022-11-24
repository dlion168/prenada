import { Router } from 'express';
import WaterRouter from './water.js';
import SymptomRouter from './symptom.js';

const router = Router();
router.use('/water', WaterRouter);
router.use('/symptom', SymptomRouter);
export default router;