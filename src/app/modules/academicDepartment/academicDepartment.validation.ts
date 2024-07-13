import { z } from "zod";

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department must be string",
      required_error: "Name is required",
    }),
    academicDepartment: z.string({
      invalid_type_error: "Academic Department must be string",
      required_error: "Faculty is required",
    }),
  }),
});

const updateAdemicDepartmentValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academic Department must be string",
        required_error: "Name is required",
      })
      .optional(),
    academicDepartment: z
      .string({
        invalid_type_error: "Academic Department must be string",
        required_error: "Faculty is required",
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidation,
  updateAdemicDepartmentValidation,
};
