import express  from "express";
import { updateToArtist } from "./artist.controller";
const routes = express.Router();

routes.post("/createArtist", updateToArtist)

export const artistRoutes = routes;