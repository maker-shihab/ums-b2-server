import { model, Schema } from "mongoose";
import {
  BloodGroupsSchema,
  GenderSchema,
  userNameSchema,
} from "../student/student.model";
import { TAdmin } from "./admin.interface";

const adminSchema = new Schema<TAdmin>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
      unique: true,
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: GenderSchema,
      required: true,
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Admin = model<TAdmin>("Admin", adminSchema);
