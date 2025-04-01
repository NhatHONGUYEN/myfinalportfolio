import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'minLength',
    })
    .max(50, {
      message: 'maxLength',
    }),
  email: z.string().email({
    message: 'invalidEmail',
  }),
  message: z
    .string()
    .min(10, {
      message: 'minLength',
    })
    .max(500, {
      message: 'maxLength',
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
