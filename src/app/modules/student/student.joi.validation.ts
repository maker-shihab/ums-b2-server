// import Joi from 'joi';
// import {
//   TGurdian,
//   TStudent,
//   TUserName,
//   TlocalGurdian,
// } from './student.interface';

// // UserName validation schema
// const userNameValidationSchema = Joi.object<TUserName>({
//   firstName: Joi.string()
//     .trim()
//     .max(20)
//     .regex(/^[A-Z][a-z]*$/, 'first letter capitalized and others lowercase')
//     .required()
//     .messages({
//       'string.pattern.name':
//         '{#label} must have the first letter capitalized and others lowercase',
//       'string.empty': 'First Name is required',
//     }),
//   middleName: Joi.string().optional(),
//   lastName: Joi.string()
//     .trim()
//     .max(20)
//     .pattern(/^[a-zA-Z]+$/, 'alphabetic characters')
//     .required()
//     .messages({
//       'string.pattern.name': '{#label} must contain only alphabetic characters',
//       'string.empty': 'Last Name is required',
//     }),
// });

// // Guardian validation schema
// const guardianValidationSchema = Joi.object<TGurdian>({
//   fatherName: Joi.string().max(20).required().messages({
//     'string.empty': 'Father Name is required',
//     'string.max': 'Father Name cannot be more than 20 characters',
//   }),
//   fatherOccupation: Joi.string().required().messages({
//     'string.empty': 'Father Occupation is required',
//   }),
//   fatherContactNo: Joi.string().required().messages({
//     'string.empty': 'Father Contact No is required',
//   }),
//   motherName: Joi.string().required().messages({
//     'string.empty': 'Mother Name is required',
//   }),
//   motherOccupation: Joi.string().required().messages({
//     'string.empty': 'Mother Occupation is required',
//   }),
//   motherContactNo: Joi.string().required().messages({
//     'string.empty': 'Mother Contact No is required',
//   }),
// });

// // Local Guardian validation schema
// const localGuardianValidationSchema = Joi.object<TlocalGurdian>({
//   name: Joi.string().required().messages({
//     'string.empty': 'Name is required',
//   }),
//   occupation: Joi.string().required().messages({
//     'string.empty': 'Occupation is required',
//   }),
//   contactNo: Joi.string().required().messages({
//     'string.empty': 'Contact No is required',
//   }),
//   address: Joi.string().required().messages({
//     'string.empty': 'Address is required',
//   }),
// });

// // Student validation schema
// const studentValidationSchema = Joi.object<TStudent>({
//   id: Joi.string().required().messages({
//     'string.empty': 'ID is required',
//   }),
//   name: userNameValidationSchema.required().messages({
//     'any.required': 'Name is required',
//   }),
//   gender: Joi.string().valid('male', 'female', 'other').required().messages({
//     'any.only':
//       "The gender field can only be one of the following: 'male', 'female', 'other'.",
//     'string.empty': 'Gender is required',
//   }),
//   dateOfBirth: Joi.string().optional(),
//   email: Joi.string().email().required().messages({
//     'string.email': '{#label} is not a valid email',
//     'string.empty': 'Email is required',
//   }),
//   contactNo: Joi.string().required().messages({
//     'string.empty': 'Contact Number is required',
//   }),
//   emergencyContactNo: Joi.string().required().messages({
//     'string.empty': 'Emergency Contact Number is required',
//   }),
//   bloodGroups: Joi.string()
//     .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
//     .optional(),
//   presentAddress: Joi.string().required().messages({
//     'string.empty': 'Present Address is required',
//   }),
//   permanentAddress: Joi.string().required().messages({
//     'string.empty': 'Permanent Address is required',
//   }),
//   guardian: guardianValidationSchema.required().messages({
//     'any.required': 'Guardian is required',
//   }),
//   localGuardian: localGuardianValidationSchema.required().messages({
//     'any.required': 'Local Guardian is required',
//   }),
//   profileImg: Joi.string().optional(),
//   isActive: Joi.string().valid('active', 'blocked').default('active'),
// });

// export default studentValidationSchema;
