import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";
import { AuthValiadation } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValiadation.loginValidationSchema),
  AuthController.loginUser,
);

router.post(
  "/change-password",
  validateRequest(AuthValiadation.changePasswordValidationSchema),
  AuthController.loginUser,
);

export const AuthRouter = router;
