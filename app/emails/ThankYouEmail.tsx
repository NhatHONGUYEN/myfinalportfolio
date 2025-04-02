import * as React from 'react';
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Hr,
} from '@react-email/components';

type ThankYouEmailProps = {
  name: string;
  language?: 'fr' | 'en';
};

export default function ThankYouEmail({
  name,
  language = 'fr',
}: ThankYouEmailProps) {
  return (
    <Html>
      <Body className="bg-white font-sans">
        <Container className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg">
          {/* Section française */}
          {(language === 'fr' || !language) && (
            <>
              <Heading className="text-xl font-bold text-blue-600">
                🙏 Merci pour votre message
              </Heading>
              <Section>
                <Text>👋 Bonjour {name},</Text>
                <Text>
                  Je vous remercie d&apos;avoir pris contact avec moi via mon
                  portfolio. Votre message a bien été reçu et j&apos;y
                  accorderai toute mon attention.
                </Text>
                <Text>
                  Je m&apos;efforcerai de vous répondre dans les meilleurs
                  délais, généralement sous 24 à 48 heures ouvrables.
                </Text>
              </Section>
            </>
          )}

          {language === 'fr' && (
            <Hr className="my-4 border-t border-gray-200" />
          )}

          {/* Section anglaise */}
          {(language === 'en' || !language) && (
            <>
              <Heading className="text-xl font-bold text-blue-600">
                🙏 Thank you for your message
              </Heading>
              <Section>
                <Text>👋 Hello {name},</Text>
                <Text>
                  Thank you for contacting me through my portfolio. Your message
                  has been received and I will give it my full attention.
                </Text>
                <Text>
                  I will do my best to respond as soon as possible, typically
                  within 24 to 48 business hours.
                </Text>
              </Section>
            </>
          )}

          <Hr className="my-4 border-t border-gray-200" />

          {/* Signature bilingue */}
          <Section>
            <Text>
              ✨ {language === 'fr' ? 'Cordialement' : 'Sincerely'},
              <br />
              Nhat-Quan HO NGUYEN
            </Text>
            <Text className="text-sm text-gray-500 mt-2">
              Portfolio: nhatnguyen.dev
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
