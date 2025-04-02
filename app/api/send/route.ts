import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactNotification from '../../emails/ContactNotification';
import ThankYouEmail from '../../emails/ThankYouEmail';

// Vérifier les variables d'environnement requises
if (
  !process.env.RESEND_API_KEY ||
  !process.env.OWNER_EMAIL ||
  !process.env.FROM_EMAIL
) {
  throw new Error(
    "Variables d'environnement manquantes pour l'API d'envoi d'emails"
  );
}

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

// Votre adresse email (pour le mode de test)
const OWNER_EMAIL = process.env.OWNER_EMAIL;

// Adresse d'expéditeur vérifiée
const FROM_EMAIL = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  try {
    // Extraire les données du corps de la requête
    const { name, email, message, language = 'fr' } = await request.json();

    // Valider les données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Valider la langue si fournie
    if (language && !['fr', 'en'].includes(language)) {
      return NextResponse.json(
        { error: 'Invalid language. Must be "fr" or "en"' },
        { status: 400 }
      );
    }

    // Envoyer l'email au propriétaire
    await resend.emails.send({
      from: FROM_EMAIL!,
      to: OWNER_EMAIL!,
      subject:
        language === 'fr'
          ? `Nouveau message de ${name}`
          : `New message from ${name}`,
      replyTo: email,
      react: ContactNotification({ name, email, message, language }),
    });

    // Maintenant que le domaine est vérifié, on peut envoyer l'email de confirmation
    // directement à l'utilisateur
    await resend.emails.send({
      from: FROM_EMAIL!,
      to: email,
      subject:
        language === 'fr'
          ? 'Merci pour votre message'
          : 'Thank you for your message',
      react: ThankYouEmail({ name, language }),
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
