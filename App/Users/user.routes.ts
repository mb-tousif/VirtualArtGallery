import express from 'express';
import zodValidateRequest from '../middleware/zodValidateReq';
import createUserZodSchema from './user.zod.validation';
import { createUser, getAllUsers } from './user.controller';
const router = express.Router();

router.get('/getAllUsers', getAllUsers)
router.post('/createUser', zodValidateRequest(createUserZodSchema),  createUser)


export const userRoutes = router;