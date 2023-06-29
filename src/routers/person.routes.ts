import { Router } from "express";
import { getPerson } from "../controllers/person.controller";

const personRouter = Router()

personRouter.get("/person", getPerson);

export default personRouter;