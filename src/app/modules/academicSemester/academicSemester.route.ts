import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterController } from "./academicSemester.controller";
import { AcademicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
  AcademicSemesterController.createAcademicSemester,
);

router.get("/", AcademicSemesterController.getAllAcademicSemesters);

router.get(
  "/:academicSemesterId",
  AcademicSemesterController.getSingleAcademicSemester,
);

router.patch(
  "/:academicSemesterId",
  AcademicSemesterController.updateAcademicSemesterIntoDb,
);

export const AcademicSemesterRoute = router;
