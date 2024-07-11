import { TStudent } from "./student.interface";
import { Student } from "./student.model";

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
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentFromDB,
};
