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
                🙏 Un grand merci pour votre message !
              </Heading>
              <Section>
                <Text>👋 Bonjour {name},</Text>
                <Text>
                  Je suis ravi(e) que vous ayez pris le temps de me contacter
                  via mon portfolio. Votre message est important pour moi et je
                  vais m&apos;assurer de lui accorder toute l&apos;attention
                  qu&apos;il mérite.
                </Text>
                <Text>
                  Je m&apos;engage à vous répondre dans les plus brefs délais,
                  généralement sous 24 à 48 heures ouvrables.
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
                🙏 A big thank you for your message!
              </Heading>
              <Section>
                <Text>👋 Hello {name},</Text>
                <Text>
                  I&apos;m delighted that you took the time to reach out to me
                  through my portfolio. Your message is important to me, and I
                  will make sure to give it the attention it deserves.
                </Text>
                <Text>
                  I am committed to responding as soon as possible, typically
                  within 24 to 48 business hours.
                </Text>
              </Section>
            </>
          )}

          <Hr className="my-4 border-t border-gray-200" />

          {/* Signature bilingue */}
          <Section>
            <Text>
              ✨{' '}
              {language === 'fr'
                ? 'Avec toute ma considération'
                : 'With all my regards'}
              ,
              <br />
              Nhat-Quan HO NGUYEN
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
