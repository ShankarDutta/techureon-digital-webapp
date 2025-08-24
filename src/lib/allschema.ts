import { z } from "zod";
export const SubscribeSchema = z.object({
	mail: z.email(),
});

export const ConatctSchema = z.object({
	name: z.string(),
	usermail: z.email(),
	number: z
		.string()
		.max(10, { message: "Please enter the  correct phone-number" })
		.min(10, { message: "Please enter the  correct phone-number" }),
	message: z
		.string()
		.min(5, { message: "Message must be at least 5 characters long." })
		.max(300, { message: "Message cannot exceed 300 characters." }),
});

export type SubscribeSchemaType = z.infer<typeof SubscribeSchema>;
export type ConatctSchemaType = z.infer<typeof ConatctSchema>;
