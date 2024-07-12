import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalide semester code");
  }

  return await AcademicSemester.create(payload);
};

const getAllAcademicSemesterIntoDb = async () => {
  return await AcademicSemester.find({});
};

const getSingleAcademicSemesterIntoDb = async (id: string) => {
  return await AcademicSemester.findById({ _id: id });
};

const updateAcademicSemesterIntoDb = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Academic Semester Code must be unique");
  }
  return await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemesterIntoDb,
  getSingleAcademicSemesterIntoDb,
  updateAcademicSemesterIntoDb,
};
