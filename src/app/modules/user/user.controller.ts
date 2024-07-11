import { Request, Response } from "express";
import { UserService } from "./user.services";

const createStudent = async (req: Request, res: Response) => {
  try {
    // Get data from client body
    const { password, student: stuedntData } = req.body;

    // Creating a validation schema using zod validation
    // const zodparsedData = studentValidationSchema.parse(stuedntData);

    const result = await UserService.createStudentIntoDB(password, stuedntData);

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const UserController = {
  createStudent,
};
