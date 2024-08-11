import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { SemesterRegistrationService } from "./semesterRegistration.services";

const createSemesterRegistration = catchAsync(async (req, res) => {
  const data = req.body;
  const result =
    await SemesterRegistrationService.createSemesterRegistrationIntoDB(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration is created successfully",
    data: result,
  });
});

const getAllSemesterRegistrations = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(
      req.query,
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registrations were successfully retrieved",
    data: result,
  });
});

const getSingleSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result =
    await SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration was successfully retrieved",
    data: result,
  });
});

const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result =
    await SemesterRegistrationService.updateSemesterRegistrationIntoDB(
      id,
      data,
    );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration was successfully updated",
    data: result,
  });
});

const deleteSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationService.deleteSemesterRegistrationFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration was successfully deleted",
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
};
