import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicDepartmentController } from "./academicDepartment.controller";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";

const router = express.Router();

// Routes
router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);

router.get("/", AcademicDepartmentController.getAllAcademicDepartments);

router.get(
  "/:academicDepartmentId",
  AcademicDepartmentController.getSingleAcademicDepartment,
);

router.patch(
  "/:academicDepartmentId",
  validateRequest(
    AcademicDepartmentValidation.updateAdemicDepartmentValidation,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoute = router;
