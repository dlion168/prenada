import { Router } from 'express';
import WaterRouter from './water.js';
import SymptomRouter from './symptom.js';
import LibraryRouter from './library.js';

const router = Router();
router.use('/water', WaterRouter);
router.use('/symptom', SymptomRouter);
router.use('/library', LibraryRouter);
export default router;