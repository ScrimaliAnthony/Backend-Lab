import express from "express";
import { loginUser } from "../controllers/auth.js";

const router = express.Router();

router.post('/', loginUser);

export default router;