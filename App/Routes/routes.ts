import express from 'express';
import { createUser } from '../Users/user.controller';
import { updateToArtist } from '../Artists/artist.controller';

const router = express.Router();

// User All Routes
router.post("/users/createUser", createUser);

// Artist All Routes
router.post("/artists/createArtist", updateToArtist);

export default router;