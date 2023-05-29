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
    console.log(userInfo.password, userInfo.userId);
    
    await result.save();
    res.status(200).json({
      message: "Successfully user created 🎉",
      data: result,
    });
  } catch (error : any) {
    res.status(500).json({
      status: "fail 💥",
      message: error.message,
    });
  }
};
