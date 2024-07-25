import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { FacultyServices } from "./faculty.services";

const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty was successfully retrieved",
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFacultyFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculties were successfully retrieved",
    data: result,
  });
});

const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedFacultyData = req.body;

  const result = await FacultyServices.updateFacultyInDB(
    id,
    updatedFacultyData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty was successfully updated",
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.deleteFacultyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty was successfully deleted",
    data: result,
  });
});
export const FacultyController = {
  getSingleFaculty,
  getAllFaculty,
  updateFaculty,
  deleteFaculty,
};
