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
    console.error(err.message);
  }
});

app.post("/videos", async (req, res) => {
  try {
    const title = req.body.title;
    const subVerse = req.body.sub_verse;
    const videoId = req.body.video_id;
    const newVideo = await pool.query(
      `INSERT INTO videos (title, sub_verse, video_id) VALUES ($1, $2, $3) RETURNING *`,
      [title, subVerse, videoId]
    );
    res.json(newVideo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// RETRIEVE
app.get("/videos", async (req, res) => {
  try {
    const allVideo = await pool.query("SELECT * FROM videos");
    res.json(allVideo.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// UPDATE

// DELETE

app.listen(5000, () => {
  console.log("SERVER RUNNING: 5000");
});
