import { Router } from 'express';
import WaterRouter from './water.js';
import SymptomRouter from './symptom.js';
import LibraryRouter from './library.js';
import CheckListRouter from './checklist';

const router = Router();
router.use('/water', WaterRouter);
router.use('/symptom', SymptomRouter);
router.use('/library', LibraryRouter);
router.use('/checklist', CheckListRouter);
export default router;