import express from "express";

import {addUser, fetchUser} from "../controllers/user.js";

const router = express.Router();

// API
router.get('/', (req, res) => {
    res.send('hmmm')
})
router.post('/api/addUser', addUser);
router.get('/api/getUser', fetchUser)
export default router;
