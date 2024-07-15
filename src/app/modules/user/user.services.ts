import httpStatus from "http-status";
import mongoose from "mongoose";
import config from "../../config";
import AppError from "../../errors/AppError";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // Create user object
  const userData: Partial<TUser> = {};

  // if password is not given, create default password
  userData.password = password || (config.default_password as string);

  // Set Student role
  userData.role = "student";

  // Find academic semester info
  const academicSemesterInfo = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  console.log(academicSemesterInfo);
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Set Geneerated id
    userData.id = academicSemesterInfo
      ? await generateStudentId(academicSemesterInfo)
      : "";
    console.log(userData.id);
    // Create a User
    const newUser = await User.create([userData], { session });

    // Create student
    // Object.keys for creation array
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, err);
  }
};

export const UserService = {
  createStudentIntoDB,
};
