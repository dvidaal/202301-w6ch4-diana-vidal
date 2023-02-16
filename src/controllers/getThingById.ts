import { type Request, type Response } from "express";
import thingsIKnow from "../data/thingsIKnow.js";

export const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;
  const getThingIKnow = thingsIKnow.find((thing) => thing.id === +id);

  res.status(200).json({ getThingIKnow });
};
