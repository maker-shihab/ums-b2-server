import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { StudentController } from "./student.controller";
import { StudentValidations } from "./student.validation";

const router = express.Router();

router.get("/", StudentController.getAllStudents);

router.patch(
  "/:id",
  validateRequest(StudentValidations.updateStudentValidationSchema),
  StudentController.updateStudentFromDB,
);

router.get("/:id", StudentController.getSingleStudent);
router.delete("/:id", StudentController.deleteStudent);

export const StudentRouter = router;
