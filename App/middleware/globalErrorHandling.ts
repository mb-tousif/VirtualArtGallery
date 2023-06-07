/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import { ZodError } from "zod";
import config from "../Config/index";
import { errorLogger } from "../Shared/Logger";
import { IGenericErrorMessage } from "../ErrorHandling/error.interfaces";
import handleValidationError from "../ErrorHandling/error.validation";
import ServerAPIError from "../ErrorHandling/ErrorExtendedClass";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === "development"
    ? console.log(`🐱 globalErrorHandler 💥`, error)
    : errorLogger.error(`🐱 globalErrorHandler 💥`, error);
  let statusCode = 500;
  let message = "Something went wrong !";
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
    // else if (error instanceof ZodError) {
    //   const simplifiedError = handleZodError(error);
    //   statusCode = simplifiedError.statusCode;
    //   message = simplifiedError.message;
    //   errorMessages = simplifiedError.errorMessages;
    // }
  else if (error instanceof ServerAPIError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;

//path:
//message:
// 2025 Fall
// 2025 and
