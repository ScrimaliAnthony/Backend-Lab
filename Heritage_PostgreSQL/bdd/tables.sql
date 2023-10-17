-- Création de la TABLE parent
DROP TABLE IF EXISTS utilisateur CASCADE;
CREATE TABLE IF NOT EXISTS utilisateur(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    prenom VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL
);

-- Création de la TABLE enfant
DROP TABLE IF EXISTS admin;
CREATE TABLE IF NOT EXISTS admin() INHERITS (utilisateur);