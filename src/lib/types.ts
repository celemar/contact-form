import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, {message: 'This field is required'}),
  lastName: z.string().min(1, {message: 'This field is required'}),
  email: z.string().email({message: 'Please enter a valid email address'}),
  queryType: z.enum(['general', 'support'], {message: 'Please select a query type'}),
  message: z.string().min(5, {message: 'This field is required'}),
  consent: z.boolean().refine(value => value === true, { message: "To submit this form, please consent to being contacted"}),
})
export type TContactFormSchema = z.infer<typeof contactFormSchema>;

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(12,{
    message :"Username does not extend more than 12 characters."
  }),

  firstName: z.string().trim().min(2,{
    message:"First name must be at least 2 characters."
  }),

  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Enter the email"
  }).trim().toLowerCase(),

  phoneNumber: z.string({
    message: "Enter mobile number"
  }).min(10,{
    message: "Phone number is short."
  }).max(10,{
      message: "Phone number is big."
  }).refine((phone) => isMobilePhone(phone),{
    message: "Enter vaild mobile number"
  }),

  message: z.string({message: "Enter message"}).min(12, {
    message: "message must be at least 20 characters.",
  }),

  service: z.enum(["web-design", "web-development","seo","social-media","branding"],{
    message: "Select a service"
  })

}) 