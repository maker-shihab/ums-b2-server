import { Schema, model } from "mongoose";
import {
  StudentModel,
  TGurdian,
  TStudent,
  TUserName,
  TlocalGurdian,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: 20,
    trrim: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    maxlength: 20,
  },
});

const gardianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, "Father Name is required"],
    maxlength: [20, "Father Name can not be more than 20 characters"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father Occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact No is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother Occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother Contact No is required"],
  },
});

const localGurdianSchema = new Schema<TlocalGurdian>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact No is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

// Creating Schema object
const studentSchema = new Schema<TStudent, StudentModel>(
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
      required: [true, "Name is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [
        true,
        "The gender field can only be one of the following: 'male', 'female', 'other'.",
      ],
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Contact Number is required"],
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Emergency Contact Number is required"],
    },
    bloodGroups: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: {
      type: String,
      required: [true, "Present Address is not available"],
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent Address is available"],
    },
    guardian: {
      type: gardianSchema,
      required: [true, "Gardian is not available"],
    },
    localGuardian: {
      type: localGurdianSchema,
      required: [true, "Local Gurdian is not available"],
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.post("findOneAndUpdate", function (doc, next) {
  if (doc) {
    doc.password = "";
  }
  next();
});

// Query middleware
studentSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// [$match: {isDeleted:: {$ne: true}}, {$match: {isDeleted: {$ne: true}}]
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// Creating a custom statics method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Virtual
studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// Creating the model instance
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
