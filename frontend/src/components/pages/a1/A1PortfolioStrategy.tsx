import { Card } from '@/components/ui/Card'
import { Divider } from '@/components/ui/Divider'
import Image from 'next/image'
import chart from '@/assets/image/A1Portfolio.svg'
import { useTranslations } from 'next-intl'

export const A1PortfolioStrategy = () => {
  const t = useTranslations('a1.PortfolioStrategy')
  return (
    <section className={'section container'}>
      <h2 className='subheading'>{t('title')}</h2>
      <div className={'flex flex-col gap-2 md:flex-row md:gap-4'}>
        <Card className={'flex flex-col gap-2 md:flex-1/2'}>
          <p className={'font-heading font-extrabold'}>{t('data1title')}</p>
          <p>{t('data1description')}</p>
          <Divider isLong />
          <p className={'font-heading font-extrabold'}>{t('data2title')}</p>
          <p>{t('data2description')}</p>

          <Divider isLong />
          <p className={'font-heading font-extrabold'}>{t('data3title')}</p>
          <p>{t('data3description')}</p>
          <Divider isLong />
          <p className={'font-heading font-extrabold'}>{t('data4title')}</p>
          <p>{t('data4description')}</p>
        </Card>
        <Card className={'flex flex-col justify-between gap-2 md:flex-1/2'}>
          <h4>{t('titleSecondary')}</h4>
          <Image src={chart} alt={'chart'} className={'h-auto w-full xl:w-3/4'} />
        </Card>
      </div>
    </section>
  )
}
