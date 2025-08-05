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

export const metadata: Metadata = {
  title: 'ORAX CORPORATION',
  description: 'ORAX CORPORATION',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ORAX CORPORATION',
    description: 'ORAX CORPORATION',
    images: process.env.NEXT_PUBLIC_HOST + '/OpenGraph.png',
  },
  twitter: {
    title: 'ORAX CORPORATION',
    description: 'ORAX CORPORATION',
    images: process.env.NEXT_PUBLIC_HOST + '/OpenGraph.png',
    card: 'summary_large_image',
  },
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

  return (
    <html lang={locale} className={`${orbitron.variable} ${manrope.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <CookieNotification />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
