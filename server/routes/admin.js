import express from "express";
import {addCompany} from "../controllers/admin.js";

const router = express.Router();

router.post('/api/addCompany', addCompany);
export default router;
