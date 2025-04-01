import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

const timeZoneMapping = {
  en: 'Europe/London',
  fr: 'Europe/Paris',
  // Ajoutez d'autres locales et fuseaux horaires si nécessaire
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: timeZoneMapping[locale] || 'UTC', // Utilisez UTC par défaut si la locale n'est pas trouvée
  };
});
