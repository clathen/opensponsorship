const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const db = require("../database/db.js");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.get("/listprofiles", async (req, res) => {
  res.send(await db.getProfiles());
});

app.get("/listprofile/:id", async (req, res) => {
  res.send(await db.getProfile(req.params.id));
});

app.post("/profile", async (req, res) => {
  res.status(201).send(await db.create(req.body));
});
