import { RequestHandler } from "express";
import httpStatus from "http-status";
import responseHandler from "../Shared/responseHandler";
import ServerAPIError from "../ErrorHandling/ErrorExtendedClass";
import asyncHandler from "../Shared/asyncHandler";
import { createArtService } from "./art.services";
import generateArtId from "./generateArtId";

export const createArt: RequestHandler = asyncHandler(
    async (req, res) => {
        const data = req.body;
        data.artId = await generateArtId();
        const result = await createArtService(data);
        if (!result) {
            throw new ServerAPIError(400, 'No art found');
        }
        responseHandler(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Successfully art created 🎉',
            data: result
        });
    }
)