import { z } from 'zod';

// Fonction pour créer le schéma en fonction de la langue actuelle
export const createContactFormSchema = (locale: string) => {
  // Messages d'erreur en fonction de la langue
  const errorMessages = {
    fr: {
      nameMin: 'Le nom doit contenir au moins 2 caractères.',
      nameMax: 'Le nom ne peut pas dépasser 50 caractères.',
      emailInvalid: 'Veuillez saisir une adresse email valide.',
      messageMin: 'Votre message doit contenir au moins 10 caractères.',
      messageMax: 'Votre message ne peut pas dépasser 500 caractères.',
      required: 'Ce champ est requis.',
    },
    en: {
      nameMin: 'Name must be at least 2 characters.',
      nameMax: 'Name cannot exceed 50 characters.',
      emailInvalid: 'Please enter a valid email address.',
      messageMin: 'Your message must be at least 10 characters.',
      messageMax: 'Your message cannot exceed 500 characters.',
      required: 'This field is required.',
    },
  };

  // Utiliser les messages en français par défaut si la langue n'est pas supportée
  const messages =
    errorMessages[locale as keyof typeof errorMessages] || errorMessages.fr;

  return z.object({
    name: z
      .string()
      .min(2, { message: messages.nameMin })
      .max(50, { message: messages.nameMax }),
    email: z.string().email({ message: messages.emailInvalid }),
    message: z
      .string()
      .min(10, { message: messages.messageMin })
      .max(500, { message: messages.messageMax }),
  });
};

// Schéma par défaut (pour les cas où on n'a pas accès à la langue)
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit contenir au moins 2 caractères.' })
    .max(50, { message: 'Le nom ne peut pas dépasser 50 caractères.' }),
  email: z
    .string()
    .email({ message: 'Veuillez saisir une adresse email valide.' }),
  message: z
    .string()
    .min(10, { message: 'Votre message doit contenir au moins 10 caractères.' })
    .max(500, {
      message: 'Votre message ne peut pas dépasser 500 caractères.',
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
