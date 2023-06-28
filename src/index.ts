import express, {Request, Response} from "express"

const app = express();

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("To bem");
})

app.listen(5000, () => {
    console.log("server dodandinho")
})