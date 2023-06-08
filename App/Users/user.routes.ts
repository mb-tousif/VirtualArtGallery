import express from 'express';
import zodValidateRequest from '../middleware/zodValidateReq';
import createUserZodSchema from './user.zod.validation';
import { createUser, getAllUsers, getUserByUserId } from './user.controller';
const router = express.Router();

router.get('/getAllUsers', getAllUsers);
router.get("/getOneUser/:id", getUserByUserId)
router.post('/createUser', zodValidateRequest(createUserZodSchema),  createUser)


export const userRoutes = router;