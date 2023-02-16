import "./loadEnvironment.js";
import express from "express";

const app = express();

const port = process.env.PORT ?? 3000;

app.get("/things", (req, res) => {
  res.status(200).json({});
});

app.listen(port);
