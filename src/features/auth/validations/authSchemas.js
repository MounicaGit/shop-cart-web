import { z } from 'zod';

export const emailSchema = z.string().email({ message: "Invalid email address" });
export const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters long" });
export const fullNameSchema = z.string().min(2, { message: "Full name is required" });
export const phoneSchema = z.string().regex(/^[0-9]{10}$/, { message: "Enter a valid 10-digit phone number" });