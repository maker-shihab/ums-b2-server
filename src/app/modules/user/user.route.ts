import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { StudentValidations } from "../student/student.validation";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(StudentValidations.createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRouter = router;
