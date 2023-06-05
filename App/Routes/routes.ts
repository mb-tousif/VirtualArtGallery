import express from 'express';
import { createUser, getAllUsers } from '../Users/user.controller';
import { updateToArtist } from '../Artists/artist.controller';

const router = express.Router();

// User All Routes
router.get("/users/getAllUsers", getAllUsers);
router.post("/users/createUser", createUser);

// Artist All Routes
router.post("/artists/createArtist", updateToArtist);

export default router;