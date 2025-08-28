const express = require("express");
const { Pool } = require("pg");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/health", async (req, res) => {
  try {
    // Check DB connection
    await pool.query("SELECT 1");
    // Try external fetch (fails if no internet)
    await fetch("https://www.google.com");
    res.send("OK - Database connected and internet access");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
