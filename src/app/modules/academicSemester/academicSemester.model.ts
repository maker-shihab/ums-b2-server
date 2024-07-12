import { model, Schema } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  MonthSchema,
} from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";

// Academic Semester validation schema
const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcademicSemesterName,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: AcademicSemesterCode,
  },
  startMonth: {
    type: String,
    required: true,
    enum: MonthSchema,
  },
  endMonth: {
    type: String,
    required: true,
    enum: MonthSchema,
  },
});

export const academicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
