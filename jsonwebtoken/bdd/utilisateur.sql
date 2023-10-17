CREATE DATABASE jsonwebtoken;

\c jsonwebtoken

CREATE TABLE IF NOT EXISTS utilisateur(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(20) UNIQUE NOT NULL,
    mdp VARCHAR(255) NOT NULL
);

-- Test

INSERT INTO utilisateur (user_name, mdp)
VALUES ('Axel', 'motdepassetest');

SELECT * FROM utilisateur;

UPDATE utilisateur
SET user_name = 'AXEL55'
WHERE user_name = 'Axel';

SELECT * FROM utilisateur;

DELETE FROM utilisateur
WHERE user_name = 'AXEL55';

SELECT * FROM utilisateur;