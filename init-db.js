// init-db.js
const pool = require('./db');

const createTables = async () => {
    const client = await pool.connect();

    try {
        // Création de la table Users
        await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

        // Création de la table Posts
        await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        author_id INTEGER REFERENCES users(id)
      );
    `);

        // Création de la table Comments
        await client.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        post_id INTEGER REFERENCES posts(id),
        author_id INTEGER REFERENCES users(id)
      );
    `);

        console.log("Les tables ont été créées avec succès.");
    } catch (error) {
        console.error("Une erreur est survenue lors de la création des tables :", error);
    } finally {
        client.release(); // libère la connexion
    }
};

createTables();
