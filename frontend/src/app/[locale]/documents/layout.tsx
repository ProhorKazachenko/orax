'use client'
import { useRouter } from 'next/navigation'
import { IconArrowUp } from '@/components/icons/IconArrowUp'
import { useTranslations } from 'next-intl'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const t = useTranslations('common')
  return (
    <div className={'pb-20'}>
      <div className={'container py-4 md:py-6'}>
        <button
          className={
            'font-heading flex cursor-pointer items-center gap-2 text-[14px] font-extrabold md:text-[16px]'
          }
          onClick={() => router.back()}
          aria-label={'Back'}
        >
          <IconArrowUp className={'size-4 -rotate-90'} />
          {t('back')}
        </button>
      </div>
      {children}
    </div>
  )
}
