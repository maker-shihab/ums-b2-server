import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.services";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: stuedntData } = req.body;

  const result = await UserService.createStudentIntoDB(password, stuedntData);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
};
