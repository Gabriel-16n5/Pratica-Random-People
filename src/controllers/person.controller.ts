import {db} from "../config/database.js"
import {Request, Response} from "express"

export async function getPerson(req: Request, res: Response) {
    try {
      const rp = await db.query(
        `SELECT *
            FROM people`
      );
      res.status(201).send(rp.rows[1]);
    } catch (erro) {
      res.send(erro.message);
    }
  }