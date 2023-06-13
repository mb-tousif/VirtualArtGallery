import express from "express";
import { createArt } from "./art.controller";
import zodValidateRequest from "../middleware/zodValidateReq";
import createArtZodSchema from "./art.zod.validation";
const router = express.Router();

router.post("/createArt", zodValidateRequest(createArtZodSchema), createArt);
router.put("/updateArt/:id", );
router.delete("/deleteArt/:id", );
router.get("/getArtById/:id", );
router.get("/getAllArts", );

export const artRoutes = router;