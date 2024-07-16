import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createAdminValidationsSchema } from "../Admin/admin.validation";
import { createFacultyValidationSchema } from "../Faculty/faculty.validation";
import { StudentValidations } from "../Student/student.validation";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(StudentValidations.createStudentValidationSchema),
  UserController.createStudent,
);

router.post(
  "/create-faculty",
  validateRequest(createFacultyValidationSchema),
  UserController.createFaculty,
);

router.post(
  "/create-admin",
  validateRequest(createAdminValidationsSchema),
  UserController.createAdmin,
);

export const UserRouter = router;
