import Image from 'next/image'
import chartEn from '@/assets/image/modals/PortfolioModalEng.svg'
import chartPl from '@/assets/image/modals/PortfolioModalPl.svg'
import { useLocale, useTranslations } from 'next-intl'

export const B1InterestRates = () => {
  const locale = useLocale()
  const t = useTranslations('b1.InterestRates')
  return (
    <section className='section container'>
      <h2 className='subheading ism:max-w-2/3 md:max-xl:max-w-[70%]'>{t('title')}</h2>
      <p className={'mt-2 mb-3 max-lg:max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
      <Image src={locale === 'en' ? chartEn : chartPl} alt={'chart'} className='h-auto w-full' />
    </section>
  )
}
