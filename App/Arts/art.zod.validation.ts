// import { ObjectId } from "mongodb";
import { z } from "zod";
const createArtZodSchema = z.object({
  body: z.object({
    artName: z.string({
      required_error: "Art name is required",
    }).min(3).max(50),
    artDescription: z.string({
      required_error: "Art description is required",
    }).min(20),
    artAuthor: z.string({
      required_error: "Art author is required",
    }).min(3).max(20),
    artAward: z.array(z.string()).optional(),
    artPrice: z.number({
      required_error: "Art price is required",
    }).min(0),
    artQuantity: z.number({
      required_error: "Art quantity is required",
    }).min(0),
    artSelling: z.array(z.string()).optional(),
    artImageUrl: z.string().optional(),
  }),
  });

export default createArtZodSchema;