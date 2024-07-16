import { Types } from "mongoose";
import { TBloadGroups, TGender, TUserName } from "../student/student.interface";

export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: TUserName;
  gender: TGender;
  dateOfBirth?: string | null;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroups?: TBloadGroups;
  presentAddress: string;
  permanentAddress: string;
  profileImage?: string;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};
