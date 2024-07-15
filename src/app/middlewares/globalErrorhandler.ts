import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import config from "../config";
import handleCastError from "../errors/handleCastError";
import handleValidationError from "../errors/handleValidationError";
import handleZodError from "../errors/handleZoodError";
import { TErrorSources } from "../interface/error";

const globalErrorhandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Something went wrong ⚠!";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};

export default globalErrorhandler;
