import { RequestHandler } from "express";
import { createUserService } from "./user.services";
import generateDefaultPassword from "../Utilities/generatePassword";
import generateUserId from "../Utilities/generateUserId";
export const createUser: RequestHandler = async (req, res) => {
  try {
    const userInfo = req.body;
    userInfo.password = generateDefaultPassword();
    userInfo.userId = await generateUserId();
    const result = await createUserService(userInfo);
    await result.save();
    res.status(200).json({
      message: "Successfully user created 🎉",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail 💥",
      message: error,
    });
  }
};
