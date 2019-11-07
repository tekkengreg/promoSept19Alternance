import { Router, Request, Response, NextFunction } from "express";
import { getItems } from './controllers/itemsController';
import { getPlayers, getPlayerById, postPlayers } from './controllers/playersController';
import { getGames, getGameById, postGames } from './controllers/gamesController';

const router = Router();

router.get("/helloworld", (req: Request, res: Response) =>
  res.send("hello world")
);

router.get('/items', getItems)
router.get('/players', getPlayers)
router.get('/players/:id', getPlayerById)
router.post('/players', postPlayers)
router.get('/games', getGames)
router.get('/games/:id', getGameById)
router.post('/games', postGames)

export default router;