import { RequestHandler} from 'express';
import httpStatus from 'http-status';
import responseHandler from '../Shared/responseHandler';
import generateDefaultPassword from '../Utilities/generatePassword';
import generateUserId from '../Utilities/generateUserId';
import ServerAPIError from '../ErrorHandling/ErrorExtendedClass';
import asyncHandler from '../Shared/asyncHandler';
import { createUserService, getAllUsersService, getUserByUserIdService } from './user.services';

export const createUser: RequestHandler = asyncHandler(
  async (req, res) => {
    const userInfo = req.body;
    userInfo.password = generateDefaultPassword();
    userInfo.userId = await generateUserId();
    const result = await createUserService(userInfo);
    // console.log(userInfo.password, userInfo.userId);
    if (!result) {
      throw new ServerAPIError(400, 'User not created');
    }
    await result.save();
   responseHandler(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Successfully user created 🎉',
      data: { defaultPassword: result.password}
    });
    // next();
  }
);

export const getAllUsers: RequestHandler = asyncHandler(
  async (req, res) => {
    const result = await getAllUsersService();
    if (!result) {
      throw new ServerAPIError(400, 'No users found');
    }
    responseHandler(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully users fetched 🎉',
      data: result
    });
    // next();
  }
);

export const getUserByUserId: RequestHandler = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const result = await getUserByUserIdService(id);
    if (!result) {
      throw new ServerAPIError(400, 'No users found');
    }
    responseHandler(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
    // next();
  }
);
