import { RequestHandler } from "express";
import { updateUserToArtist } from "./artist.services";

export const updateToArtist: RequestHandler = async (req, res) => {
  try {
    const payload = req.body.userId;
    const result = await updateUserToArtist(payload);
    await result.save();
    res.status(200).json({
      message: "Successfully updated to artist 🎉",
      result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "fail 💥",
      message: error.message,
    });
  }
};
