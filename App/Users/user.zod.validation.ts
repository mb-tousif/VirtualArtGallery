import { ObjectId } from "mongodb";
import { z } from "zod";
const createUserZodSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(15).optional(),
    role: z.enum(["user", "activeUser", "artist", "admin", "superAdmin"]).optional(),
    name: z.string().min(3).max(50).optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
    DOB: z.string().optional(),
    ECN: z.string().optional(),
    reference: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    purchasedArt: z.array(z.string()).optional(),
    favoritesArt: z.array(z.string()).optional(),
  }),
  // params: z.object({
  //   _id: z.string().refine(value => ObjectId.isValid(value), {
  //     message: "Invalid MongoDB ObjectId",
  //   }).optional(),
  // }),
  });

export default createUserZodSchema;