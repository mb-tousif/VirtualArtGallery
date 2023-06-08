import { RequestHandler } from "express";
import { createUserService, getAllUsersService } from "./user.services";
import generateDefaultPassword from "../Utilities/generatePassword";
import generateUserId from "../Utilities/generateUserId";
import ServerAPIError from "../ErrorHandling/ErrorExtendedClass";
import { z } from "zod";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const userInfo = req.body;
    userInfo.password = generateDefaultPassword();
    userInfo.userId = await generateUserId();
    const result = await createUserService(userInfo);
    // console.log(userInfo.password, userInfo.userId);
    if (!result) {
      throw new ServerAPIError(400,"User not created");
    };
    await result.save();
    res.status(200).json({
      message: "Successfully user created 🎉",
      defaultPassword: result.password,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const result = await getAllUsersService();
    if (!result) {
      throw new ServerAPIError(400,"No users found");
    };
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error : any) {
    next(error);
  }
};
