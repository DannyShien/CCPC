const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(express.json());

// ===== MIDDLEWARE ===== //
app.use(cors());
app.use(express.json());

// ===== ROUTES ===== //

// CREATE
app.post("/year", async (req, res) => {
  try {
    const { name } = req.body;
    const newYear = await pool.query(
      "INSERT INTO year (name) VALUES($1) RETURNING *",
      [name]
    );
    res.json(newYear.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
// RETRIEVE

// UPDATE

// DELETE

app.listen(5000, () => {
  console.log("SERVER RUNNING: 5000");
});
