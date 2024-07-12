import config from "../../config";
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

  // Set Geneerated id
  userData.id = academicSemesterInfo
    ? await generateStudentId(academicSemesterInfo)
    : "";

  // Assign generated id to payload
  payload.id = userData.id;

  // Create a User
  const newUser = await User.create(payload);

  // Create student
  // Object.keys for creation array
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
