import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { FacultyController } from "./faculty.controller";
import { updateFacultyValidationSchema } from "./faculty.validation";

const router = express.Router();

router.get("/:id", FacultyController.getSingleFaculty);

router.patch(
  "/:id",
  validateRequest(updateFacultyValidationSchema),
  FacultyController.updateFaculty,
);

router.delete("/:id", FacultyController.deleteFaculty);

router.get("/", FacultyController.getAllFaculty);

export const FacultyRouter = router;
