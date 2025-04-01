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

interface ThankYouEmailProps {
  name: string;
}

export const ThankYouEmail: React.FC<ThankYouEmailProps> = ({ name }) => {
  return (
    <Html>
      <Body className="bg-white font-sans">
        <Container className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg">
          <Heading className="text-xl font-bold text-blue-600">
            🙏 Merci pour votre message
          </Heading>
          <Section>
            <Text>👋 Bonjour {name},</Text>
            <Text>
              📩 Merci d&apos;avoir pris contact avec moi. J&apos;ai bien reçu
              votre message et je reviendrai vers vous dès que possible.
            </Text>
          </Section>
          <Hr className="my-4 border-t border-gray-200" />
          <Section>
            <Text>
              ✨ Cordialement,
              <br />
              Nhat-Quan HO NGUYEN
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ThankYouEmail;
