import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import portfolioChart from '@/assets/image/b1/TrackRecord1.svg'
import historicalChart from '@/assets/image/b1/TrackRecord2.svg'
import { useTranslations } from 'next-intl'

export const B1TrackRecord = () => {
  const t = useTranslations('b1.TrackRecord')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:gap-4 md:flex-row'>
        <Card className='md:flex md:flex-1/2 md:flex-col md:justify-between'>
          <h4 className={'mb-2 md:mb-4'}>{t('title1')}</h4>
          <Image src={portfolioChart} alt={'portfolio chart'} className='h-auto w-full' />
        </Card>
        <Card className={'flex flex-col gap-2 md:flex-1/2 md:justify-between'}>
          <h4>{t('title2')}</h4>
          <Image src={historicalChart} alt={'portfolio chart'} className='h-auto w-full' />
          <p className='md:text-[16px]'>{t('description2')}</p>
          <p className={'text-xs text-white/70'}>{t('shadowed')}</p>
        </Card>
      </div>
    </section>
  )
}
