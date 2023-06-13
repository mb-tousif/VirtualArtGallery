import httpStatus from "http-status";
import responseHandler from "../Shared/responseHandler";
import ServerAPIError from "../ErrorHandling/ErrorExtendedClass";
import asyncHandler from "../Shared/asyncHandler";
import generateArtId from "./generateArtId";
import { createArtService, updateArtByIdService } from "./art.services";
import { RequestHandler } from "express";

export const createArt: RequestHandler = asyncHandler(
    async (req, res) => {
        const data = req.body;
        data.artId = await generateArtId();
        const result = await createArtService(data);
        if (!result) {
            throw new ServerAPIError(400, 'Art data not created');
        };
        responseHandler(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Successfully art created 🎉',
            data: result
        });
    }
);

export const updateArtById: RequestHandler = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const result = await updateArtByIdService(id, data);
        if (!result) {
            throw new ServerAPIError(400, 'Art data not updated');
        };
        responseHandler(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Successfully art updated 🎉',
            data: result
        });
    }
);