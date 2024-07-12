import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.services";

const createStudent = catchAsync(async (req, res) => {
  // Get data from client body
  const { password, student: stuedntData } = req.body;

  // Creating a validation schema using zod validation
  // const zodparsedData = studentValidationSchema.parse(stuedntData);

  const result = await UserService.createStudentIntoDB(password, stuedntData);

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
