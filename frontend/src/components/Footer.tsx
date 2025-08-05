'use client'
import { FC } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { clsx } from 'clsx'

export const Footer: FC = () => {
  const t = useTranslations('Footer')
  const pathname = usePathname()

  return (
    <footer className={'relative bg-white/15 backdrop-blur-2xl'}>
      <div className='container flex flex-col gap-10 py-10 font-serif text-[16px] !font-normal md:flex-row md:items-stretch md:justify-between'>
        <div className={'flex flex-col justify-between'}>
          <Image src={'/logo.svg'} alt={'ORAX'} width={412} height={25} />
          <p className={'text-white/50 max-md:hidden'}>{t('Copyright')}</p>
        </div>
        <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap'>
          <Link
            className={clsx('!font-serif md:order-1 md:flex-1/3', {
              '!text-accent': pathname === '/documents/conflict',
            })}
            href={'/documents/conflict'}
          >
            {t('CoI')}
          </Link>
          <Link
            className={clsx('!font-serif md:order-3 md:flex-1/3', {
              '!text-accent': pathname === '/documents/aml',
            })}
            href={'/documents/aml'}
          >
            {t('AML')}
          </Link>
          <Link
            className={clsx('!font-serif md:order-5 md:flex-1/3', {
              '!text-accent': pathname === '/documents/tob',
            })}
            href={'/documents/tob'}
          >
            {t('ToB')}
          </Link>
          <Link
            className={clsx('!font-serif md:order-2 md:flex-1/3', {
              '!text-accent': pathname === '/documents/privacy',
            })}
            href={'/documents/privacy'}
          >
            {t('DPP')}
          </Link>
          <Link
            className={clsx('!font-serif md:order-4 md:flex-1/3', {
              '!text-accent': pathname === '/documents/ra',
            })}
            href={'/documents/ra'}
          >
            {t('RA')}
          </Link>
        </div>
        <p className={'text-white/50 md:hidden'}>{t('Copyright')}</p>
      </div>
    </footer>
  )
}
