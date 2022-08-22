import express from "express";
import {acceptCompany, addCompany, addJob, applyJob, rejectCompany} from "../controllers/admin.js";
import {addUser, bookmark} from "../controllers/user.js";

const router = express.Router();
router.post('/api/addUser', addUser);
router.post('/api/addCompany', addCompany);
router.post('/api/addJob', addJob);
router.post('/api/acceptCompany', acceptCompany);
router.post('/api/rejectCompany', rejectCompany);
router.post('/api/applyJob', applyJob);
router.post('/api/bookmark', bookmark);
// router.get('/api/getJobsCategorical', getJobCategorial);


export default router;
