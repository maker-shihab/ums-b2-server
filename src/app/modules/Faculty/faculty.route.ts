import express from "express";
import { FacultyController } from "./faculty.controller";

const router = express.Router();

router.get("/", FacultyController.getAllFaculty);
router.get("/:facultyID");
router.patch("/:facultyID");
router.delete("/:facultyID");

export const FacultyRouter = router;
