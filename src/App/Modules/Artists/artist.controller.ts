import { RequestHandler } from "express";
import { updateUserToArtist } from "./artist.services";
import asyncHandler from '../../../Shared/asyncHandler';

export const updateToArtist: RequestHandler = asyncHandler(async (req, res) => {
    const payload = req.body.userId;
    const result = await updateUserToArtist(payload);
    await result.save();
    res.status(200).json({
      message: "Successfully updated to artist 🎉",
      result,
    });
});
