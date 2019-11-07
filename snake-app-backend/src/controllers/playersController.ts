import { Request, Response } from 'express';
import db from '../db';

interface Player { nickname: string, avatar: string }

export const getPlayers = (req: Request, res: Response) => {
  const output: Player[] = []
  db.all("SELECT * FROM players", (err: Error, row: Player) => {
    if (err) console.log(err);
    console.log("gp", row)
    res.json(row)
  });
};

export const getPlayerById = (req: Request, res: Response) => {
  const output: Player[] = []
  db.all("SELECT * FROM players WHERE id=?  LIMIT 1", [req.params.id], (err: Error, row: Player) => {
    if (err) console.log(err);
    console.log(row)
    res.json(row)
  });
};

export const postPlayers = (req: Request, res: Response) => {
  const output: Player[] = []
  db.run("INSERT INTO players (nickname,avatar) VALUES (?,?)", [req.body.nickname, req.body.avatar], (err: Error, row: Player) => {
    if (err) console.log(err);
    console.log(row)
    res.json(row)
  });
};