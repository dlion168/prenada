import { Router } from 'express';
import WaterRouter from './water.js';

const router = Router();
router.use('/', WaterRouter);
export default router;