import express from 'express';
import zodValidateRequest from '../middleware/zodValidateReq';
import createUserZodSchema from './user.zod.validation';
import { createUser, getAllUsers, getUserByUserId, updateUserById } from './user.controller';
const router = express.Router();

router.post('/createUser', zodValidateRequest(createUserZodSchema),  createUser)
router.patch('/updateUser/:id', updateUserById)
router.get('/getAllUsers', getAllUsers);
router.get("/getOneUser/:id", getUserByUserId)

export const userRoutes = router;