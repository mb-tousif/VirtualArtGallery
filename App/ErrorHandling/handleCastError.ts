import mongoose from 'mongoose';
import { IGenericErrorMessage } from './error.interfaces';
import httpStatus from 'http-status';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ];

//   const statusCode = 400;
  let statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleCastError;