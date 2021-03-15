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
app.post("/years", async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const newYear = await pool.query(
      "INSERT INTO years (name) VALUES($1) RETURNING *",
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
    const input_Date = req.body.input_date;
    const title = req.body.title;
    const verse = req.body.verse;
    const videoKey = req.body.video_key;
    // const fkey = await pool.query("");
    const newVideo = await pool.query(
      "INSERT INTO videos (input_date, title, verse, video_key) VALUES ($1, $2, $3, $4) RETURNING *",
      [input_Date, title, verse, videoKey]
    );
    res.json(newVideo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// ========== RETRIEVE ========== //
// GET ALL YEARS
app.get("/years", async (req, res) => {
  try {
    const allYears = await pool.query("SELECT * FROM years");
    res.json(allYears.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET YEARS BY ID
app.get("/years/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.params);
    console.log(req.body);
    const yearId = await pool.query("SELECT * FROM years WHERE id = $1", [id]);
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
    const videoId = await pool.query("SELECT * FROM videos WHERE id = $1", [
      id,
    ]);
    res.json(videoId.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// ========== UPDATE ========== //
// UPDATE FOLDER(YEAR) NAME BY ID
app.put("/years/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const folderName = req.body.name;
    const updateYear = await pool.query(
      "UPDATE years SET name = $1 WHERE id = $2 RETURNING *",
      [folderName, id]
    );
    res.json(updateYear);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE VIDEO TITLE BY ID // =========== DOES THIS EVEN WORK TO UPDATE A SINGLE FIELD??
app.put("videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTitle = req.body.title;
    const titleUpdate = await pool.query(
      "UPDATE videos SET title = $1 WHERE id = $2 RETURNING *",
      [updateTitle, id]
    );
    res.json(titleUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE VIDEO VERSE BY ID // =========== DOES THIS EVEN WORK TO UPDATE A SINGLE FIELD??
app.put("videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateVerse = req.body.verse;
    const verseUpdate = await pool.query(
      "UPDATE videos SET verse = $1 WHERE id = $2 RETURNING *",
      [updateVerse, id]
    );
    res.json(verseUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE VIDEO INPUT_DATE BY ID
app.put("video/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateDate = req.body.input_date;
    const dateUpdate = await pool.query(
      "UPDATE videos SET input_date = $1 WHERE id = $2 RETURNING *",
      [updateDate, id]
    );
    res.json(dateUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE VIDEO FOREIGN KEY BY ID // STILL NEED TO FIGURE OUT HOW TO UPDATE FOREIGN KEY...
// app.put("videos/:fkey", async (req, res) => {
//   try {
//     const { fkey } = req.params;
//     const updatedFKey = req.body.year_id;
//     const fKeyUpdate = await pool.query(
//       "UPDATE videos SET year_id = $1 WHERE id = $2 RETURNING *",
//       [updatedFKey, fkey]
//     );
//     res.json(console.log(fKeyUpdate));
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// UPDATE ALL VIDEO FIELDS BY ID
app.put("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTitle = req.body.title;
    const updateVerse = req.body.verse;
    const updateDate = req.body.input_date;
    const updateFKey = req.body.year_id;
    const videoUpdate = await pool.query(
      "UPDATE videos SET title = $1, verse = $2, input_date = $3, year_id = $4 WHERE id = $5 RETURNING *",
      [updateTitle, updateVerse, updateDate, updateFKey, id]
    );
    res.json(videoUpdate);
  } catch (err) {
    console.error(err.message);
  }
});

// ========== DELETE ==========/
// DELETE YEAR
app.delete("/years:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteYear = await pool.query("DELETE FROM years WHERE id = $1", [
      id,
    ]);
    res.json(deleteYear);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE VIDEOS
app.delete("/videos:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideo = await pool.query("DELETE FROM videos WHERE id = $1", [
      id,
    ]);
    res.json(deleteVideo);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("SERVER RUNNING: 5000");
});
