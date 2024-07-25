import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.services";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: stuedntData } = req.body;

  const result = await UserService.createStudentIntoDB(password, stuedntData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserService.createFacultyIntoDB(password, facultyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserService.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};
