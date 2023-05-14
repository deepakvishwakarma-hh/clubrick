import { z } from "zod";
export const GroupSchema = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string().optional(),
  type: z.string(),
  category: z.string(),
  banner: z.string(),
  image: z.string(),
});
