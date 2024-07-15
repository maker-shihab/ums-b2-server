import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { StudentServices } from "./student.services";

const getAllStudents = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await StudentServices.getAllStudentFromDB(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student was successfully retrieved",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get single student successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student delete successfully",
    data: result,
  });
});

const updateStudentFromDB = catchAsync(async (req, res) => {
  const { student: stuedntData } = req.body;
  const { studentId } = req.params;
  console.log(studentId, stuedntData);
  const result = await StudentServices.updateStudentFromDB(
    studentId,
    stuedntData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student update successfully",
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudentFromDB,
};
