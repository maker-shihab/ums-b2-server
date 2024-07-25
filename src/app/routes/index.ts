import express from "express";
import { AcademicDepartmentRouter } from "../modules/AcademicDepartment/academicDepartment.route";
import { AcademicFacultyRouter } from "../modules/AcademicFaculty/academicFaculty.route";
import { AcademicSemesterRoute } from "../modules/AcademicSemester/academicSemester.route";
import { CourseRouter } from "../modules/Course/course.route";
import { FacultyRouter } from "../modules/Faculty/faculty.route";
import { StudentRouter } from "../modules/Student/student.route";
import { UserRouter } from "../modules/User/user.route";

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
    path: "/faculties",
    route: FacultyRouter,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoute,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRouter,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRouter,
  },
  {
    path: "/courses",
    route: CourseRouter,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
