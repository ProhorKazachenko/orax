import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import chart from '@/assets/image/TheStrategyA1.svg'
import { Divider } from '@/components/ui/Divider'
import { useTranslations } from 'next-intl'

export const A1Description = () => {
  const t = useTranslations('a1.Description')
  return (
    <section className='section container'>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
        <Card className={'md:flex-1/2'}>
          <Image src={chart} alt={'Chart'} className={'h-auto w-full lg:ml-auto lg:w-3/4'} />
          <p className={'mt-4 mb-3'}>{t('description1')}</p>
          <p>{t('description2')}</p>
        </Card>
        <Card className={'flex-col justify-between md:flex md:flex-1/2 md:gap-6'}>
          <div>
            <h4>{t('odds')}</h4>
            <p className={'mt-1 mb-2 text-white/70'}>{t('subOdds')}</p>
          </div>
          <div className='flex flex-auto flex-col items-stretch justify-between gap-2'>
            <div className='flex justify-between'>
              <p>{t('profitability')}</p>
              <p className={'h4 text-active'}>{t('profitabilityValue')}</p>
            </div>
            <Divider isLong />
            <div className='flex justify-between'>
              <p>{t('sharpe')}</p>
              <p className={'h4 text-active'}>{t('sharpeValue')}</p>
            </div>
            <Divider isLong />
            <div className='flex justify-between'>
              <p>{t('drawdown')}</p>
              <p className={'h4 text-active'}>{t('drawdownValue')}</p>
            </div>
            <Divider isLong />
            <div className='flex justify-between'>
              <p>{t('rebalancing')}</p>
              <p className={'h4 text-active'}>{t('rebalancingValue')}</p>
            </div>
            <Divider isLong />
            <div className='flex justify-between'>
              <p>{t('var')}</p>
              <p className={'h4 text-active'}>{t('varValue')}</p>
            </div>
            <p className={'text-end text-white/70'}>{t('expected')}</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
