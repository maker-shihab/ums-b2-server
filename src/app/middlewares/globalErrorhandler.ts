import { NextFunction, Request, Response } from "express";

const globalErrorhandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = err.message || "Something went wrong ⚠!";

  return res.status(statusCode).json({
    success: false,
    message,
    error: err.message || message,
  });
};

export default globalErrorhandler;
