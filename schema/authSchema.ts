import {z} from 'zod'
export const loginSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8,"Password must be 8 characters long")
})

export const signupSchema = z.object({
    name : z.string().min(1,"Name can not be empty"),
    email : z.string().email(),
    password : z.string().min(8,"Password must be 8 characters long")
})