import express from 'express';
import {
  getAllAdmin,
  getTechsWithSameAdmin,
} from '../controller/userController.js';
import { verifyAdmin } from '../util/verifyToken.js';

const router = express.Router();

router.get('/allAdmins', verifyAdmin, getAllAdmin);
router.post('/techs', verifyAdmin, getTechsWithSameAdmin);

export default router;
