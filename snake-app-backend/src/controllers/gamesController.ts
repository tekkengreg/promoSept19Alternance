import { Request, Response } from 'express';
import db from '../db';

interface Game { player1: number, player2: number, score: number, duration: number }

export const getGames = (req: Request, res: Response) => {
  const output: Game[] = []
  db.all("SELECT * FROM games", (err: Error, row: Game) => {
    if (err) console.log(err);
    console.log("gp", row)
    res.json(row)
  });
};

export const getGameById = (req: Request, res: Response) => {
  const output: Game[] = []
  db.all(`SELECT p1.nickname as n1, p2.nickname as n2, score, duration
  FROM games 
  LEFT JOIN players  p1 ON p1.id=games.player1 
  LEFT JOIN players  p2 ON p2.id=games.player2
  WHERE games.id=?  LIMIT 1`, [req.params.id], (err: Error, row: Game) => {
    if (err) console.log(err);
    console.log(row)
    res.json(row)
  });
};

export const postGames = (req: Request, res: Response) => {
  const output: Game[] = []
  db.run("INSERT INTO games (player1, player2, score, duration) VALUES (?,?,?,?)",
    [req.body.player1, req.body.player2, req.body.score, req.body.duration],
    (err: Error, row: Game) => {
      if (err) console.log(err);
      console.log(row)
      res.json(row)
    });
};