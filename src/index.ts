import cors from "cors";
import express, {Request, Response} from "express"
import routers from "./routers/index.routes"

const app = express();
app.use(cors())
app.use(express.json());
app.use(routers);

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("To bem");
})

// app.get("/person", (req: Request, res: Response) => {

//     const test: {id: Number, firstName: String, lastName: String} = {
//         id: 1,
//         firstName: "John",
//         lastName: "Travolta"
//     }

//     res.status(200).send(test);
// })

app.listen(5000, () => {
    console.log("server rodandinho")
})