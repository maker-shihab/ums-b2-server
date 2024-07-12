import express from "express";
import { AcademicFacultyRouter } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { StudentRouter } from "../modules/student/student.route";
import { UserRouter } from "../modules/user/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/students",
    route: StudentRouter,
  },
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoute,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRouter,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
