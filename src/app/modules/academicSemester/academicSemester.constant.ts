import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from "./academicSemester.interface";

// Month validation schema
export const MonthSchema: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Academic Semester name validation schema
export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Summar",
  "Fall",
];

// Academic Semester code validation schema
export const AcademicSemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];
