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

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactNotification: React.FC<ContactEmailProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Body className="bg-white font-sans">
        <Container className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg">
          <Heading className="text-xl font-bold text-blue-600">
            📨 Nouveau message de {name}
          </Heading>
          <Section className="mt-4">
            <Text className="font-medium">👤 Nom: {name}</Text>
            <Text className="font-medium">📧 Email: {email}</Text>
          </Section>
          <Hr className="my-4 border-t border-gray-200" />
          <Section>
            <Text className="font-medium">💬 Message:</Text>
            <Text className="text-gray-700">{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactNotification;
