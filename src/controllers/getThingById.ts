import { type Request, type Response } from "express";
import thingsAlreadyKnow from "../data/thingsAlreadyKnow.js";

export const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;
  const getThingAlreadyKnow = thingsAlreadyKnow.find(
    (thing) => thing.id === +id
  );

  res.status(200).json({ getThingAlreadyKnow });
};
