import { RequestHandler } from "express";
import { createUserService, getAllUsersService } from "./user.services";
import generateDefaultPassword from "../Utilities/generatePassword";
import generateUserId from "../Utilities/generateUserId";
import ServerAPIError from "../ErrorHandling/ErrorExtendedClass";
import { z } from "zod";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createUserZodSchema = z.object({
      email: z.string().email(),
      // password: z.string().min(6).max(15).optional(),
      // role: z.enum(["user", "activeUser", "artist", "admin", "superAdmin"]).optional(),
      // name: z.string().min(3).max(50).optional(),
      // gender: z.enum(["Male", "Female", "Other"]).optional(),
      // DOB: z.string().optional(),
      // ECN: z.string().optional(),
      // reference: z.string().optional(),
      // contactNo: z.string().optional(),
      // address: z.string().optional(),
      // purchasedArt: z.array(z.string()).optional(),
      // favoritesArt: z.array(z.string()).optional(),
    });
    await createUserZodSchema.parseAsync(req);
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
