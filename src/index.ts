import "./loadEnvironment.js";
import express from "express";
import { getThingsIKnow } from "./controllers/getThingsIKnow.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/things", getThingsIKnow);

app.listen(port);
