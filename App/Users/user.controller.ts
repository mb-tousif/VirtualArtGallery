import { RequestHandler } from 'express';
import {
  createUserService,
  getAllUsersService,
  getUserByUserIdService,
} from './user.services';
import generateDefaultPassword from '../Utilities/generatePassword';
import generateUserId from '../Utilities/generateUserId';
import ServerAPIError from '../ErrorHandling/ErrorExtendedClass';
import asyncHandler from '../Shared/asyncHandler';

export const createUser: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const userInfo = req.body;
    userInfo.password = generateDefaultPassword();
    userInfo.userId = await generateUserId();
    const result = await createUserService(userInfo);
    // console.log(userInfo.password, userInfo.userId);
    if (!result) {
      throw new ServerAPIError(400, 'User not created');
    }
    await result.save();
    res.status(200).json({
      message: 'Successfully user created 🎉',
      defaultPassword: result.password,
    });
    // next();
  }
);

export const getAllUsers: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const result = await getAllUsersService();
    if (!result) {
      throw new ServerAPIError(400, 'No users found');
    }
    res.status(200).json({
      status: 'success',
      result,
    });
    // next();
  }
);

export const getUserByUserId: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { id } = req.params;
    const result = await getUserByUserIdService(id);
    if (!result) {
      throw new ServerAPIError(400, 'No users found');
    }
    res.status(200).json({
      status: 'success',
      result,
    });
    // next();
  }
);
