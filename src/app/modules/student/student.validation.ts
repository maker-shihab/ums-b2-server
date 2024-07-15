import { z } from "zod";

// UserName validation schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1)
    .max(20)
    .refine(value => {
      const formattedValue =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      return value === formattedValue;
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .trim()
    .min(1)
    .max(20)
    .refine(value => /^[a-zA-Z]+$/.test(value)),
});

// Guardian validation schema
const guardianValidatonSchema = z.object({
  fatherName: z.string().min(1).max(20),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

// Local Guardian validation schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Student validation schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(1).max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female", "other"]),
      dateOfBirth: z.string().optional(),
      email: z.string().email().min(1),
      contactNo: z.string().min(1),
      emergencyContactNo: z.string().min(1),
      bloodGroups: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      presentAddress: z.string().min(1),
      permanentAddress: z.string().min(1),
      guardian: guardianValidatonSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
      academicDepartment: z.string(),
      academicFaculty: z.string().optional(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(["male", "female", "other"]).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const StudentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
