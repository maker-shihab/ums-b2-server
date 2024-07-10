import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModle.create(student); // build in static method

  // const student = new Student(studentData); // create an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error(`User already exists!`);
  // }
  if (await Student.isUserExists(studentData.id)) {
    throw new Error(`User already exists!`);
  }

  const result = await Student.create(studentData); // build in instance method
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

const updateStudentFromDB = async (
  id: string,
  studentData: Partial<TStudent>,
) => {
  const result = await Student.findOneAndUpdate(
    { id: id },
    { $set: studentData },
    { new: true, runValidators: true },
  );
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentFromDB,
};
