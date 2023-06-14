import express from "express";
import { createArt, getAllArt, updateArtById } from "./art.controller";
import zodValidateRequest from "../middleware/zodValidateReq";
import createArtZodSchema from "./art.zod.validation";
const router = express.Router();

router.post("/createArt", zodValidateRequest(createArtZodSchema), createArt);
router.patch("/updateArt/:id", updateArtById);
router.delete("/deleteArt/:id", );
router.get("/getArtById/:id", );
router.get("/getAllArts", getAllArt);

export const artRoutes = router;