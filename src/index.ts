import "./loadEnvironment.js";
import express from "express";
import { getThingsIKnow } from "./controllers/getThingsIKnow.js";
import { getThingById } from "./controllers/getThingById.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/things", getThingsIKnow);

app.get("/things/:id", getThingById);
app.listen(port);
