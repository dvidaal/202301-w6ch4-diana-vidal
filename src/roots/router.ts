import { Router } from "express";
import { deleteThingId } from "../controllers/deleteThingId.js";
import { getThingById } from "../controllers/getThingById.js";
import { getThingsAlreadyKnow } from "../controllers/getThingsAlreadyKnow.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getThingsAlreadyKnow);
thingsRouter.get("/:id", getThingById);
thingsRouter.delete("/:id", deleteThingId);
