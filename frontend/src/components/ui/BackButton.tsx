'use client'
import { IconArrowUp } from '@/components/icons/IconArrowUp'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export const BackButton = () => {
  const router = useRouter()
  const t = useTranslations('common')

  return (
    <button
      className={
        'font-heading flex cursor-pointer items-center gap-2 text-[14px] font-extrabold md:mb-6 md:text-[16px]'
      }
      onClick={() => router.back()}
      aria-label={'Back'}
    >
      <IconArrowUp className={'size-4 -rotate-90'} />
      {t('back')}
    </button>
  )
}
