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
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
