import { RequestHandler } from "express";
// import { generateDefaultPassword } from "../middleware/generatePassword";
import { createUserService } from "./user.services";

export const createUser: RequestHandler = async (req, res) => {
  try {
    const userInfo = req.body;
    // userInfo.password = generateDefaultPassword();
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
