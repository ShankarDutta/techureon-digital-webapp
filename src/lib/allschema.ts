import { z } from "zod";
export const SubscribeSchema = z.object({
	mail: z.email(),
});

export type SubscribeSchemaType = z.infer<typeof SubscribeSchema>;
