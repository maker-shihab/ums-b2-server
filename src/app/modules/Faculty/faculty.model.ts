import { model, Schema } from "mongoose";
import {
  BloodGroupsSchema,
  GenderSchema,
  userNameSchema,
} from "../student/student.model";
import { TFaculty } from "./faculty.interface";

const facultySchema = new Schema<TFaculty>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: GenderSchema,
      required: true,
    },
    dateOfBirth: {
      dateOfBirth: { type: Date },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Contact Number is required"],
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Emergency Contact Number is required"],
    },
    bloodGroups: {
      type: String,
      enum: BloodGroupsSchema,
    },
    presentAddress: {
      type: String,
      required: [true, "Present Address is not available"],
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent Address is available"],
    },
    profileImage: {
      type: String,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: "AcademicDepartment",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Faculty = model<TFaculty>("faculty", facultySchema);
