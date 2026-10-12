import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, images, API routes, and favicon
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Redirect root to default Bengali locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/bn', request.url));
  }

  // Check if URL has valid locale prefix
  const pathnameHasLocale = pathname.startsWith('/bn') || pathname.startsWith('/en');

  if (!pathnameHasLocale) {
    return NextResponse.redirect(new URL(`/bn${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
