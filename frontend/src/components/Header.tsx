'use client'
import { FC } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { MobileMenu } from '@/components/MobileMenu/MobileMenu'
import clsx from 'clsx'
import { Link, usePathname } from '@/i18n/navigation'

export const Header: FC = () => {
  const t = useTranslations('Header')
  const locale = useLocale()
  const pathname = usePathname()
  return (
    <>
      <header className={'sticky top-0 left-0 z-40 w-full py-4 backdrop-blur-2xl'}>
        <div className='container flex items-center justify-between'>
          <Link href={'/'}>
            <Image
              src='/logo.svg'
              alt='ORAX Logo'
              width={265}
              height={16}
              className={
                'max-md:max-h-[25px] max-md:max-w-[265px] max-sm:max-h-[13px] max-sm:max-w-[209px]'
              }
            />
          </Link>
          <nav
            className={clsx('hidden items-center gap-4 font-extrabold', {
              'lg:flex': locale === 'en',
            })}
          >
            <Link href={'/'} className={clsx({ '!text-accent': pathname === '/' })}>
              {t('management')}
            </Link>
            <Link href={'/market'} className={clsx({ '!text-accent': pathname === '/market' })}>
              {t('solutions')}
            </Link>
            <Link href={'/auth'} className={clsx({ '!text-accent': pathname.includes('/auth') })}>
              Authorization
            </Link>
          </nav>
          <div className={'flex items-center gap-2 lg:hidden'}>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}
