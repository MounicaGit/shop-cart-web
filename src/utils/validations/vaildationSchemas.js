import { z } from 'zod';

export const emailSchema = z.string().email({ message: "Invalid email address" });
export const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters long" });
export const fullNameSchema = z.string().min(2, { message: "Full name is required" });
export const phoneSchema = z.string().regex(/^[0-9]{10}$/, { message: "Enter a valid 10-digit phone number" });
export const pinCodeSchema = z.string().length(6, { message: "Enter valid pincode" });
export const cardNumberSchema = z.string().length(14, { message: "Enter valid card number" });
export const cvvNumberSchema = z.string().length(3, { message: "Enter valid CVV number" });
export const cardExpirySchema = z.string().length(5, { message: "Enter valid expiry" });

