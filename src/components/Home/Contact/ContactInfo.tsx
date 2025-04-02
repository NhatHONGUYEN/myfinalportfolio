import React from 'react';

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  contactValue: string;
  link?: string;
};

export const ContactInfo = ({
  icon,
  title,
  description,
  contactValue,
  link,
}: ContactInfoProps) => {
  return (
    <div className="flex gap-x-6 text-left">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <p className="mt-4 text-sm font-semibold">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              {contactValue}
            </a>
          ) : (
            <span className="font-semibold hover:underline">
              {contactValue}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
