import { render } from '@react-email/render';
import fs from 'fs';
import path from 'path';
import { ThankYouEmail } from './index';
import { ContactNotification } from './index';

// Rendu du template ThankYouEmail
const thankYouEmailHtml = render(ThankYouEmail({ name: 'John Doe' }), {
  pretty: true,
});

// Rendu du template ContactNotification
const contactNotificationHtml = render(
  ContactNotification({
    name: 'John Doe',
    email: 'john@example.com',
    message:
      'Bonjour, je suis intéressé par vos services. Pouvez-vous me contacter?',
  }),
  { pretty: true }
);

// Créer le dossier de prévisualisation s'il n'existe pas
const previewDir = path.join(process.cwd(), 'preview');
if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir, { recursive: true });
}

// Enregistrer les rendus HTML
fs.writeFileSync(path.join(previewDir, 'thank-you.html'), thankYouEmailHtml);
fs.writeFileSync(
  path.join(previewDir, 'contact-notification.html'),
  contactNotificationHtml
);

console.log(
  'Les prévisualisations HTML ont été générées dans le dossier "preview"'
);
