import { Router } from "express";
import { getThingById } from "../controllers/getThingById.js";
import { getThingsAlreadyKnow } from "../controllers/getThingsAlreadyKnow.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getThingsAlreadyKnow);
thingsRouter.get("/:id", getThingById);
