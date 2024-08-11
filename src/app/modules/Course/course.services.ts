import httpStatus from "http-status";
import mongoose from "mongoose";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { CourseSearchableFields } from "./course.constant";
import { TCourseFaculty, TCouse } from "./course.interface";
import { Course, CourseFaculty } from "./course.model";

const createCourseInDB = async (payload: TCouse) => {
  const result = await Course.create(payload);
  return result;
};

const getSingleCourse = async (id: string) => {
  const result = await Course.findById(id).populate(
    "preRequisiteCourses.course",
  );
  return result;
};

const getAllCourseInDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate("preRequisiteCourses.course"),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};

const updateCourseInDB = async (id: string, payload: Partial<TCouse>) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { preRequisiteCourses, ...courseRemainingData } = payload;

    const updateBasicCourseInfo = await Course.findByIdAndUpdate(
      id,
      courseRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      },
    );

    if (updateBasicCourseInfo) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Failed to update basic course",
      );
    }

    if (preRequisiteCourses && preRequisiteCourses.length > 0) {
      const deletedPreRequisites = preRequisiteCourses
        .filter(el => el.course && el.isDeleted)
        .map(el => el.course);

      const deletedPreRequisitesCourses = await Course.findByIdAndUpdate(
        id,
        {
          $pull: {
            preRequisiteCourses: { course: { $in: deletedPreRequisites } },
          },
        },
        { new: true, runValidators: true, session },
      );
      if (deletedPreRequisitesCourses) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "Failed to update basic course",
        );
      }

      const newPreRequisites = preRequisiteCourses?.filter(
        el => el.course && !el.isDeleted,
      );

      const newPreRequisitesCourses = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisiteCourses: { $each: newPreRequisites } },
        },
        { new: true, runValidators: true, session },
      );
      if (newPreRequisitesCourses) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "Failed to update basic course",
        );
      }
    }

    const result = await Course.findByIdAndUpdate(id).populate(
      "preRequisiteCourses.course",
    );

    await session.abortTransaction();
    await session.endSession();

    return result;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const deleteCourseInDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const assignFacultiesWithCourseInDB = async (
  id: string,
  payload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      course: id,
      $addToSet: { faculties: { $each: payload } },
    },
    { upsert: true, new: true },
  );

  return result;
};

const removeFacultiesWithCourseInDB = async (
  id: string,
  payload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: payload } },
    },
    { new: true },
  );

  return result;
};

export const CourseService = {
  createCourseInDB,
  getSingleCourse,
  updateCourseInDB,
  deleteCourseInDB,
  getAllCourseInDB,
  assignFacultiesWithCourseInDB,
  removeFacultiesWithCourseInDB,
};
