import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester created successfully",
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterIntoDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Academic Semesters retrieved successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { academicSemesterId } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterIntoDb(
      academicSemesterId,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Singleademic Semester retrieved successfully",
    data: result,
  });
});

const updateAcademicSemesterIntoDb = catchAsync(async (req, response) => {
  const { academicSemesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDb(
    academicSemesterId,
    req.body,
  );
  sendResponse(response, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester updated successfully",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemesterIntoDb,
};
