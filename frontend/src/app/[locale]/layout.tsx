import type { Metadata } from 'next'
import '../globals.css'
import { Manrope, Orbitron } from 'next/font/google'
import { Header } from '@/components/Header'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { CookieNotification } from '@/components/CookieNotification'
import Providers from '@/app/[locale]/providers'
import { cookies } from 'next/headers'
import { getQueryClient } from '@/lib/api/queryClient'
import { selfDataOptions } from '@/lib/api/user/user.queries'
import { HydrationBoundary } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/query-core'

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

const description =
  'ORAX CORPORATION LLC - offers flexible solutions for businesses and investors worldwide. We specialize in asset management, financial administration, and consulting, providing a high level of confidentiality and a personalized approach to each client.'

export const metadata: Metadata = {
  title: 'ORAX CORPORATION',
  description: description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST as string),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ORAX CORPORATION',
    description: description,
    images: '/OpenGraph.png',
  },
  twitter: {
    title: 'ORAX CORPORATION',
    description: description,
    images: '/OpenGraph.png',
    card: 'summary_large_image',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const queryClient = getQueryClient()
  if (token) {
    await queryClient.prefetchQuery(selfDataOptions())
  }
  return (
    <html lang={locale} className={`${orbitron.variable} ${manrope.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Header />
              {children}
            </HydrationBoundary>
            <Footer />
            <CookieNotification />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
