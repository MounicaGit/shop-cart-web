import { z } from 'zod';

export const emailSchema = z.string().email({ message: "Invalid email address" });
export const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters long" });
export const fullNameSchema = z.string().min(2, { message: "Full name is required" });
export const phoneSchema = z.string().regex(/^[0-9]{10}$/, { message: "Enter a valid 10-digit phone number" });
export const pinCodeSchema = z.string().regex(/^[0-9]{6}$/, { message: "Enter valid pincode" })
export const cardNumberSchema = z.string().regex(/^[0-9]{16}$/, { message: "Enter valid card number" });
export const cvvNumberSchema = z.string().regex(/^[0-9]{3}$/, { message: "Enter valid CVV number" });
export const cardExpirySchema = z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Enter valid expiry" })
export const upiSchema = z.string().regex(/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/, { message: "Enter valid UPI ID" })
