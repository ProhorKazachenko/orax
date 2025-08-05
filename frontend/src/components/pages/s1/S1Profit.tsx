import Image from 'next/image'
import chart from '@/assets/image/s1/profit.svg'
import { useTranslations } from 'next-intl'

export const S1Profit = () => {
  const t = useTranslations('s1.Profit')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <p className={'md:my-4'}>{t('description')}</p>
      <Image src={chart} alt={'ProfitChart'} className={'h-auto w-full'} />
    </section>
  )
}
