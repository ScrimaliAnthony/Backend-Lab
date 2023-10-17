import express from "express";
import { createUtilisateur, getAllUtilisateur } from "./../controllers/utilisateur.js"

const router = express.Router();

router.post('/', createUtilisateur);
router.get('/', getAllUtilisateur);

export default router;