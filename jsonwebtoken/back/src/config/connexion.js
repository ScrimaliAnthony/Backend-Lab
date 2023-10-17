import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pg;

export const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

client.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données:', err);
      return;
    } else {
      console.log('Connecté à la base de données');
    }
});
