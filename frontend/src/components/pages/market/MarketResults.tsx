import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import switchOn from '@/assets/image/toggleOn.svg'
import switchOff from '@/assets/image/toggleOff.svg'
import chartOff from '@/assets/image/market/AchieveResults1.svg'
import chartOn from '@/assets/image/market/AchieveResults2.svg'
import { useTranslations } from 'next-intl'

export const MarketResults = () => {
  const t = useTranslations('market.MarketResults')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <p className={'mt-2 mb-3 max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
      <Card className={'relative flex flex-col items-stretch gap-2 overflow-hidden'}>
        <div
          className={
            'absolute top-0 right-0 -z-10 h-full w-1/2 bg-white/15 backdrop-blur-2xl group-hover:bg-white/30'
          }
        />
        <div className='flex justify-between'>
          <h4>{t('making')} </h4>
          <h4 className={'text-end'}>{t('making')} </h4>
        </div>
        <div className='mt-4 mb-5 flex justify-between'>
          <div className={'flex items-center gap-2'}>
            <Image src={switchOff} alt={'toggleOff'} className={'h-auto md:w-[70px]'} />
            <p>{t('off')}</p>
          </div>
          <div className={'flex items-center gap-2'}>
            <Image src={switchOn} alt={'toggleOn'} className={'h-auto md:w-[70px]'} />
            <p className={'text-active'}>{t('on')}</p>
          </div>
        </div>
        <div className={'flex items-end justify-center'}>
          <Image src={chartOff} alt={'in off chart'} className={'h-auto w-1/2 flex-auto'} />
          <Image src={chartOn} alt={'in action chart'} className={'h-auto w-1/2 flex-auto'} />
        </div>
      </Card>
    </section>
  )
}
