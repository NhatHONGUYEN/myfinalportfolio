import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// Les locales supportées
const locales = ['en', 'fr'];
const defaultLocale = 'fr';

// Middleware principal
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rediriger la route racine vers la locale par défaut
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Pour toutes les autres routes, utiliser le middleware de next-intl
  const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
  });

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
