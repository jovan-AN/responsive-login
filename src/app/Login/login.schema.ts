import { z } from "zod";

export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(7);

export type EmailSchemaType = z.infer<typeof emailSchema>;
export type PasswordSchemaType = z.infer<typeof passwordSchema>;
