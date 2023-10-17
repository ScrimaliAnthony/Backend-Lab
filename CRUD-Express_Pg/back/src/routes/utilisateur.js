import express from "express";
import { createUtilisateur, getAllUtilisateur, searchUtilisateur, updateUtilisateur, deleteUtilisateur } from "./../controllers/utilisateur.js"

const router = express.Router();

router.post('/', createUtilisateur);
router.get('/', getAllUtilisateur);
router.get('/:search', searchUtilisateur);
router.put('/:id', updateUtilisateur);
router.delete('/:id', deleteUtilisateur);

export default router;