import { Types } from "mongoose";
import { TBloadGroups, TGender, TUserName } from "../student/student.interface";

export type TAdmin = {
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
  isDeleted: boolean;
};
