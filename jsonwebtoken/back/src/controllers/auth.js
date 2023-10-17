import { client } from "./../config/connexion.js";
import { generateAccessToken } from "../middlewares/auth.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
    const { user_name, mdp } = req.body;

    const result = await client.query(`
        SELECT *
        FROM utilisateur
        WHERE user_name = $1;
    `, [ user_name ]);

    if(result.rows.length > 0) {
        const user = result.rows[0];

        const match = await bcrypt.compare(mdp, user.mdp);

        if(match) {
            const accessToken = generateAccessToken(user);
            res.json({ accessToken });
        } else {
            res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrecte"});
        }
    } else {
        res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
    }
}