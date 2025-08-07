'use client'
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import classes from './mobilemenu.module.css'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelfData } from '@/lib/api/user/user.queries'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('Header')
  const locale = useLocale()
  const pathname = usePathname()
  const { data: user } = useSelfData()

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      return
    }
    document.body.classList.remove('overflow-hidden')
  }, [isOpen])
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className={clsx({ 'lg:hidden': locale === 'en' })}>
      <button
        className={clsx(classes.hamburger, classes.hamburgerSqueeze, {
          [classes.isActive]: isOpen,
        })}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={clsx(classes.hamburgerBox)}>
          <span className={clsx(classes.hamburgerInner)}></span>
        </span>
      </button>
      {mounted &&
        createPortal(
          <div
            className={clsx(
              'font-heading bg-bg fixed right-0 left-0 z-30 h-screen bg-[url("/images/manuBg.png")] bg-cover bg-no-repeat pt-20 text-[28px] transition-all',
              {
                'top-0': isOpen,
                'top-[-150dvh]': !isOpen,
              },
            )}
          >
            <div
              className={
                'h-full w-full bg-[url(/picHero.png)] bg-contain bg-[right_calc(100%+10px)] bg-no-repeat'
              }
            >
              <div className={'container flex flex-col gap-4 font-extrabold md:gap-8'}>
                <Link
                  href={'/'}
                  onClick={() => setIsOpen(false)}
                  className={clsx({ '!text-accent': pathname === '/' })}
                >
                  {t('management')}
                </Link>
                <Link
                  href={'/strategies/b1'}
                  onClick={() => setIsOpen(false)}
                  className={clsx({ '!text-accent': pathname === '/strategies/b1' })}
                >
                  Market Neutral Strategy B1
                </Link>
                <Link
                  href={'/strategies/s1'}
                  onClick={() => setIsOpen(false)}
                  className={clsx({ '!text-accent': pathname === '/strategies/s1' })}
                >
                  Structured Investment Product S1
                </Link>
                <Link
                  href={'/strategies/a1'}
                  onClick={() => setIsOpen(false)}
                  className={clsx({ '!text-accent': pathname === '/strategies/a1' })}
                >
                  Investment Product A1
                </Link>
                <Link
                  href={'/market'}
                  className={clsx({ '!text-accent': pathname === '/market' })}
                  onClick={() => setIsOpen(false)}
                >
                  {t('solutions')}
                </Link>
                {!user && (
                  <Link
                    href={'/auth'}
                    className={clsx({ '!text-accent': pathname.includes('/auth') })}
                    onClick={() => setIsOpen(false)}
                  >
                    Authorization
                  </Link>
                )}
                {user && (
                  <Link
                    href={'/account'}
                    className={clsx({ '!text-accent': pathname.includes('/account') })}
                    onClick={() => setIsOpen(false)}
                  >
                    Account
                  </Link>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
