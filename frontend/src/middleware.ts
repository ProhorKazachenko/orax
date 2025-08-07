import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'
import axios, { AxiosError } from 'axios'

const intlMiddleware = createMiddleware(routing)
export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const response = intlMiddleware(req)
  const locale = req.nextUrl.locale || routing.defaultLocale
  if (token) {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/data`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err?.response?.status === 401) {
          response.cookies.delete('token')
          if (req.nextUrl.pathname === '/account') {
            const redirectUrl = new URL(`/${locale}/auth/login`, req.url)
            const redirectResponse = NextResponse.redirect(redirectUrl)
            redirectResponse.cookies.delete('token')
            return redirectResponse
          }
        }
      }
    }
  }
  return response
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
