import { client } from "./../config/connexion.js";
import bcrypt from "bcrypt";

export const createUtilisateur = async (req, res) => {
    const { user_name, mdp } = req.body;
    const saltRounds = 10;
    try {
        const hachedPassword = await bcrypt.hash(mdp, saltRounds);
        await client.query(`
            INSERT INTO utilisateur(user_name, mdp)
            VALUES($1, $2);
        `, [ user_name, hachedPassword ]);
        res.status(201).json({ message: "Utilisateur créé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Erreur lors de la création de l'utilisateur",});
    }
}

export const getUtilisateur = async (req, res) => {
    try {
        const utilisateur = await client.query(`
            SELECT *
            FROM utilisateur;
        `)
        console.log(utilisateur.rows);
        res.status(200).json(utilisateur.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Erreur de la requete",});
    }
}

export const updateUtilisateur = async (req, res) => {
    const { user_name, mdp } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE utilisateur
            SET user_name = $1, mdp = $2
            WHERE id = $3;
        `, [ user_name, mdp, id ])
        res.status(200).json({ message: "utilisateur modifié" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Erreur lors de la modification de l'utilisateur",});
    }
}

export const deleteUtilisateur = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM utilisateur
            WHERE id = $1
        `, [ id ])
        res.status(200).json({ message: "utilisateur supprimé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Erreur lors de la suppression de l'utilisateur",});
    }
}