import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactNotification from '../../emails/ContactNotification';
import ThankYouEmail from '../../emails/ThankYouEmail';

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

// Votre adresse email (pour le mode de test)
const OWNER_EMAIL = 'hnnhat67@gmail.com';

// Adresse d'expéditeur vérifiée
const FROM_EMAIL = 'contact@nhatnguyen.dev';

export async function POST(request: Request) {
  try {
    // Extraire les données du corps de la requête
    const { name, email, message } = await request.json();

    // Valider les données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Envoyer l'email au propriétaire
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      react: ContactNotification({ name, email, message }),
    });

    // Maintenant que le domaine est vérifié, on peut envoyer l'email de confirmation
    // directement à l'utilisateur
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Merci pour votre message',
      react: ThankYouEmail({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Erreur d'envoi d'email:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Une erreur est survenue lors de l'envoi de l'email";

    return NextResponse.json(
      {
        error: errorMessage,
        details: error,
      },
      { status: 500 }
    );
  }
}
