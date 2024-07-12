import express from "express";
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
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route.route);
});

export default router;
