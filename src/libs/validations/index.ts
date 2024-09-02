import { z } from "zod";
export const stringSchema = z.string();
export const optSchema = stringSchema.optional();
export const requiredSchema = stringSchema.min(1, "This field is required.");
export const emailSchema = stringSchema.email("Please provide a valid email");
