CREATE TABLE IF NOT EXISTS utilisateur(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    tel VARCHAR(10),
    adresse VARCHAR(255)
);