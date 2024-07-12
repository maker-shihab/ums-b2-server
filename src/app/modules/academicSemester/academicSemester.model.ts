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
    type: String,
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

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExist = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExist) {
    throw new Error("Academic Semester already exists");
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
