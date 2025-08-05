import { Card } from '@/components/ui/Card'
import { useTranslations } from 'next-intl'

export const MarketBenefits = () => {
  const t = useTranslations('market.MarketBenefits')
  return (
    <section className={'section container'}>
      <h2 className={'subheading md:max-lg:max-w-2/3'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
        <Card className={'md:flex-1/2'}>
          <h4 className={'mb-3'}>{t('1title')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('11li')}</li>
            <li>{t('12li')}</li>
            <li> {t('13li')}</li>
          </ul>
        </Card>
        <Card className={'md:flex-1/2'}>
          <h4 className={'mb-3'}>{t('2title')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('21li')}</li>
            <li>{t('22li')}</li>
            <li>{t('23li')}</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
