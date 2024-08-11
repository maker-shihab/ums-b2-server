import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { CourseService } from "./course.services";

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.createCourseInDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course created successfully",
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.getSingleCourse(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course fetched successfully",
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseService.getAllCourseInDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Courses fetched successfully",
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CourseService.updateCourseInDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course updated successfully",
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.deleteCourseInDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course deleted successfully",
    data: result,
  });
});

const assignFaculties = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { faculties } = req.body;

  const result = await CourseService.assignFacultiesWithCourseInDB(
    id,
    faculties,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course Faculty assigned successfully!",
    data: result,
  });
});

const removeFromFaculties = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { faculties } = req.body;

  const result = await CourseService.removeFacultiesWithCourseInDB(
    id,
    faculties,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course Faculty Remove Successfully!",
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getSingleCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  assignFaculties,
  removeFromFaculties,
};
