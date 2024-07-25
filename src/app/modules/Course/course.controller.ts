import sendResponse from "../../../sendResponse";
import catchAsync from "../../utils/catchAsync";
import { CourseService } from "./course.services";

const createCourse = catchAsync(async (req, res) => {
  const { courseData } = req.body;
  const result = await CourseService.createCourseInDB(courseData);

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
  const result = await CourseService.getAllCourseInDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Courses fetched successfully",
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { courseData } = req.body;
  const result = await CourseService.updateCourseInDB(id, courseData);

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

export const CourseController = {
  createCourse,
  getSingleCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
};
