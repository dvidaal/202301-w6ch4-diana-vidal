import "./loadEnvironment.js";
import express from "express";
import { thingsRouter } from "./roots/router.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use("/things", thingsRouter);

app.listen(port);
