import { type Request, type Response } from "express";
import thingsAlreadyKnow from "../data/thingsAlreadyKnow.js";

export const deleteThingId = (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteThingById = thingsAlreadyKnow.splice(+id - 1, 1);

  res.status(200).json({ deleteThingById });
};
