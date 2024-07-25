import { Types } from "mongoose";

export type TPreRequisiteCourses = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

export type TCouse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: [];
};
