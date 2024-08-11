import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SemesterRegistrationController } from "./semesterRegistration.controller";
import { SemesterRegistrationValidations } from "./semesterRegistration.validations";

const router = express.Router();

router.post(
  "/",
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);

router.get("/", SemesterRegistrationController.getAllSemesterRegistrations);

router.get(
  "/:id",
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.patch("/:id", SemesterRegistrationController.updateSemesterRegistration);

router.delete(
  "/:id",
  SemesterRegistrationController.deleteSemesterRegistration,
);

export const SemesterRegistrationRouter = router;
