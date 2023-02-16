import { type Request, type Response } from "express";
import thingsIKnow from "../data/thingsIKnow.js";

export const getThingsIKnow = (req: Request, res: Response) => {
  res.status(200).json({ getThingsIKnow });
};
