import { client } from "./../config/connexion.js";

export const createUtilisateur = async (req, res) => {
    const { nom, prenom } = req.body;
    try {
        await client.query(`
            INSERT INTO utilisateur(nom, prenom)
            VALUES($1, $2)
        `,  [nom, prenom ])
        console.log("Utilisateur créé");
        res.status(201).json({ message: "Utilisateur créé" });
    } catch (error) {
        console.log("Echec de la requête : " + error)
        res.status(400).json({message: "la requete à échoué ", message: error})
    }
}