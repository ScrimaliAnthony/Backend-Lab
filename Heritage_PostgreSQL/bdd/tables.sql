-- Création de la TABLE parent
DROP TABLE IF EXISTS utilisateur CASCADE;
CREATE TABLE IF NOT EXISTS utilisateur(
    id_utilisateur SERIAL PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    prenom VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    mdp VARCHAR(255) NOT NULL
);

-- Création de la TABLE enfant
DROP TABLE IF EXISTS administrateur;
CREATE TABLE IF NOT EXISTS administrateur() INHERITS (utilisateur);

DROP TABLE IF EXISTS vendeur;
CREATE TABLE IF NOT EXISTS vendeur(
    pays VARCHAR(255),
    tel INT NOT NULL
) INHERITS (utilisateur);

DROP TABLE IF EXISTS acheteur;
CREATE TABLE IF NOT EXISTS acheteur(
    adresse VARCHAR(255) NOT NULL
) INHERITS (utilisateur);