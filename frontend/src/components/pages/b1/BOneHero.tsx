import { Hero } from '@/components/ui/Hero/Hero'
import { BigChip } from '@/components/ui/BigChip'
import { useTranslations } from 'next-intl'

export const BOneHero = () => {
  const t = useTranslations('b1.hero')
  return (
    <section className={''}>
      <Hero
        heading={t('title')}
        description={t('description')}
        isSecondary
        className={'md:pb-70 lg:md:pb-0'}
      >
        <div className='mt-[108px] flex flex-col items-stretch gap-2 md:flex-row md:gap-2'>
          <BigChip text={t('risk')} />
        </div>
      </Hero>
    </section>
  )
}
