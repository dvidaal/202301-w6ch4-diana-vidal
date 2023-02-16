import { type Request, type Response } from "express";
import thingsAlreadyKnow from "../data/thingsAlreadyKnow.js";

export const getThingsAlreadyKnow = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlreadyKnow });
};
