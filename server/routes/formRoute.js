import express from 'express';
import {
  allForms,
  createForm,
  findForm,
  findTech,
} from '../controller/formController.js';
import { verifyAdmin } from '../util/verifyToken.js';
const router = express.Router();

router.post('/create', createForm);
router.post('/find', findForm);
router.post('/findTech', findTech);
router.get('/allForms', verifyAdmin, allForms);

export default router;
