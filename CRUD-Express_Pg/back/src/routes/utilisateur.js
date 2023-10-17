import express from "express";
import { createUtilisateur } from "./../controllers/utilisateur.js"

const router = express.Router();

router.post('/', createUtilisateur);

export default router;