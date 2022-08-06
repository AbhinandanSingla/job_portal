import express from "express";

import {addUser} from "../controllers/user.js";

const router = express.Router();

// API
router.post('/api/addUser', addUser);
export default router;
