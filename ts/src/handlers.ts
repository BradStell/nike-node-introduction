import { RequestHandler, Request, Response } from "express";
import { ApplicationUser } from "./types";

export const postHandler: RequestHandler = (req: Request, res: Response): void => {
  const usr: ApplicationUser = req.body
  console.log('Request called with body', usr)
  res.sendStatus(201)
}

export const getUserHandler: RequestHandler = (req: Request, res: Response): void => {
  const userId: number = Number.parseInt(req.params.userId)
  res.status(200).send({ id: userId, firstName: 'Ranger' })
}

export default {
  postHandler,
  getUserHandler
}
