import express from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/", AdminController.getAllAdmins);
router.get("/:adminId");
router.patch("/:adminId");
router.delete("/:adminId");

export const AdminRouter = router;
