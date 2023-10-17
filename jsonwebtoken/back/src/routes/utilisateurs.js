import express from "express";
import { createUtilisateur, getUtilisateur, updateUtilisateur, deleteUtilisateur } from "./../controllers/utilisateurs.js"
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();

router.post('/', createUtilisateur);
router.get('/', getUtilisateur);
router.put('/:id', authenticateToken, updateUtilisateur);
router.delete('/:id', authenticateToken, deleteUtilisateur);

export default router;
