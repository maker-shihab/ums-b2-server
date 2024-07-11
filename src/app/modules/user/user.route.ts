import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/create-student", UserController.createStudent);

export const UserRouter = router;
