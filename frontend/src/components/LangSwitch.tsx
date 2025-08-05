'use client'
import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import clsx from 'clsx'

export const LangSwitch = () => {
  const locale = useLocale()
  const pathname = usePathname()
  return (
    <div className={'font-heading flex gap-2 text-[16px] font-extrabold'}>
      <Link href={pathname} locale={'pl'} className={clsx({ '!text-accent': locale === 'pl' })}>
        PL
      </Link>
      <span>|</span>
      <Link href={pathname} locale={'en'} className={clsx({ '!text-accent': locale === 'en' })}>
        EN
      </Link>
    </div>
  )
}
