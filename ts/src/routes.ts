import express, { Router, Request, Response } from 'express'
import { postHandler, getUserHandler } from './handlers'
const router: Router = express.Router()

router.get('/', (req: Request, res: Response): void => {
  res.status(200).send({ hello: 'world' })
})

router.post('/', postHandler)

router.get('/:userId', getUserHandler)

export default router
