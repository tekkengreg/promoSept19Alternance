import { Request, Response } from 'express';
import db from '../db';

interface Item { id: number, info: string }

export const getItems = (req: Request, res: Response) => {
  const output: Item[] = []
  db.each("SELECT rowid AS id, info FROM items", (err: Error, row: Item) => {
    if (err) console.log(err);
    console.log(row)
    output.push(row);
  });
  res.json(output)
};