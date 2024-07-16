import express from "express";

const router = express.Router();

router.get("/:facultyID");
router.patch("/:facultyID");
router.delete("/:facultyID");

export const FacultyRouter = router;
