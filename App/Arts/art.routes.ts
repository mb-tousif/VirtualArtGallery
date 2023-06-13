import express from "express";
import { createArt } from "./art.controller";
const router = express.Router();

router.post("/createArt", createArt);
router.put("/updateArt/:id", );
router.delete("/deleteArt/:id", );
router.get("/getArtById/:id", );
router.get("/getAllArts", );

export const artRoutes = router;