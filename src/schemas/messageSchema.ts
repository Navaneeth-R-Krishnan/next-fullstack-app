import {z} from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(10,{message:"Content must be of at least 10 char"})
    .max(300,{message:"Content must be less than 300 char"})
    
    
})

