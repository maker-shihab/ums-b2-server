import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentRouter } from "./app/modules/student/student.route";
const app: Application = express();

//Parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", StudentRouter);

export default app;
