import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { StudentController } from "./student.controller";
import { StudentValidations } from "./student.validation";

const router = express.Router();

router.get("/", StudentController.getAllStudents);
router.patch(
  "/:studentId",
  validateRequest(StudentValidations.updateStudentValidationSchema),
  StudentController.updateStudentFromDB,
);
router.get("/:studentId", StudentController.getSingleStudent);
router.delete("/:studentId", StudentController.deleteStudent);

export const StudentRouter = router;
