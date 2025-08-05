'use client'
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import classes from './mobilemenu.module.css'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('Header')
  const locale = useLocale()
  const pathname = usePathname()

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
                "className='xs:bg-[right_100px] xxl:bg-size-[800px] xxl:bg-[right_top] xl:bg-size-[65%]' h-full w-full bg-[url(/picHero.png)] bg-contain bg-[right_250px] bg-no-repeat sm:bg-size-[90%] sm:bg-[130px_50px] md:bg-contain md:bg-[right_top] lg:bg-size-[80%]"
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
                  href={'/market'}
                  className={clsx({ '!text-accent': pathname === '/market' })}
                  onClick={() => setIsOpen(false)}
                >
                  {t('solutions')}
                </Link>
                <Link
                  href={'/auth'}
                  className={clsx({ '!text-accent': pathname.includes('/auth') })}
                  onClick={() => setIsOpen(false)}
                >
                  Authorization
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
