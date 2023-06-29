import { Router } from "express";
import personRouter from "../routers/person.routes"

const routers = Router()
routers.use(personRouter);

export default routers
