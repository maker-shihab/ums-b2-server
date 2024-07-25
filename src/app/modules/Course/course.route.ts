import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CourseController } from "./course.controller";
import { CourseValidationSchema } from "./course.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(CourseValidationSchema.createCourseValidationSchema),
  CourseController.createCourse,
);

router.get("/:id", CourseController.getSingleCourse);

router.get("/", CourseController.getAllCourses);

router.patch(
  "/:id",
  validateRequest(CourseValidationSchema.updateCreateCourseValidationSchema),
  CourseController.updateCourse,
);

router.delete("/:id", CourseController.deleteCourse);

export const CourseRouter = router;
