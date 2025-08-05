import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import positiveChart from '@/assets/image/s1/CapitalPositive.svg'
import negativeChart from '@/assets/image/s1/CapitalNegative.svg'
import { useTranslations } from 'next-intl'

export const S1Earning = () => {
  const t = useTranslations('s1.Earning')
  return (
    <section className='section container'>
      <h2 className='subheading'>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:gap-4 md:flex-row'>
        <Card className={'flex flex-col gap-2 md:flex-1/2'}>
          <h4>{t('positive')}</h4>
          <p>{t('positiveDescription')}</p>
          <Image src={positiveChart} alt={'Positive Chart'} className={'h-auto w-full'} />
        </Card>
        <Card className={'flex flex-col gap-2 md:flex-1/2'}>
          <h4>{t('negative')}</h4>
          <p>{t('negativeDescription')}</p>
          <Image src={negativeChart} alt={'Negative Chart'} className={'h-auto w-full'} />
        </Card>
      </div>
    </section>
  )
}
