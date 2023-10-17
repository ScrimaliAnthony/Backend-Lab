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

export const getAllUtilisateur = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM utilisateur
        `)
        console.log(get.rows);
        res.status(201).json(get.rows);
    } catch (error) {
        console.log("Echec de la requête : " + error)
        res.status(400).json({message: "la requete à échoué ", message: error})
    }
}

export const searchUtilisateur = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT *
                FROM utilisateur
                WHERE nom
                ILIKE $1
            `, [`${search}%`])
        } else{
            get = await client.query(`
                SELECT *
                FROM utilisateur
                WHERE id = $1
        `, [search])
        }
        console.log(get.rows)
        res.status(200).json(get.rows);
    } catch (error) {
        console.error(error)
        res.status(400).json({message: "la requete à échoué ", message: error})
    }
}