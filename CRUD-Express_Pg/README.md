# CRUD-Express_pg

## Description

CRUD-Express_pg est un simple projet backend construit avec Node.js et Express.js, utilisant PostgreSQL comme base de données. Il permet la réalisation d'opérations CRUD (Create, Read, Update, Delete) sur une table "utilisateur".

## Installation

### Base de données

1. Vous trouverez un fichier nommé `base_de_donnée.sql` dans le répertoire `bdd`. Copiez et exécutez ce code SQL dans votre terminal psql pour créer la base de données.
2. Un second fichier nommé `table.sql` doit être exécuté après `base_de_donnée.sql` pour créer la table utilisateur.

**Note:** Assurez-vous de suivre cet ordre et que tout soit fait dans PostgreSQL, car le code a été écrit spécifiquement pour cette base de données.

### Backend

1. Installez les dépendances du projet en exécutant la commande suivante :

    `pnpm install`

    Cela installera les packages suivants :
    - dotenv
    - express
    - pg
    - nodemon

    **Note:** `npm` et `yarn` devraient également fonctionner pour l'installation des dépendances, mais cela n'a pas été testé.

2. Remplissez le fichier `.env` avec les variables d'environnement appropriées :
    - `PORT`: Port sur lequel le serveur sera exécuté.
    - `DB_HOST`: Hôte de la base de données (utilisez `localhost` pour un environnement local).
    - `DB_USER`: Nom d'utilisateur de la base de données.
    - `DB_PASSWORD`: Mot de passe pour accéder à la base de données.
    - `DB_DATABASE`: Nom de la base de données (par défaut, il s'agit de `crud_express_pg` si vous n'avez pas modifié le fichier `base_de_donnée.sql`).

3. Exécutez le serveur à l'aide de la commande suivante à partir du dossier `back` :

    `nodemon src/server.js`

## Technologies utilisées

Ce projet a été développé en utilisant les technologies suivantes :

- Node.js: Environnement d'exécution pour le backend.
- Express.js: Framework web pour Node.js.
- PostgreSQL: Système de gestion de base de données.
- dotenv: Module pour charger des variables d'environnement à partir d'un fichier `.env`.
- pg: Client PostgreSQL pour Node.js.
- Nodemon: Utilitaire qui surveille tous les changements dans votre code source et redémarre automatiquement le serveur.

## Utilisation

Comme ce projet ne contient pas de frontend, vous devrez utiliser Postman, Thunder Client ou un autre outil pour tester les API.

### Routes disponibles

- `POST utilisateur/`: Pour créer un utilisateur.
- `GET utilisateur/`: Pour obtenir la liste de tous les utilisateurs.
- `GET utilisateur/:search`: Pour rechercher un utilisateur par son ID (`search` est l'ID de l'utilisateur).
- `PUT utilisateur/:id`: Pour modifier un utilisateur (remplacez `id` par l'ID de l'utilisateur que vous souhaitez modifier).
- `DELETE utilisateur/:id`: Pour supprimer un utilisateur (remplacez `id` par l'ID de l'utilisateur que vous souhaitez supprimer).

## Contribution

Les contributions sont les bienvenues. N'hésitez pas à ouvrir une issue ou à faire une pull request.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

## Contact

Pour toute question ou information supplémentaire, n'hésitez pas à me contacter :

- E-mail: [anthony.scrimali@gmail.com](mailto:anthony.scrimali@gmail.com)
- LinkedIn: [Anthony Scrimali](https://www.linkedin.com/in/anthony-scrimali-02187b146/)