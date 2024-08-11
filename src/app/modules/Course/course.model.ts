import { model, Schema } from "mongoose";
import {
  TCourseFaculty,
  TCouse,
  TPreRequisiteCourses,
} from "./course.interface";

const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourses>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const courseSchemas = new Schema<TCouse>({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    trim: true,
  },
  prefix: {
    type: String,
    required: [true, "Prefix is required"],
    trim: true,
  },
  code: {
    type: Number,
    required: [true, "Code is required"],
  },
  credits: {
    type: Number,
    required: [true, "Credits are required"],
    min: 1,
  },
  preRequisiteCourses: [preRequisiteCoursesSchema],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Course = model<TCouse>("Course", courseSchemas);

const courseFacultySchema = new Schema<TCourseFaculty>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    unique: true,
  },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
      // unique: true,
    },
  ],
});

export const CourseFaculty = model<TCourseFaculty>(
  "CourseFaculty",
  courseFacultySchema,
);
