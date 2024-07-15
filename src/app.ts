import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
const app: Application = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Basic route to test the server
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Routes for users
app.use("/api/v1", router);

// Error handling middleware
app.use(globalErrorhandler);

// Not Found
app.use(notFound);

// Start the server
export default app;
