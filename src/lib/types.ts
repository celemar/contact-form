import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  queryType: z.enum(["general", "support"], {
    message: "Please select a query type",
  }),
  message: z.string().min(5, { message: "This field is required" }),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "To submit this form, please consent to being contacted",
    }),
});
export type TContactFormSchema = z.infer<typeof contactFormSchema>;
