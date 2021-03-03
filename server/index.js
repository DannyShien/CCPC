const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(express.json());

// ========== MIDDLEWARE ========== //
app.use(cors());
app.use(express.json());

// ========== ROUTES ========== //
// ========== CREATE ========== //

// CREATE YEAR
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

// CREATE VIDEOS
app.post("/videos", async (req, res) => {
  try {
    const title = req.body.title;
    const subVerse = req.body.sub_verse;
    const videoKey = req.body.video_key;
    const newVideo = await pool.query(
      `INSERT INTO videos (title, sub_verse, video_key) VALUES ($1, $2, $3) RETURNING *`,
      [title, subVerse, videoKey]
    );
    res.json(newVideo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// ========== RETRIEVE ========== //
// GET ALL YEARS
app.get("/year", async (req, res) => {
  try {
    const allYears = await pool.query("SELECT * FROM year");
    res.json(allYears.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET YEARS BY ID
app.get("/year/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const yearId = await pool.query("SELECT * FROM year WHERE year_id = $1", [
      id,
    ]);
    res.json(yearId.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// GET ALL VIDEOS
app.get("/videos", async (req, res) => {
  try {
    const allVideos = await pool.query("SELECT * FROM videos");
    res.json(allVideos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET VIDEOS BY ID
app.get("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const videoId = await pool.query(
      "SELECT * FROM videos WHERE videos_id = $1",
      [id]
    );
    res.json(videoId.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// ========== UPDATE ========== //
// UPDATE FOLDER(YEAR) NAME BY ID
app.put("/year/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedName = req.body.name;
    const updatedYear = await pool.query(
      "UPDATE year SET name = $1 WHERE year_id = $2 RETURNING *",
      [updatedName, id]
    );
    res.json(updatedYear);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE VIDEO TITLE BY ID
app.put("videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTitle = req.body.title;
    const titleUpdate = await pool.query(
      "UPDATE videos SET title = $1 WHERE video_id = $2 RETURNING *",
      [updatedTitle, id]
    );
    res.json(titleUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE VIDEO SUB_VERSE BY ID
app.put("videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSubVerse = req.body.sub_verse;
    const subVerseUpdate = await pool.query(
      "UPDATE videos SET sub_verse = $1 WHERE video_id = $2 RETURNING *",
      [updatedSubVerse, Id]
    );
    res.json(subVerseUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE ALL VIDEO FIELDS BY ID
app.put("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const updatedTitle = req.body.title;
    const updatedSubVerse = req.body.sub_verse;
    const videoUpdate = await pool.query(
      "UPDATE videos SET title = $1, sub_verse = $2 WHERE videos_id = $3 RETURNING *",
      [updatedTitle, updatedSubVerse, id]
    );
    res.json(videoUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// ========== DELETE ==========/
// DELETE YEAR

// DELETE VIDEOS

app.listen(5000, () => {
  console.log("SERVER RUNNING: 5000");
});
