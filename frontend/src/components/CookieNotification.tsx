'use client'
import { FC, useEffect, useState } from 'react'
import { UIButton } from '@/components/ui/UIButton'
import { clsx } from 'clsx'
import { useLocale } from 'next-intl'

export const CookieNotification: FC = () => {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setIsOpen(false)
  }
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (!mounted) return
    const cookieAccepted = localStorage.getItem('cookieAccepted')
    if (cookieAccepted) {
      setIsOpen(false)
      return
    }
    setIsOpen(true)
  }, [mounted])
  return (
    <div
      className={clsx(
        'fixed bottom-[10px] left-[10px] z-100 rounded-2xl bg-white/30 p-4 backdrop-blur-2xl max-md:right-[10px] sm:items-center sm:gap-4',
        {
          hidden: !isOpen,
          'block sm:flex': isOpen,
        },
      )}
    >
      <div className={'sm:max-w-[270px] md:max-w-[350px]'}>
        {locale === 'en' ? (
          <p>
            This site uses <span className={'text-active'}>cookie</span>. You may opt in or opt out
            of the use of these technologies.
          </p>
        ) : (
          <p>
            Ta strona używa plików <span className={'text-active'}>cookie</span>. Możesz wyrazić
            zgodę lub zrezygnować z używania tych technologii.
          </p>
        )}
      </div>
      <UIButton
        className={'!min-w-auto px-10 py-4 max-sm:mt-6'}
        type={'button'}
        onClick={handleAccept}
      >
        OK
      </UIButton>
    </div>
  )
}
