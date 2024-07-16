import httpStatus from "http-status";
import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { AdminServices } from "./admin.services";

const getAllAdmins = catchAsync(async (req, res) => {
  const result = AdminServices.getAllAdminsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins retrieved successfully",
    data: result,
  });
});

export const AdminController = {
  getAllAdmins,
};
