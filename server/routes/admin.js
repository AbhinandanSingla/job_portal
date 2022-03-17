import express from "express";

import { getAdmin } from "../controllers/admin.js";

const router = express.Router();

router.get("/", getAdmin);

export default router;
