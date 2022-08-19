import express from "express";
import {addCompany, addJob} from "../controllers/admin.js";

const router = express.Router();

router.post('/api/addCompany', addCompany);
router.post('/api/addJob', addJob);
// router.get('/api/getJobsCategorical', getJobCategorial);







export default router;
