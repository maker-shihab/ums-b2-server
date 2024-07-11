import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // Create user object
  let userData: Partial<TUser> = {};

  // if password is not given, create default password
  userData.password = password || (config.default_password as string);

  // Set Student role
  userData.role = "student";

  // Set Manually user id
  userData.id = "220422055";

  // Create a User
  const result = await User.create(studentData);

  // Create student
  // Object.keys for creation array
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  // {
  //     ...studentData,
  //     userId: result.id,
  //   }
};

export const UserService = {
  createStudentIntoDB,
};
