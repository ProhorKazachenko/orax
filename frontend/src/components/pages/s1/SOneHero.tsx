import { Hero } from '@/components/ui/Hero/Hero'
import { BigChip } from '@/components/ui/BigChip'
import { useTranslations } from 'next-intl'

export const SOneHero = () => {
  const t = useTranslations('s1.hero')
  return (
    <section className={''}>
      <Hero
        heading={t('title')}
        description={t('description')}
        isSecondary
        className={'md:pb-70 lg:md:pb-0'}
      >
        <div className='mt-[90px] flex flex-col items-stretch gap-5 md:flex-row md:gap-2'>
          <BigChip text={t('risk')} />
          <BigChip text={t('profitability')} />
        </div>
      </Hero>
    </section>
  )
}
