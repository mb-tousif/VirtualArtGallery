import express from 'express';
import { createUser } from '../Users/user.controller';

const router = express.Router();

// User All Routes
router.post("/users/createUser", createUser)

export default router;