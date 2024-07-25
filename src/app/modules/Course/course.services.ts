import { TCouse } from "./course.interface";
import { Course } from "./course.model";

const createCourseInDB = async (course: TCouse) => {
  const result = await Course.create(course);
  return result;
};

const getSingleCourse = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

const getAllCourseInDB = async () => {
  const result = await Course.find({ idDeleted: false });
  return result;
};

const updateCourseInDB = async (id: string, payload: Partial<TCouse>) => {
  const result = await Course.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteCourseInDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { idDeleted: true },
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
};
