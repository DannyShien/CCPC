const express = require("express");
const app = express();
const cors = require("cors");

// ===== MIDDLEWARE =====
app.use(cores());
app.use(express.json());

app.listen(5000, () => {
  console.log("SERVER RUNNING: 5000");
});
