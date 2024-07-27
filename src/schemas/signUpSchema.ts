import {z} from "zod"

export const usernamevalidation = z
    .string()
    .min(2,"Username must be atleast 2 characters")
    .max(20,"username must be max of 20 char")
    .regex(/[a-zA-Z][a-zA-Z0-9-_]{3,32}/, "Username must not contain special char")

export const signUpSchema = z.object({
    username: usernamevalidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"Password must be atleast 6 characters"}).max(22,{message:"Password must be less than 22 char"})
})